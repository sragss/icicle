package ntt

// #cgo CFLAGS: -I./include/
// #include "ntt.h"
import "C"

import (
	"github.com/ingonyama-zk/icicle/v2/wrappers/golang_v3/core"
	"github.com/ingonyama-zk/icicle/v2/wrappers/golang_v3/runtime"
)

func Ntt[T any](scalars core.HostOrDeviceSlice, dir core.NTTDir, cfg *core.NTTConfig[T], results core.HostOrDeviceSlice) runtime.EIcicleError {
	scalarsPointer, resultsPointer, size, cfgPointer := core.NttCheck[T](scalars, cfg, results)

	cScalars := (*C.scalar_t)(scalarsPointer)
	cSize := (C.int)(size)
	cDir := (C.int)(dir)
	cCfg := (*C.NTTConfig)(cfgPointer)
	cResults := (*C.scalar_t)(resultsPointer)

	__ret := C.babybear_extension_ntt(cScalars, cSize, cDir, cCfg, cResults)
	err := runtime.EIcicleError(__ret)
	return err
}