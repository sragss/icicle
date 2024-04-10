

#define SHMEM_SIZE 64
#define MAX_SHMEM_LOG_SIZE 6

#include "../ntt/kernel_ntt.cu"
// static inline __device__ uint32_t bit_rev(uint32_t num, uint32_t log_size) { return __brev(num) >> (32 - log_size); }

// template <typename S>
// __global__ void inplace_rbo(S* arr, int size){
// 	int tid = blockIdx.x * blockDim.x + threadIdx.x;
// 	S temp = arr[tid];
// 	arr[tid] = arr[bit_rev(tid)];
// 	arr[bit_rev(tid)] = temp;
// }

template <typename S>
__global__ void mult_and_reduce(S *v, S *v_r, S alpha, int stride, int jump_size) {
	// Allocate shared memory
	__shared__ S partial_sum[SHMEM_SIZE];

	// Calculate thread ID
	int tid = blockIdx.x * blockDim.x + threadIdx.x;

	// Load elements AND do first add of reduction
	// Vector now 2x as long as number of threads, so scale i
	int i = blockIdx.x * (blockDim.x * 2) + threadIdx.x;

	// Store first partial result instead of just the elements
	// partial_sum[threadIdx.x] = v[i] + v[i + blockDim.x];
	// partial_sum[threadIdx.x] = (S::one() - alpha) * v[2*i] + alpha * v[2*i+1] + (S::one() - alpha) * v[2*(i + blockDim.x)] + alpha * v[2*(i + blockDim.x)+1];
	S e1 = v[i*stride] + alpha * (v[(i+jump_size)*stride] - v[i*stride]);
	S e2 = v[(i + blockDim.x)*stride] + alpha * (v[(i + blockDim.x+jump_size)*stride] - v[(i + blockDim.x)*stride]);
	// S e1 = v[2*i] + (v[2*i+1] - v[2*i]);
	// S e2 = v[2*(i + blockDim.x)] + (v[2*(i + blockDim.x)+1] - v[2*(i + blockDim.x)]);
	// partial_sum[threadIdx.x] = v[2*i] + v[2*(i + blockDim.x)] + alpha * (v[2*i+1] - v[2*i] + v[2*(i + blockDim.x)+1] - v[2*(i + blockDim.x)]);
	partial_sum[threadIdx.x] = e1 + e2;
	// __syncthreads();
	v[i*stride] = e1;
	v[(i + blockDim.x)*stride] = e2;
	// for (int j = 0; j < 2; j++)
	// {
	// 	partial_sum[threadIdx.x] = partial_sum[threadIdx.x] * partial_sum[threadIdx.x];
	// }
	
	__syncthreads();

	// Start at 1/2 block stride and divide by two each iteration
	for (int s = blockDim.x / 2; s > 0; s >>= 1) {
	// for (int s = blockDim.x / 2; s > 1; s >>= 1) {
		// Each thread does work unless it is further than the stride
		if (threadIdx.x < s) {
			partial_sum[threadIdx.x] = partial_sum[threadIdx.x] + partial_sum[threadIdx.x + s];
		}
		__syncthreads();
	}

	// Let the thread 0 for this block write it's result to main memory
	// Result is inexed by this block
	// if (threadIdx.x < nof_results) {
	if (threadIdx.x == 0) {
		// printf("debug tid %d, val %d\n", threadIdx.x, partial_sum[threadIdx.x]);
		// v_r[nof_results*blockIdx.x + threadIdx.x] = partial_sum[threadIdx.x];
		v_r[i*stride] = partial_sum[0];
	}
}


template <typename S>
__global__ void sum_reduction(S *v, S *v_r, int stride) {
	// Allocate shared memory
	__shared__ S partial_sum[SHMEM_SIZE];

	// Calculate thread ID
	int tid = blockIdx.x * blockDim.x + threadIdx.x;

	// Load elements AND do first add of reduction
	// Vector now 2x as long as number of threads, so scale i
	int i = blockIdx.x * (blockDim.x * 2) + threadIdx.x;

	// Store first partial result instead of just the elements
	partial_sum[threadIdx.x] = v[i*stride] + v[(i + blockDim.x)*stride];
	__syncthreads();

	// Start at 1/2 block stride and divide by two each iteration
	for (int s = blockDim.x / 2; s > 0; s >>= 1) {
	// for (int s = blockDim.x / 2; s > 1; s >>= 1) {
		// Each thread does work unless it is further than the stride
		if (threadIdx.x < s) {
			partial_sum[threadIdx.x] = partial_sum[threadIdx.x] + partial_sum[threadIdx.x + s];
		}
		__syncthreads();
	}

	// Let the thread 0 for this block write it's result to main memory
	// Result is inexed by this block
	// if (threadIdx.x < nof_results) {
	if (threadIdx.x == 0) {
		// printf("debug tid %d, val %d\n", threadIdx.x, partial_sum[threadIdx.x]);
		// v_r[blockIdx.x] = partial_sum[0];
		v_r[i*stride] = partial_sum[0];
		// v_r[nof_results*blockIdx.x + threadIdx.x] = partial_sum[threadIdx.x];
	}
}

