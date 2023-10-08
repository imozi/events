import { Provider } from 'react-redux';
import { FC, ReactNode } from 'react';
import { setupStore } from '../config/setupStore';

type StoreProps = {
  children: ReactNode;
};

const store = setupStore();

export const Store: FC<StoreProps> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
