import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';

test('renders Navbar with links', () => {
  const { getByText } = render(
    <Router>
      <Navbar />
    </Router>
  );

  expect(getByText(/Home/i)).toBeInTheDocument();
  expect(getByText(/Movies/i)).toBeInTheDocument();
  expect(getByText(/About/i)).toBeInTheDocument();
});
