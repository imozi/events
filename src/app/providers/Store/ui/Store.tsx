import { Provider } from 'react-redux';
import { FC, ReactNode } from 'react';
import { store } from '../config/store';

type StoreProps = {
  children: ReactNode;
};

export const Store: FC<StoreProps> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
