import { Link } from 'react-router-dom';
import { eventAPI } from '@/shared/api/eventAPI';

const EventsPage = () => {
  const { data } = eventAPI.useFetchAllEventsQuery();

  return (
    <>
      <h1>EventsPage</h1>

      <ul>
        {data?.map((event) => (
          <li key={event.id}>
            <Link to={event.id} key={event.id}>
              {event.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;
