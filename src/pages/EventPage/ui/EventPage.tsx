import { useParams } from 'react-router-dom';
import { EventCard } from '@/shared/ui/EventCard/ui/EventCard';
import { eventAPI } from '@/shared/api/eventAPI';

const EventPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = eventAPI.useFetchEventByIdQuery(id as string);

  const event = {
    title: 'Hello World!',
  };

  return <EventCard event={event} />;
};

export default EventPage;
