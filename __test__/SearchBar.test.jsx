import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

test('renders SearchBar and handles search input', () => {
  const handleSearch = jest.fn();

  const { getByPlaceholderText, getByText } = render(<SearchBar onSearch={handleSearch} />);

  const input = getByPlaceholderText(/Search movies/i);
  fireEvent.change(input, { target: { value: 'Inception' } });

  expect(input.value).toBe('Inception');

  const button = getByText(/Search/i);
  fireEvent.click(button);

  expect(handleSearch).toHaveBeenCalledWith('Inception');
});
