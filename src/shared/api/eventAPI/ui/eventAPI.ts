/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { type Events, type Event } from '../model';

export const eventAPI = createApi({
  reducerPath: 'eventAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  tagTypes: ['Events'],
  endpoints: (build) => ({
    fetchAllEvents: build.query<Events, void>({
      query: () => ({
        url: `/events`,
      }),
      providesTags: (result) => ['Events'],
    }),
    fetchEventById: build.query<Event, string>({
      query: (id) => ({
        url: `/events/${id}`,
      }),
      providesTags: (result) => ['Events'],
    }),
  }),
});
