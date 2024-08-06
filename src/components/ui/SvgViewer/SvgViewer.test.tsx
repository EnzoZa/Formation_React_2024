import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SvgViewer from './SvgViewer';

describe('<SvgViewer />', () => {
  test('it should mount', () => {
    render(<SvgViewer />);

    const SvgViewer = screen.getByTestId('SvgViewer');

    expect(SvgViewer).toBeInTheDocument();
  });
});