import React from 'react';
import { render } from '@testing-library/react';
import MovieCard from './MovieCard';

test('renders MovieCard with movie details', () => {
  const movie = {
    id: '1',
    title: 'Inception',
    releaseDate: '2010-07-16',
    posterUrl: 'https://via.placeholder.com/150'
  };

  const { getByText, getByAltText } = render(<MovieCard movie={movie} />);
  
  expect(getByText(/Inception/i)).toBeInTheDocument();
  expect(getByText(/2010-07-16/i)).toBeInTheDocument();
  expect(getByAltText(/Inception/i)).toBeInTheDocument();
});
