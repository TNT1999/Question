import React from 'react';
import { shallow } from 'enzyme';
import { ListTest } from '../../../src/features/home/ListTest';

describe('home/ListTest', () => {
  it('renders node with correct class name', () => {
    const props = {
      boardTest: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <ListTest {...props} />
    );

    expect(
      renderedComponent.find('.home-list-test').length
    ).toBe(1);
  });
});
