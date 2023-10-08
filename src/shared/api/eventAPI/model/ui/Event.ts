export type Event = {
  id: string;
  title: string;
  description: string;
  image: string;
  dates: EventDate[];
};

export type EventDate = {
  datetimeFrom: string;
  datetimeTo: string | null;
};

export type Events = [Event];
