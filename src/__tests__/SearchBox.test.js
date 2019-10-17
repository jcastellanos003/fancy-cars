import React from 'react';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components'

import { SearchBox } from '../components';
import { theme } from '../theme';

describe('SearchBox Component', () => {
  test('Matches the snapshot', () => {
    const handleSubmit = event => event.preventDefault();
    const handleChange = event => event.preventDefault();
    const searchBox = create(
      <ThemeProvider theme={theme}>
        <SearchBox onSubmit={handleSubmit} onChange={handleChange} />
      </ThemeProvider>
      );

    expect(searchBox.toJSON()).toMatchSnapshot();
  })
})
