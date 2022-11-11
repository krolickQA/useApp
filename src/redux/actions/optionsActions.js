import axios from 'axios';
import { SET_OPTIONS } from '../types';

export const setOptions = (payload) => ({ type: SET_OPTIONS, payload });

export const setOptionsThunk = (topicUrl) => (dispatch) => {
  axios.get(topicUrl).then((res) => {
    dispatch(setOptions(res.data));
  }).catch(console.log);
};
