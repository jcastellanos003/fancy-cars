import React from 'react';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components'

import { SelectedCard } from '../components';
import { theme } from '../theme';

describe('SelectedCard Component', () => {
  test('Matches the snapshot', () => {
    const selectedCard = create(
      <ThemeProvider theme={theme}>
        <SelectedCard>
          <span>Content selected test</span>
        </SelectedCard>
      </ThemeProvider>
      );

    expect(selectedCard.toJSON()).toMatchSnapshot();
  })
})
