import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { EventCard } from './EventCard';
import { ITransformDateEvent } from '@/shared/api/eventAPI/model/ui/Event';

describe('Event Card', () => {
  const event: ITransformDateEvent = {
    id: '1',
    title: 'Test card render',
    description: 'Test desctiption',
    image: '',
    type: '',
    dates: [
      {
        from: null,
        to: null,
        times: [],
      },
    ],
  };

  test('Test render', () => {
    render(<EventCard event={event} />, { wrapper: BrowserRouter });
    expect(screen.getByText('Test card render')).toBeInTheDocument();
  });
});
