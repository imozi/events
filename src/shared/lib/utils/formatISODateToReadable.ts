export type DateFormat = {
  day: string;
  month: string;
  year: string;
  hours: string;
  minutes: string;
  fullDate: string;
};

const monthNumberToRussianWord = (monthNumber: number): string => {
  switch (monthNumber) {
    case 1:
      return 'января';
    case 2:
      return 'февраля';
    case 3:
      return 'марта';
    case 4:
      return 'апреля';
    case 5:
      return 'мая';
    case 6:
      return 'июня';
    case 7:
      return 'июля';
    case 8:
      return 'августа';
    case 9:
      return 'сентября';
    case 10:
      return 'октября';
    case 11:
      return 'ноября';
    case 12:
      return 'декабря';
    default:
      throw new Error('Номер месяца должен быть от 1 до 12');
  }
};

export const formatISODateToReadable = (dateString: string): DateFormat => {
  const date = new Date(dateString);
  const year = date.getFullYear().toString();
  const month = monthNumberToRussianWord(date.getMonth() + 1);
  const day = String(date.getUTCDate());
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const fullDate = `${day}/${month}/${year}`;

  return {
    day,
    month,
    year,
    hours,
    minutes,
    fullDate,
  };
};