template <typename S, int POLYS>
__global__ void update_evals_kernel(S* evals, S alpha, int poly_size, int poly_shift){
  int threads_per_poly = poly_size/2;
	int tid = blockIdx.x * blockDim.x + threadIdx.x;
	if (tid >= threads_per_poly*POLYS) return;
	int poly_id = tid / threads_per_poly;
	int eval_id = tid % threads_per_poly;
  // evals[tid] = (S::one() - alpha) * evals[2*tid] + alpha * evals[2*tid+1];
  // evals[tid] =  evals[2*tid] + (evals[2*tid+1] - evals[2*tid]);
	// if (tid==0) printf("%d, %d, %d, %d, %d\n", poly_size, poly_id, eval_id, poly_id*poly_size*2+eval_id, poly_id*poly_size*2+eval_id+poly_size);
	// if (tid==0) printf("what12 %d %d\n",evals[poly_id*poly_size*2 + eval_id], evals[poly_id*poly_size*2 + eval_id+poly_size]);
  evals[poly_id*poly_shift + eval_id] =  evals[poly_id*poly_shift+eval_id] + alpha * (evals[poly_id*poly_shift+eval_id+threads_per_poly] - evals[poly_id*poly_shift+eval_id]);
	// if (tid==0) printf("what %d\n",evals[poly_id*poly_size*2 + eval_id]);
  // evals[tid] = (1 - alpha) * evals[2*tid] + alpha * evals[2*tid+1];
}

template <typename S, int R>
void accumulate(S* in, S* out, int log_size, cudaStream_t stream){
  int nof_steps = (log_size - 1) / MAX_SHMEM_LOG_SIZE;
  int last_step_size = (log_size - 1) % MAX_SHMEM_LOG_SIZE;
	// printf("a nof steps %d last size %d\n", nof_steps, last_step_size);
  for (int i = 0; i < nof_steps; i++)
  {
    sum_reduction<<<(1<<(log_size - 1 - (MAX_SHMEM_LOG_SIZE)*(i+1))) * R, SHMEM_SIZE/2,0,stream>>>(i? out : in, out, 1<<(MAX_SHMEM_LOG_SIZE*i));
		// printf("a nof blocks %d\n", 1<<(log_size -(MAX_SHMEM_LOG_SIZE)*(i+1)));
		// cudaDeviceSynchronize();
  	// printf("cuda err %d\n", cudaGetLastError());
  }
  if (last_step_size) sum_reduction<<<R, 1<<(last_step_size-1), 0,stream>>>(nof_steps? out : in, out, 1<<(MAX_SHMEM_LOG_SIZE*nof_steps));
	// cudaDeviceSynchronize();
  // printf("cuda err last %d\n", cudaGetLastError());
}


