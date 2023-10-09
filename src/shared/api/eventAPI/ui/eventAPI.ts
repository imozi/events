import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { type Events, type Event } from '../model';
import { FormatDate } from '@/shared/lib/utils/formatDate';
import { type ITransformDateEvent, type ITransformDateEvents } from '../model/ui/Event';

export const eventAPI = createApi({
  reducerPath: 'eventAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  tagTypes: ['Events'],
  endpoints: (builder) => ({
    fetchAllEvents: builder.query<ITransformDateEvents, void>({
      query: () => ({
        url: `/events`,
        method: 'GET',
      }),
      transformResponse: (response: Events) =>
        response.map((date): ITransformDateEvent => {
          const transformDate = FormatDate({ dates: date.dates });

          return { ...date, dates: transformDate };
        }),
      providesTags: (result) => ['Events'],
    }),
    fetchEventById: builder.query<ITransformDateEvent, string>({
      query: (id) => ({
        url: `/events/${id}`,
        method: 'GET',
      }),
      transformResponse: (response: Event) => {
        const transformDate = FormatDate({ dates: response.dates });
        return { ...response, dates: transformDate };
      },
      providesTags: (result) => ['Events'],
    }),
  }),
});
