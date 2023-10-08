export type Event = {
  id: string;
  title: string;
  description: string;
  image: string;
  type: string;
  dates: EventDate[];
};

export type EventDate = {
  datetimeFrom: string | null;
  datetimeTo: string | null;
};

export type Events = [Event];
