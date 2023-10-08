import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { EventCard } from './EventCard';
import { Event } from '@/shared/api/eventAPI/model';

describe('Event Card', () => {
  const event: Event = {
    id: '1',
    title: 'Test card render',
    description: 'Test desctiption',
    image: '',
    type: '',
    dates: [
      {
        datetimeFrom: 'null',
        datetimeTo: 'null',
      },
    ],
  };

  test('Test render', () => {
    render(<EventCard event={event} />, { wrapper: BrowserRouter });
    expect(screen.getByText('Test card render')).toBeInTheDocument();
  });
});