template <typename S, int R>
void mult_and_accumulate(S* in, S* out, int log_size, S alpha, cudaStream_t stream){
  int nof_steps = (log_size - 1) / MAX_SHMEM_LOG_SIZE;
  int last_step_size = (log_size - 1) % MAX_SHMEM_LOG_SIZE;
	// printf("m nof steps %d last size %d\n", nof_steps, last_step_size);
  for (int i = 0; i < nof_steps; i++)
  {
		if (i) sum_reduction<<<(1<<(log_size - 1 - (MAX_SHMEM_LOG_SIZE)*(i+1))) * R, SHMEM_SIZE/2,0,stream>>>(i? out : in, out, 1<<(MAX_SHMEM_LOG_SIZE*i));
    else mult_and_reduce<<<(1<<(log_size - 1 - (MAX_SHMEM_LOG_SIZE)*(i+1))) * R, SHMEM_SIZE/2,0,stream>>>(i? out : in, out, alpha, 1<<(MAX_SHMEM_LOG_SIZE*i), 1<<log_size);
		// if (i) printf("r nof blocks %d\n", 1<<(log_size-(MAX_SHMEM_LOG_SIZE)*(i+1)));
		// else printf("m nof blocks %d\n", 1<<(log_size-(MAX_SHMEM_LOG_SIZE)*(i+1)));
		// cudaDeviceSynchronize();
  	// printf("cuda err %d\n", cudaGetLastError());
  }
  if (last_step_size) {
		if (nof_steps) sum_reduction<<<R, 1<<(last_step_size-1), 0,stream>>>(nof_steps? out : in, out, 1<<(MAX_SHMEM_LOG_SIZE*nof_steps));
		else mult_and_reduce<<<R, 1<<(last_step_size-1), 0,stream>>>(nof_steps? out : in, out, alpha, 1<<(MAX_SHMEM_LOG_SIZE*nof_steps), 1<<(last_step_size+1));
		// if (nof_steps) printf("r last");
		// else printf("m last");
	} 
	// cudaDeviceSynchronize();
  // printf("cuda err last %d\n", cudaGetLastError());
}

template <typename S, int R>
 __launch_bounds__(1)
__global__ void add_to_trace(S* trace, S* vals, int stride, int round_num){
	for (int i = 0; i < R; i++)
	{
		trace[R*round_num+1+i] = vals[i*stride];
	}
	// for (int i = 0; i < nof_results; i++)
	// {
	// 	trace[nof_results*round_num+1+i] = vals[i];
	// }
	  // trace[2*round_num+1] = vals[0];
    // trace[2*round_num+2] = vals[1];
		// printf("%d  %d\n", vals[0], vals[1]);
}

template <typename S>
// __global__ void combinations_kernel(S* in, S* out, S (*combine_func)()){
__global__ void combinations_kernel3(S* in, S* out, int poly_size, int poly_shift){
	int tid = blockIdx.x * blockDim.x + threadIdx.x;
	if (tid >= poly_size/2) return;
	S rp[4] = {S::one(), S::one(), S::one(), S::one()};
	S e1, e2;
	#pragma unroll
	for (int l = 0; l < 3; l++)
	{
	  e1 = in[l*poly_shift + tid];
	  e2 = in[l*poly_shift + tid + poly_size/2];
		rp[0] = l? rp[0]*e1 : e1; //k=0
		rp[1] = l? rp[1]*e2 : e2; //k=1
		rp[2] = l? rp[2]*(e2 + e2 - e1) : (e2 + e2 - e1); //k=2
		// rp[3] = l? rp[3]*(e1 + e1 - e2) : (e1 + e1 - e2); //k=-1
		rp[3] = l? rp[3]*(e2 + e2 + e2 - e1 - e1) : (e2 + e2 + e2 - e1 - e1); //k=3
	}
	out[tid] = rp[0];
	out[tid + 1*poly_size/2] = rp[1];
	out[tid + 2*poly_size/2] = rp[2];
	out[tid + 3*poly_size/2] = rp[3];
}

template <typename S, int POLYS>
// __global__ void combinations_kernel(S* in, S* out, S (*combine_func)()){
__global__ void combinations_kernel(S* in, S* out, int poly_size, int poly_shift){
	int tid = blockIdx.x * blockDim.x + threadIdx.x;
	if (tid >= poly_size/2) return;
	S rp[5] = {S::one(), S::one(), S::one(), S::one(), S::one()}; //TODO: generalize - make template version
	S e1, e2;
	#pragma unroll
	for (int l = 0; l < POLYS; l++)
	{
	  e1 = in[l*poly_shift + tid];
	  e2 = in[l*poly_shift + tid + poly_size/2];
		rp[0] = l? rp[0]*e1 : e1; //k=0
		rp[1] = l? rp[1]*e2 : e2; //k=1
		if (POLYS == 1) continue;
		rp[2] = l? rp[2]*(e2 + e2 - e1) : (e2 + e2 - e1); //k=2
		if (POLYS == 2) continue;
		// rp[3] = l? rp[3]*(e1 + e1 - e2) : (e1 + e1 - e2); //k=-1
		rp[3] = l? rp[3]*(e2 + e2 + e2 - e1 - e1) : (e2 + e2 + e2 - e1 - e1); //k=3
		if (POLYS == 3) continue;
		rp[4] = l? rp[4]*(e2 + e2 + e2 + e2 - e1 - e1 - e1) : (e2 + e2 + e2 + e2 - e1 - e1 - e1); //k=4 TODO: save addition using extra reg?
	}
	out[tid] = rp[0];
	out[tid + 1*poly_size/2] = rp[1];
	if (POLYS == 1) return;
	out[tid + 2*poly_size/2] = rp[2];
	if (POLYS == 2) return;
	out[tid + 3*poly_size/2] = rp[3];
	if (POLYS == 3) return;
	out[tid + 4*poly_size/2] = rp[4];
}

