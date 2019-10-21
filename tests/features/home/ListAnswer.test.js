import React from 'react';
import { shallow } from 'enzyme';
import { ListAnswer } from '../../../src/features/home/ListAnswer';

describe('home/ListAnswer', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <ListAnswer {...props} />
    );

    expect(
      renderedComponent.find('.home-list-answer').length
    ).toBe(1);
  });
});
