import { Suspense } from 'react';
import { Router } from '../providers/Router';
import '../styles/style.scss';
import { eventAPI } from '@/shared/api/eventAPI';
import { Loader } from '@/shared/ui';

const App = () => {
  const { isLoading } = eventAPI.useFetchAllEventsQuery();

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
