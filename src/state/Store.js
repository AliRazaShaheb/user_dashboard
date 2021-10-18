
import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './ReducerIndex';

export const store = configureStore({
  reducer: {rootReducer},
})

