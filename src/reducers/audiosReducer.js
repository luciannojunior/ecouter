import { SELECT_CD, SELECT_AUDIO } from '../actions/index';
import bd from '../data/audioScript';

const initialState = {
    selectedAudio: '',
    audiosAvailable: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SELECT_CD:
        return {
            ...state,
            audiosAvailable: bd[action.payload]
        };
    case SELECT_AUDIO: 
        return {
            ...state,
            selectedAudio: action.payload
        }
    }
  return state;
}