template <typename S>
// __global__ void combinations_kernel(S* in, S* out, S (*combine_func)()){
__global__ void mult_and_combine3(S* in, S* out, int poly_size, int poly_shift, S alpha){
	int tid = blockIdx.x * blockDim.x + threadIdx.x;
	if (tid >= poly_size/2) return;
	S rp[4] = {S::one(), S::one(), S::one(), S::one()};
	S e1, e2;
	#pragma unroll
	for (int l = 0; l < 3; l++)
	{
		e1 = in[l*poly_shift + tid] + alpha * (in[l*poly_shift + tid + poly_size] - in[l*poly_shift + tid]);
		e2 = in[l*poly_shift + tid + poly_size/2] + alpha * (in[l*poly_shift + tid + poly_size/2 + poly_size] - in[l*poly_shift + tid + poly_size/2]);
		in[l*poly_shift + tid] = e1;
		in[l*poly_shift + tid + poly_size/2] = e2;
		rp[0] = rp[0]*e1;
		rp[1] = rp[1]*e2;
		rp[2] = rp[2]*(e2 + e2 - e1);
		rp[3] = rp[3]*(e2 + e2 + e2 - e1 - e1);
	}
	out[tid] = rp[0];
	out[tid + 1*poly_size/2] = rp[1];
	out[tid + 2*poly_size/2] = rp[2];
	out[tid + 3*poly_size/2] = rp[3];
}

template <typename S, int POLYS>
// __global__ void combinations_kernel(S* in, S* out, S (*combine_func)()){
__global__ void mult_and_combine(S* in, S* out, int poly_size, int poly_shift, S alpha){
	int tid = blockIdx.x * blockDim.x + threadIdx.x;
	if (tid >= poly_size/2) return;
	S rp[5] = {S::one(), S::one(), S::one(), S::one(), S::one()}; //TODO: generalize
	S e1, e2;
	#pragma unroll
	for (int l = 0; l < POLYS; l++)
	{
		e1 = in[l*poly_shift + tid] + alpha * (in[l*poly_shift + tid + poly_size] - in[l*poly_shift + tid]);
		e2 = in[l*poly_shift + tid + poly_size/2] + alpha * (in[l*poly_shift + tid + poly_size/2 + poly_size] - in[l*poly_shift + tid + poly_size/2]);
		in[l*poly_shift + tid] = e1;
		in[l*poly_shift + tid + poly_size/2] = e2;
		rp[0] = rp[0]*e1;
		rp[1] = rp[1]*e2;
		if (POLYS == 1) continue;
		rp[2] = l? rp[2]*(e2 + e2 - e1) : (e2 + e2 - e1); //k=2
		if (POLYS == 2) continue;
		rp[3] = l? rp[3]*(e2 + e2 + e2 - e1 - e1) : (e2 + e2 + e2 - e1 - e1); //k=3
		if (POLYS == 3) continue;
		rp[4] = l? rp[4]*(e2 + e2 + e2 + e2 - e1 - e1 - e1) : (e2 + e2 + e2 + e2 - e1 - e1 - e1); //k=4
	}
	out[tid] = rp[0];
	out[tid + 1*poly_size/2] = rp[1];
	if (POLYS == 1) return;
	out[tid + 2*poly_size/2] = rp[2];
	if (POLYS == 2) return;
	out[tid + 3*poly_size/2] = rp[3];
	if (POLYS == 3) return;
	out[tid + 4*poly_size/2] = rp[4];
}


template <typename S>
S my_hash(){
	S val = S::one() + S::one();
	val = val + val;
	val = val + val; 
	return val + S::one() + S::one();
}


