/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { type Event } from '@/shared/api/eventAPI/model';
import { fetchEvents } from '../reducers/events/ActionCreators';

interface EventsState {
  events: Event[];
  isLoading: boolean;
  error: string;
}

const initialState: EventsState = {
  events: [],
  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchEvents.fulfilled.type]: (state, action: PayloadAction<Event[]>) => {
      state.isLoading = false;
      state.error = '';
      state.events = action.payload;
    },
    [fetchEvents.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchEvents.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
