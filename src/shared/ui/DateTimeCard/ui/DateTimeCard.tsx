import { FC } from 'react';
import { FormatedDate } from '@/shared/api/eventAPI/model/ui/Event';
import cls from './DateTimeCard.module.scss';

type DateTimeCardProps = {
  date: FormatedDate;
};

export const DateTimeCard: FC<DateTimeCardProps> = ({ date }) => (
  <div className={cls['event__dates-wrapper']}>
    <p className={`${cls.event__date} ${date.to ? cls['event__date--start'] : ''}`}>
      <span className={cls.event__day}>{date.from?.day}</span>
      <span className={cls['event__day-week']}>{date.from?.dayWeek}</span>
      <span className={cls['event__day-month']}>{date.from?.month}</span>
    </p>

    {date.to && (
      <p className={`${cls.event__date} ${cls['event__date--end']}`}>
        <span className={cls.event__day}>{date.to.day}</span>
        <span className={cls['event__day-week']}>{date.to.dayWeek}</span>
        <span className={cls['event__day-month']}>{date.to.month}</span>
      </p>
    )}

    <ul className={cls['event__time-list']}>
      {date.times &&
        date.times.map((time, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={i}>{time}</li>
        ))}
    </ul>
  </div>
);
