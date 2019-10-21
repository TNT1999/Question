import React from 'react';
import { shallow } from 'enzyme';
import { FQuestion } from '../../../src/features/home/FQuestion';

describe('home/FQuestion', () => {
  it('renders node with correct class name', () => {
    const props = {
      home: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <FQuestion {...props} />
    );

    expect(
      renderedComponent.find('.home-f-question').length
    ).toBe(1);
  });
});
