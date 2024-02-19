import { configureStore } from '@reduxjs/toolkit'
import gateReducer from './slices/GateSlice'

export const store = configureStore({
  reducer: { gates: gateReducer },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
