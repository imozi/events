import { DateFormat } from '@/shared/lib/utils/formatISODateToReadable';

export type Event = {
  id: string;
  title: string;
  description: string;
  image: string | null;
  type: string;
  dates: EventDate[];
};

export type EventDate = {
  datetimeFrom: string | null;
  datetimeTo: string | null;
};

export type Events = Event[];

export interface ITransformDateEvent extends Omit<Event, 'dates'> {
  dates: FormatedDate[];
}

export type FormatedDate = {
  from: DateFormat | null;
  to: DateFormat | null;
  times: string[];
};

export type ITransformDateEvents = ITransformDateEvent[];
