import { Link, useParams } from 'react-router-dom';
import IconBack from '@/shared/assets/icons/icon-back-page.svg';
import { useFetchEventByIdQuery } from '@/shared/api/eventAPI';
import cls from './EventPage.module.scss';
import { Loader } from '@/shared/ui';
import { useDocumentTitle } from '@/shared/lib/hooks/useDocumentTitle';
import { DateTimeCard } from '@/shared/ui/DateTimeCard';
import { Error } from '@/shared/ui/Error/ui/Error';

const EventPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useFetchEventByIdQuery(id as string);

  useDocumentTitle(data ? data.title : 'Загрузка');

  if (isLoading) return <Loader />;

  if (error) return <Error message={`Мероприятия с id ${id} не найдено!`} />;

  return (
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
              {data &&
                data.dates.map((date, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <li key={i}>
                    <DateTimeCard date={date} />
                  </li>
                ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

export default EventPage;
