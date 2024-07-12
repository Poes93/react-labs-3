import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

test('renders Footer with correct text', () => {
  const { getByText } = render(<Footer />);
  
  expect(getByText(/© 2024 MovieDB/i)).toBeInTheDocument();
});
