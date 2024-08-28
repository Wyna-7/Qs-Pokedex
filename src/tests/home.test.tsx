//@ts-expect-error React is not used but import needed for test
import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

describe('Home page', () => {
  describe('when page is loading', () => {
    it('should display loading screen', () => {
      render(<Home />);
      expect(screen.getByTestId('loading-screen')).toBeDefined();
    });
  });
});
