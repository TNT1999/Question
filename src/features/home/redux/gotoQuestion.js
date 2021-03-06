// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  HOME_GOTO_QUESTION,
} from './constants';

export function gotoQuestion(to) {
  return {
    type: HOME_GOTO_QUESTION,
    to
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_GOTO_QUESTION:
      return {
        ...state,
        currentQuestion: action.to,      
      };

    default:
      return state;
  }
}
