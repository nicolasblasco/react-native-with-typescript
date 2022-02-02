import 'react-native';
import React from 'react';
import CustomButton from '../src/Components/shared/CustomButton';

import {render, waitFor} from '@testing-library/react-native';

describe('CustomButton', () => {
  it('Renders correctly', async () => {
    const {getByText, queryByTestId, toJSON} = render(
      <CustomButton
        onPress={() => {}}
        text="Test text"
        testID="example-button"
      />,
    );

    await waitFor(() => expect(queryByTestId('example-button')).toBeTruthy());

    expect(getByText('Test text')).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
});
