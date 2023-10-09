export type DateFormat = {
  day: string;
  dayWeek: string;
  month: string;
  year: string;
  hours: string;
  minutes: string;
  fullDate: string;
};

const monthNumberToWord = (monthNumber: number): string => {
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

const dayNumberToWords = (dayNumber: number): string => {
  switch (dayNumber) {
    case 1:
      return 'Понедельник';
    case 2:
      return 'Вторник';
    case 3:
      return 'Среда';
    case 4:
      return 'Четверг';
    case 5:
      return 'Пятница';
    case 6:
      return 'Суббота';
    case 7:
      return 'Воскресенье';
    default:
      throw new Error('Номер дня должен быть от 1 до 7');
  }
};

export const formatISODateToReadable = (dateString: string): DateFormat => {
  const date = new Date(dateString);
  const year = date.getFullYear().toString();
  const month = monthNumberToWord(date.getMonth() + 1);
  const day = String(date.getUTCDate());
  const dayWeek = dayNumberToWords(date.getDay() + 1);
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const fullDate = `${day}/${month}/${year}`;

  return {
    day,
    dayWeek,
    month,
    year,
    hours,
    minutes,
    fullDate,
  };
};
