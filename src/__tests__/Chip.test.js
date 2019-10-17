import React from 'react';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components'

import { Chip } from '../components';
import { theme } from '../theme';

describe('Chip Component', () => {
  test('Matches the snapshot', () => {
    const handleClose = event => event.preventDefault();
    const name = 'Test chip';
    const chip = create(
      <ThemeProvider theme={theme}>
        <Chip onClose={handleClose} name={name} />
      </ThemeProvider>
      );

    expect(chip.toJSON()).toMatchSnapshot();
  })
})
