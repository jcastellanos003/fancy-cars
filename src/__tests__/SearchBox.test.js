import React from 'react';
import { create } from 'react-test-renderer';

import { SearchBox } from '../components';

const mockTheme = {};

describe('SearchBox Component', () => {
  test('Matches the snapshot', () => {
    const handleSubmit = event => event.preventDefault();
    const searchBox = create(<SearchBox theme={mockTheme} onSubmit={handleSubmit} />);

    expect(searchBox.toJSON()).toMatchSnapshot();
  })
})
