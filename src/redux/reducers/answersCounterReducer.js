import { ADD_BAD_ANSWER, ADD_GOOD_ANSWER } from '../types';

export default function answersCounterReducer(state = {
  goodAnswer: 0,
  badAnswer: 0,
}, action) {
  const { type } = action;
  switch (type) {
    case ADD_GOOD_ANSWER:
      const tempGood = { ...state };
      tempGood.goodAnswer += 1;
      return tempGood;
    case ADD_BAD_ANSWER:
      const tempBad = { ...state };
      tempBad.badAnswer += 1;
      return tempBad;
    default:
      return state;
  }
}
