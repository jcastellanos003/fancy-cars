import React from 'react';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components'

import { SelectedButton } from '../components';
import { theme } from '../theme';

describe('SelectedButton Component', () => {
  test('Matches the snapshot', () => {
    const handleClick = event => event.preventDefault();
    const id = 1;
    const text = 'Selected test';
    const selectedButton = create(
      <ThemeProvider theme={theme}>
        <SelectedButton id={id} text={text} onClick={handleClick} />
      </ThemeProvider>
      );

    expect(selectedButton.toJSON()).toMatchSnapshot();
  })
})
