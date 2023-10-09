import { Link } from 'react-router-dom';
import './RootPage.scss';
import { useDocumentTitle } from '@/shared/lib/hooks/useDocumentTitle';

const RootPage = () => {
  useDocumentTitle('Главная страница');

  return (
    <header className="header">
      <h1>Добро пожаловать на страницу мероприятий</h1>
      <Link to="events">Посмотреть список мероприятий</Link>
    </header>
  );
};

export default RootPage;
