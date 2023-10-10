import { Link } from 'react-router-dom';
import './RootPage.scss';
import { useDocumentTitle } from '@/shared/lib/hooks/useDocumentTitle';

const RootPage = () => {
  useDocumentTitle('Главная страница');

  return (
    <header className="header">
      <h1>Добро пожаловать</h1>
      <div className="hero">
        <img
          src="https://pro-dachnikov.com/uploads/posts/2023-01/1672907955_pro-dachnikov-com-p-plakati-na-stenu-foto-90.jpg"
          alt="Афиша"
        />
      </div>
      <Link to="events">Посмотреть список мероприятий</Link>
    </header>
  );
};

export default RootPage;
