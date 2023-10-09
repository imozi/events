import { Link, useParams } from 'react-router-dom';
import IconBack from '@/shared/assets/icons/icon-back-page.svg';
import { eventAPI } from '@/shared/api/eventAPI';
import cls from './EventPage.module.scss';
import { Loader } from '@/shared/ui';
import { useDocumentTitle } from '@/shared/lib/hooks/useDocumentTitle';
import { DateTimeCard } from '@/shared/ui/DateTimeCard';

const EventPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = eventAPI.useFetchEventByIdQuery(id as string);

  useDocumentTitle(data ? data.title : 'Загрузка');

  if (data) {
    console.log(data);
  }

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <header className={cls.header}>
        <nav className="navigation">
          <ul className={cls.navigation__list}>
            <li className="navigation__item">
              <Link to="/events">
                <span className="visually-hidden">Венуться назад</span>
                <IconBack />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <section className={cls.event}>
          {data && data.image ? (
            <div className={cls.event__image}>
              <img src={data.image} alt={data.title} />
            </div>
          ) : (
            <div className={`${cls.event__image} ${cls['event__image--not-image']}`} />
          )}
          {data && (
            <div className={cls.event__description}>
              <h1>{data.title}</h1>
              <p>{data.type}</p>
              <p>{data.description}</p>
            </div>
          )}

          <div className={cls.event__dates}>
            <p>Дата и время проведения</p>
            <ul className={cls['event__dates-list']}>
              <li>
                <DateTimeCard />
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

export default EventPage;
