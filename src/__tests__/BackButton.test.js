import React from 'react';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components'

import { BackButton } from '../components';
import { theme } from '../theme';

describe('BackButton Component', () => {
  test('Matches the snapshot', () => {
    const handleClick = event => event.preventDefault();
    const backButton = create(
      <ThemeProvider theme={theme}>
        <BackButton onClick={handleClick} />
      </ThemeProvider>
      );

    expect(backButton.toJSON()).toMatchSnapshot();
  })
})
