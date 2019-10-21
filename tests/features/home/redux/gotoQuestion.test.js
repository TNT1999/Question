import {
  HOME_GOTO_QUESTION,
} from '../../../../src/features/home/redux/constants';

import {
  gotoQuestion,
  reducer,
} from '../../../../src/features/home/redux/gotoQuestion';

describe('home/redux/gotoQuestion', () => {
  it('returns correct action by gotoQuestion', () => {
    expect(gotoQuestion()).toHaveProperty('type', HOME_GOTO_QUESTION);
  });

  it('handles action type HOME_GOTO_QUESTION correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_GOTO_QUESTION }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
