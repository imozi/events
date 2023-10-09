import { Link } from 'react-router-dom';
import { eventAPI } from '@/shared/api/eventAPI';
import { EventCard } from '@/shared/ui';
import IconBack from '@/shared/assets/icons/icon-back-page.svg';
import cls from './EventsPage.module.scss';
import { useDocumentTitle } from '@/shared/lib/hooks/useDocumentTitle';

const EventsPage = () => {
  const { data } = eventAPI.useFetchAllEventsQuery();

  useDocumentTitle('Список мероприятий');

  return (
    <>
      <header className={cls.header}>
        <nav className="navigation">
          <ul className={cls.navigation__list}>
            <li className="navigation__item">
              <Link to="/">
                <span className="visually-hidden">Венуться назад</span>
                <IconBack />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={cls.main}>
        <h1>Мероприятия</h1>
        <section className={cls.events}>
          <h2>Список запланированных мероприятий</h2>
          {data && (
            <ul className={cls.events__list}>
              {data.map((event) => (
                <li className={cls.events__item} key={event.id}>
                  <EventCard event={event} />
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </>
  );
};

export default EventsPage;
