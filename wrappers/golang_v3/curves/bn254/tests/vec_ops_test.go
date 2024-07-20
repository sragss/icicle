package tests

import (
	"testing"

	"github.com/ingonyama-zk/icicle/v2/wrappers/golang_v3/core"
	bn254 "github.com/ingonyama-zk/icicle/v2/wrappers/golang_v3/curves/bn254"
	"github.com/ingonyama-zk/icicle/v2/wrappers/golang_v3/curves/bn254/vecOps"
	"github.com/stretchr/testify/assert"
)

func TestBn254VecOps(t *testing.T) {
	testSize := 1 << 14

	a := bn254.GenerateScalars(testSize)
	b := bn254.GenerateScalars(testSize)
	var scalar bn254.ScalarField
	scalar.One()
	ones := core.HostSliceWithValue(scalar, testSize)

	out := make(core.HostSlice[bn254.ScalarField], testSize)
	out2 := make(core.HostSlice[bn254.ScalarField], testSize)
	out3 := make(core.HostSlice[bn254.ScalarField], testSize)

	cfg := core.DefaultVecOpsConfig()

	vecOps.VecOp(a, b, out, cfg, core.Add)
	vecOps.VecOp(out, b, out2, cfg, core.Sub)

	assert.Equal(t, a, out2)

	vecOps.VecOp(a, ones, out3, cfg, core.Mul)

	assert.Equal(t, a, out3)
}

func TestBn254Transpose(t *testing.T) {
	rowSize := 1 << 6
	columnSize := 1 << 8

	matrix := bn254.GenerateScalars(rowSize * columnSize)

	out := make(core.HostSlice[bn254.ScalarField], rowSize*columnSize)
	out2 := make(core.HostSlice[bn254.ScalarField], rowSize*columnSize)

	cfg := core.DefaultVecOpsConfig()

	vecOps.TransposeMatrix(matrix, out, columnSize, rowSize, cfg)
	vecOps.TransposeMatrix(out, out2, rowSize, columnSize, cfg)

	assert.Equal(t, matrix, out2)

	var dMatrix, dOut, dOut2 core.DeviceSlice

	matrix.CopyToDevice(&dMatrix, true)
	dOut.Malloc(columnSize*rowSize*matrix.SizeOfElement(), matrix.SizeOfElement())
	dOut2.Malloc(columnSize*rowSize*matrix.SizeOfElement(), matrix.SizeOfElement())

	vecOps.TransposeMatrix(dMatrix, dOut, columnSize, rowSize, cfg)
	vecOps.TransposeMatrix(dOut, dOut2, rowSize, columnSize, cfg)
	output := make(core.HostSlice[bn254.ScalarField], rowSize*columnSize)
	output.CopyFromDevice(&dOut2)

	assert.Equal(t, matrix, output)
}
