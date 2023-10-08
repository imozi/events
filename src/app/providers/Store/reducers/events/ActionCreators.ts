import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Events } from '@/shared/api/eventAPI/model';

export const fetchEvents = createAsyncThunk('events/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get<Events>('http://localhost:3001/events');
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue('Не удалось загрузить мероприятия');
  }
});
