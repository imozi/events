import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { eventAPI } from '@/shared/api/eventAPI';

const rootReducer = combineReducers({
  [eventAPI.reducerPath]: eventAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(eventAPI.middleware),
});