template <typename S, int POLYS>
void sumcheck_generic_unified(S* evals, S* t, S* T, S C, int n, cudaStream_t stream){
	// S alpha = 1;
	// S alpha = S::one();
	// S alpha = S::rand_host();
  S alpha = my_hash<S>();
  // S rp_even, rp_odd;
  for (int p = 0; p < n; p++)
  {
    int nof_threads = 1<<(n-1-p);
		int NOF_THREADS = 64;
		int NOF_BLOCKS = (nof_threads + NOF_THREADS - 1) / NOF_THREADS;
		if (POLYS == 1){
		  if (p) mult_and_accumulate<S,POLYS+1>(evals, t, n-p, alpha, stream); //accumulation
			else accumulate<S,POLYS+1>(evals, t, n-p, stream);
			if (p == n-1) break;
		}
		else {
			if (p) mult_and_combine<S,POLYS><<<NOF_BLOCKS, NOF_THREADS,0,stream>>>(evals, t, 1<<(n-p), 1<<n, alpha);
			else combinations_kernel<S,POLYS><<<NOF_BLOCKS, NOF_THREADS,0,stream>>>(evals, t, 1<<(n-p), 1<<n);
			accumulate<S,POLYS+1>(t, t, n-p, stream);
		}
		add_to_trace<S,POLYS+1><<<1,1,0,stream>>>(T, t, 1<<(n-1-p), p);
  }
	if (POLYS == 1){
		update_evals_kernel<S,POLYS><<<1, 2,0, stream>>>(evals, alpha, 4, 0);
		add_to_trace<S,POLYS+1><<<1,1,0,stream>>>(T, evals, 1, n-1);
	}
}


template <typename S>
void sumcheck_generic_ref(S* evals, S* t, S* T, S C, int n, int nof_polys){
  // S alpha = my_hash(/*T, C*/);
	// S alpha = 1;
	// S alpha = S::one() + S::one();
	S alpha = my_hash<S>();
  
  for (int p = 0; p < n; p++)
  {

		// rp_even = 0; rp_odd = 0;
		// printf("evals\n");
		// for (int i = 0; i < 1<<(n-p); i++)
		// {
		// 	printf("%d, ",evals[i]);
		// }
		// printf("\n");
		for (int i = 0; i < 1<<(n-1-p); i++)
		{
			S rp[5] = {S::one(), S::one(), S::one(), S::one(), S::one()};
			for (int l = 0; l < nof_polys; l++)
			{
				S e1 = evals[(l<<(n-p)) + i];
				S e2 = evals[(l<<(n-p)) + i + (1<<(n-1-p))];
				rp[0] = l? rp[0]*e1 : e1; //k=0
				rp[1] = l? rp[1]*e2 : e2; //k=1
				if (nof_polys > 1) rp[2] = l? rp[2]*(e2 + e2 - e1) : (e2 + e2 - e1); //k=2
				if (nof_polys > 2) rp[3] = l? rp[3]*(e2 + e2 + e2 - e1 - e1) : (e2 + e2 + e2 - e1 - e1); //k=3
				if (nof_polys > 3) rp[4] = l? rp[4]*(e2 + e2 + e2 + e2 - e1 - e1 - e1) : (e2 + e2 + e2 + e2 - e1 - e1 - e1); //k=4
			}
			T[(nof_polys+1)*p+1] = T[(nof_polys+1)*p+1] + rp[0];
			T[(nof_polys+1)*p+2] = T[(nof_polys+1)*p+2] + rp[1];
			if (nof_polys > 1) T[(nof_polys+1)*p+3] = T[(nof_polys+1)*p+3] + rp[2];
			if (nof_polys > 2) T[(nof_polys+1)*p+4] = T[(nof_polys+1)*p+4] + rp[3];
			if (nof_polys > 3) T[(nof_polys+1)*p+5] = T[(nof_polys+1)*p+5] + rp[4];
		}
    // alpha = my_hash(/*alpha, t[0], t[1]*/); //phase 2
		// alpha = 1;
		// alpha = S::one();
		for (int l = 0; l < nof_polys; l++)
		{
			for (int i = 0; i < 1<<(n-1-p); i++)
			{
				t[(l<<(n-1-p)) + i] = (S::one() - alpha) * evals[(l<<(n-p)) + i] + alpha * evals[(l<<(n-p)) + i + (1<<(n-1-p))];
				// t[i] = (1-alpha)*evals[2*i] + alpha*evals[2*i+1];
			}
		}
// 		if (1)
// {		printf("ref round %d evals:\n",p);
// 		for (int i = 0; i < 3<<(n-p); i++)
// 		{
// 			std::cout << i << " " << evals[i] << std::endl;
// 		}}
		for (int i = 0; i < nof_polys<<(n-1-p); i++)
		{
			evals[i] = t[i];
		}
  }
}