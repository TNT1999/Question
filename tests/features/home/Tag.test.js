import React from 'react';
import { shallow } from 'enzyme';
import { Tag } from '../../../src/features/home/Tag';

describe('home/Tag', () => {
  it('renders node with correct class name', () => {
    const props = {
      boardTest: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Tag {...props} />
    );

    expect(
      renderedComponent.find('.home-tag').length
    ).toBe(1);
  });
});
