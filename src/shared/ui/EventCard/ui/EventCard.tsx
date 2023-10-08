import { FC } from 'react';
import cls from './EventCard.module.scss';

type EventCardProps = {
  event: {
    title: string;
  };
};

export const EventCard: FC<EventCardProps> = ({ event }) => (
  <article className={cls.event}>
    <div className={cls.event__wrapper}>
      <a href="event.html" className={cls.event__link}>
        <div className={cls.event__info}>
          <header className={cls.event__header}>
            <h3>{event.title}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sed, harum hic porro quo error aperiam maiores suscipit? Eos facilis
              aliquid quis voluptas at architecto porro, pariatur beatae, sint repudiandae commodi.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi assumenda vitae
              placeat fuga officia molestiae expedita doloribus animi, natus velit laborum nesciunt?
              Saepe, inventore qui optio quod unde quos corporis?
            </p>
          </header>
          <footer className={cls.event__footer}>
            <p>с 6 по 8 ноября</p>
          </footer>
        </div>
        <div className={cls.event__image}>{/* <img src="" alt="" /> */}</div>
      </a>
    </div>
  </article>
);
