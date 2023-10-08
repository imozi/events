import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from '@/app';
import { Store } from '@/app/providers/Store/ui/Store';

const root = document.getElementById('td-root') as HTMLElement;

createRoot(root).render(
  <StrictMode>
    <Store>
      <Suspense fallback={<h1>Loading...</h1>}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </Store>
  </StrictMode>,
);
