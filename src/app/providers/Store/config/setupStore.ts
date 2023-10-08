import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { eventAPI } from '@/shared/api/eventAPI';

const rootReducer = combineReducers({
  [eventAPI.reducerPath]: eventAPI.reducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(eventAPI.middleware),
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
