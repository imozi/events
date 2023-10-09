import { useNavigate } from 'react-router-dom';
import { useDocumentTitle } from '@/shared/lib/hooks/useDocumentTitle';
import './NotFoundPage.scss';

export const NotFoundPage = () => {
  useDocumentTitle('404');

  const navigate = useNavigate();

  const onClickButton = () => {
    navigate(-1);
  };

  return (
    <header className="header">
      <h1>404</h1>
      <p>Страница не найдена!</p>
      <button onClick={onClickButton} type="button">
        Вернуться назад
      </button>
    </header>
  );
};
