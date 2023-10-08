import { Suspense } from 'react';
import { Router } from '../providers/Router';
import '../styles/style.scss';

const App = () => (
  <Suspense fallback={<h1>Loading...</h1>}>
    <main className="main">
      <Router />
    </main>
  </Suspense>
);

export default App;
