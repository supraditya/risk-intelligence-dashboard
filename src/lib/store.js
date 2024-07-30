import { configureStore } from '@reduxjs/toolkit'
import riskSlice from './selectedRiskSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      risk: riskSlice,
    },
  })
}