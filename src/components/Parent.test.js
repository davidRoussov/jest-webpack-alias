import React from 'react';
import Parent from './Parent';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
      <Parent/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
