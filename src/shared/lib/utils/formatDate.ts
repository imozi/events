import { EventDate } from '@/shared/api/eventAPI/model';
import { FormatedDate } from '@/shared/api/eventAPI/model/ui/Event';
import { formatISODateToReadable } from '@/shared/lib/utils/formatISODateToReadable';

type FormatDateProps = {
  dates: EventDate[];
};

export const FormatDate = ({ dates }: FormatDateProps) => {
  const map = new Map();

  const formatDate: FormatedDate[] = dates.reduce(
    (result: FormatedDate[], date): FormatedDate[] => {
      const formattedDateFrom = date.datetimeFrom
        ? formatISODateToReadable(date.datetimeFrom)
        : null;
      const formattedDateTo = date.datetimeTo ? formatISODateToReadable(date.datetimeTo) : null;
      const time = `${formattedDateFrom?.hours}:${formattedDateFrom?.minutes}`;
      const hours = formattedDateFrom?.hours;
      const times = [];
      const key = formattedDateFrom?.fullDate;

      if (time !== '00:00' && hours) {
        times.push(time);
      }

      if (!map.has(key)) {
        map.set(key, times);
      } else {
        map.get(key).push(time);

        return result;
      }

      result.push({
        from: formattedDateFrom,
        to: formattedDateTo,
        times,
      });

      return result;
    },
    [] as FormatedDate[],
  );

  map.clear();

  return formatDate;
};
