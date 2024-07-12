import React from 'react';
import { render, waitFor } from '@testing-library/react';
import MoviesList from './MoviesList';

test('renders MoviesList and handles loading state', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ movies: [], totalPages: 1 }),
    })
  );

  const { getByText } = render(<MoviesList />);
  
  expect(getByText(/Loading.../i)).toBeInTheDocument();

  await waitFor(() => expect(getByText(/No movies found/i)).toBeInTheDocument());
});
