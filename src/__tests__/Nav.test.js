import React from 'react';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components'

import { Nav } from '../components';
import { theme } from '../theme';

describe('Nav Component', () => {
  test('Matches the snapshot', () => {
    const nav = create(
      <ThemeProvider theme={theme}>
        <Nav />
      </ThemeProvider>
      );

    expect(nav.toJSON()).toMatchSnapshot();
  })
})
