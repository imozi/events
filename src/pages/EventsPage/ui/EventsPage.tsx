import { Link } from 'react-router-dom';
import { eventAPI } from '@/shared/api/eventAPI';
import { EventCard } from '@/shared/ui';
import IconBack from '@/shared/assets/icons/icon-back-page.svg';
import cls from './EventsPage.module.scss';

const EventsPage = () => {
  const { data, isLoading, error } = eventAPI.useFetchAllEventsQuery();

  return (
    <>
      <header className={cls.header}>
        <nav className={cls.navigation}>
          <ul className={cls.navigation__list}>
            <li className={cls.navigation__item}>
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
          {/* {isLoading && <p>Загрузка данных</p>}
          {error && <p>Произошла ошибка при загрузке</p>} */}
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
