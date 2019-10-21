import React from 'react';
import { shallow } from 'enzyme';
import { TestItem } from '../../../src/features/home/TestItem';

describe('home/TestItem', () => {
  it('renders node with correct class name', () => {
    const props = {
      boardTest: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <TestItem {...props} />
    );

    expect(
      renderedComponent.find('.home-test-item').length
    ).toBe(1);
  });
});
