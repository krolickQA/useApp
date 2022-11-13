import { configureStore } from '@reduxjs/toolkit';
import topicsReducer from './reducers/topicsReducer';
import optionsReducer from './reducers/optionsReducer';
import questionsReducer from './reducers/questionsReducer';
import currSubjectReducer from './reducers/subjectReducer';
import answersCounterReducer from './reducers/answersCounterReducer';
import currentQuestionReducer from './reducers/currentQuestionReducer';

export default configureStore({
  reducer: {
    topics: topicsReducer,
    options: optionsReducer,
    questions: questionsReducer,
    currSubject: currSubjectReducer,
    answersCounter: answersCounterReducer,
    currentQuestion: currentQuestionReducer, // нужен ли?
  },
});
