import React from 'react';
import { shallow } from 'enzyme';
import { Trs } from '../../../src/features/home/Trs';

describe('home/Trs', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Trs {...props} />
    );

    expect(
      renderedComponent.find('.home-trs').length
    ).toBe(1);
  });
});
