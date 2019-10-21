import initialState from './initialState';
import { reducer as loadTestReducer } from './loadTest';
import { reducer as gotoQuestionReducer } from './gotoQuestion';
import { reducer as loadQuestionsReducer } from './loadQuestions';
import { reducer as selectTestReducer } from './selectTest';

const reducers = [
  loadTestReducer,
  gotoQuestionReducer,
  loadQuestionsReducer,
  selectTestReducer,
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}
