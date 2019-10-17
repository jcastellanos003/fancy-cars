import React from 'react';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components'

import { Header } from '../components';
import { theme } from '../theme';

describe('Header Component', () => {
  test('Matches the snapshot', () => {
    const header = create(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
      );

    expect(header.toJSON()).toMatchSnapshot();
  })
})
