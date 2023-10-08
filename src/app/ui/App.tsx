import { Suspense } from 'react';
import { Router } from '../providers/Router';
import '../styles/style.scss';
import { eventAPI } from '@/shared/api/eventAPI';

const App = () => {
  const { isLoading } = eventAPI.useFetchAllEventsQuery();

  return (
    !isLoading && (
      <Suspense fallback={<h1>Loading...</h1>}>
        <main className="main">
          <Router />
        </main>
      </Suspense>
    )
  );
};

export default App;
