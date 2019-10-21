import {
  HOME_SELECT_TEST,
} from '../../../../src/features/home/redux/constants';

import {
  selectTest,
  reducer,
} from '../../../../src/features/home/redux/selectTest';

describe('home/redux/selectTest', () => {
  it('returns correct action by selectTest', () => {
    expect(selectTest()).toHaveProperty('type', HOME_SELECT_TEST);
  });

  it('handles action type HOME_SELECT_TEST correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_SELECT_TEST }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
