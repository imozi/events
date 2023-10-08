import { render, screen } from '@testing-library/react';
import { EventCard } from './EventCard';

describe('Event Card', () => {
  const event = {
    title: 'Test card render',
  };

  test('Test render', () => {
    render(<EventCard event={event} />);
    expect(screen.getByText('Test card render')).toBeInTheDocument();
  });
});
