import { Route, Routes } from 'react-router-dom';
import { config } from '@/app/providers/Router/config';

export const Router = () => (
  <Routes>
    {Object.values(config).map(({ path, element }) => (
      <Route key={path} path={path} element={element} />
    ))}
  </Routes>
);
