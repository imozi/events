import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import './Error.scss';

type ErrorProps = {
  message: string;
};

export const Error: FC<ErrorProps> = ({ message }) => {
  const navigator = useNavigate();

  const onClick = () => {
    navigator(-1);
  };
  return (
    <header className="header">
      <h1>{message}</h1>
      <button type="button" onClick={onClick}>
        Вернуться назад
      </button>
    </header>
  );
};
