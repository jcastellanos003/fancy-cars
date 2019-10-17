import React from 'react';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components'

import { PageHeader } from '../components';
import { theme } from '../theme';

describe('PageHeader Component', () => {
  test('Matches the snapshot', () => {
    const pageHeader = create(
      <ThemeProvider theme={theme}>
        <PageHeader>
          <span>Test page header</span>
        </PageHeader>
      </ThemeProvider>
      );

    expect(pageHeader.toJSON()).toMatchSnapshot();
  })
})
