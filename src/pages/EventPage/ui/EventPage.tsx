import { useParams } from 'react-router-dom';
import { EventCard } from '@/shared/ui/EventCard/ui/EventCard';

const EventPage = () => {
  const { id } = useParams<{ id: string }>();
  const event = {
    title: 'Hello World!',
  };

  return <EventCard event={event} />;
};

export default EventPage;
