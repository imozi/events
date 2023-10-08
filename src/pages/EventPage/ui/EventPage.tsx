import { Link, useParams } from 'react-router-dom';
import IconBack from '@/shared/assets/icons/icon-back-page.svg';
import { eventAPI } from '@/shared/api/eventAPI';
import cls from './EventPage.module.scss';
import { Loader } from '@/shared/ui';

const EventPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = eventAPI.useFetchEventByIdQuery(id as string);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <header className={cls.header}>
        <nav className={cls.navigation}>
          <ul className={cls.navigation__list}>
            <li className={cls.navigation__item}>
              <Link to="/events">
                <span className="visually-hidden">Венуться назад</span>
                <IconBack />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={cls.main}>
        <section className={cls.event}>
          <div className={cls.event__image}>
            <img src={data?.image} alt="Lorem ipsum" />
          </div>
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
                <div className={cls['event__dates-wrapper']}>
                  <p className={cls.event__date}>
                    <span className={cls.event__day}>23</span>
                    <span className={cls['event__day-week']}>Среда</span>
                    <span className={cls['event__day-month']}>Ноября</span>
                  </p>
                  <ul className={cls['event__time-list']}>
                    <li>19:00</li>
                  </ul>
                </div>
              </li>
              <li>
                <div className={cls['event__dates-wrapper']}>
                  <p className={`${cls.event__date} ${cls['event__date--start']}`}>
                    <span className={cls.event__day}>2</span>
                    <span className={cls['event__day-week']}>Четверг</span>
                    <span className={cls['event__day-month']}>Января</span>
                  </p>
                  <p className={`${cls.event__date} ${cls['event__date--end']}`}>
                    <span className={cls.event__day}>31</span>
                    <span className={cls['event__day-week']}>Воскресенье</span>
                    <span className={cls['event__day-month']}>Января</span>
                  </p>
                  <ul className={cls['event__time-list']}>
                    <li>19:00</li>
                    <li>09:00</li>
                    <li>13:00</li>
                    <li>15:00</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

export default EventPage;
