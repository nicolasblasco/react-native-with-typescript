import 'react-native';
import React from 'react';
import ListItem from '../src/Components/Shared/Item';

import {render, fireEvent} from '@testing-library/react-native';

const id = 1;
const email = 'test@gmail.com';
const name = 'test';

describe('ListItem', () => {
  it('Renders correctly', async () => {
    const onDelete = jest.fn();
    const onUpdate = jest.fn();

    const {getByText, getByTestId, toJSON} = render(
      <ListItem
        id={id}
        email={email}
        name={name}
        onDelete={onDelete}
        onUpdate={onUpdate}
      />,
    );

    const updateButton = getByTestId('update-button');
    fireEvent.press(updateButton);

    const deleteButton = getByTestId('delete-button');
    fireEvent.press(deleteButton);

    expect(getByText(`Name: ${name}`)).toBeTruthy();
    expect(onDelete).toBeCalled();
    expect(onUpdate).toBeCalled();
    expect(toJSON()).toMatchSnapshot();
  });
});
