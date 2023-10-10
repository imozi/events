export enum AppRouteList {
  ROOT = 'main',
  EVENTS = 'events',
  EVENT = 'event_details',
  NOT_FOUND = 'not_found',
}

export const AppPathRoutes = {
  root: () => '/',
  events: () => '/events',
  event: (id: string) => `/events/${id}`,
};
