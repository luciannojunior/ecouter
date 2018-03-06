import { SELECT_CD } from '../actions/index';

const initialState = {
    selectedCd: '',
    cdsAvailable: ['1', '2', 'Exercises']
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SELECT_CD:   
        return {
            ...state,
            selectedCd: action.payload
        };
    }
  return state;
}
