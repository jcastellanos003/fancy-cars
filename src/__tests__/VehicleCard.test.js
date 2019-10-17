import React from 'react';
import { create } from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import 'jest-styled-components'

import { VehicleCard } from '../components';
import { theme } from '../theme';

describe('VehicleCard Component', () => {
  test('Matches the snapshot', () => {
    const image = 'test.jpeg';

    const vehicleCard = create(
      <ThemeProvider theme={theme}>
        <VehicleCard size="medium" image={image}>
          <span>This the test card context</span>
        </VehicleCard>
      </ThemeProvider>
      );

    expect(vehicleCard.toJSON()).toMatchSnapshot();
  })
})
