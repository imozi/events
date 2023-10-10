import { RouteProps } from 'react-router-dom';
import { RootPage } from '@/pages/RootPage';
import { EventsPage } from '@/pages/EventsPage';
import { EventPage } from '@/pages/EventPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { AppRouteList, AppPathRoutes } from '@/shared/const';

export const config: Record<AppRouteList, RouteProps> = {
  [AppRouteList.ROOT]: {
    path: AppPathRoutes.root(),
    element: <RootPage />,
  },
  [AppRouteList.EVENTS]: {
    path: AppPathRoutes.events(),
    element: <EventsPage />,
  },
  [AppRouteList.EVENT]: {
    path: AppPathRoutes.event(':id'),
    element: <EventPage />,
  },
  [AppRouteList.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};
