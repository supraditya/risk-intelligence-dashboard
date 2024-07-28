import { configureStore } from '@reduxjs/toolkit'
import selectedRiskSlice from './selectedRiskSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      selectedRisk: selectedRiskSlice,
    },
  })
}