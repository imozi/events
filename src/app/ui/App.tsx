import { Suspense } from 'react';
import { Router } from '../providers/Router';
import '../styles/style.scss';
import { useFetchAllEventsQuery } from '@/shared/api/eventAPI';
import { Loader } from '@/shared/ui';

const App = () => {
  const { isLoading } = useFetchAllEventsQuery();

  return isLoading ? (
    <Loader />
  ) : (
    <Suspense fallback={<Loader />}>
      <div className="container">
        <Router />
      </div>
    </Suspense>
  );
};

export default App;
