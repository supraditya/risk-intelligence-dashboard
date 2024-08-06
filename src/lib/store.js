import { configureStore } from '@reduxjs/toolkit'
import riskSlice from './riskSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      risk: riskSlice,
    },
  })
}