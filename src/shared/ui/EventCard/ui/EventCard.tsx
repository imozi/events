import { FC } from 'react';
import { Link } from 'react-router-dom';
import cls from './EventCard.module.scss';
import { ITransformDateEvent } from '@/shared/api/eventAPI/model/ui/Event';

type EventCardProps = {
  event: ITransformDateEvent;
};

export const EventCard: FC<EventCardProps> = ({ event }) => (
  <article className={cls.event}>
    <div className={cls.event__wrapper}>
      <Link to={event.id} className={cls.event__link}>
        <div className={cls.event__info}>
          <header className={cls.event__header}>
            <h3>{event.title}</h3>
            <p>{event.type}</p>
          </header>
          <footer className={cls.event__footer}>
            {event.dates && <p>{event.dates[0].from?.day}</p>}
          </footer>
        </div>

        {event.image ? (
          <div className={cls.event__image}>
            <img src={event.image} alt={event.title} />
          </div>
        ) : (
          <div className={`${cls.event__image} ${cls['event__image--not-image']}`} />
        )}
      </Link>
    </div>
  </article>
);
