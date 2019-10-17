import React from 'react';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components'

import { CompareButton } from '../components';
import { theme } from '../theme';

describe('CompareButton Component', () => {
  test('Matches the snapshot', () => {
    const handleClick = event => event.preventDefault();
    const id = 1;
    const compareButton = create(
      <ThemeProvider theme={theme}>
        <CompareButton onClick={handleClick} id={id} />
      </ThemeProvider>
      );

    expect(compareButton.toJSON()).toMatchSnapshot();
  })
})
