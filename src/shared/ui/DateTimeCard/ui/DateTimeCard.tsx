import cls from './DateTimeCard.module.scss';

export const DateTimeCard = () => {
  const a = '';

  return (
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
  );
};
