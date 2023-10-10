import { FormatedDate } from '@/shared/api/eventAPI/model/ui/Event';

export const getDate = (date: FormatedDate): string => {
  const isFrom = !!date.from;
  const isTo = !!date.to;
  const isTime = !!date.times[0];

  switch (true) {
    case isFrom && isTo && isTime:
      return `c ${date.from?.day} по ${date.to?.day} ${date.from?.month} в ${date.times[0]}`;
    case isFrom && isTo && !isTime:
      return `c ${date.from?.day} по ${date.to?.day} ${date.from?.month}`;
    case isFrom && !isTo && isTime:
      return `${date.from?.day} ${date.from?.month} в ${date.times[0]}`;
    case isFrom && !isTo && !isTime:
      return `${date.from?.day} ${date.from?.month}`;
    default:
      return 'Скоро';
  }
};
