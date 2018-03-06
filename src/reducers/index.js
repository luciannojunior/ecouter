import { combineReducers } from 'redux';
import cdsReducer from './cdsReducer'
import audiosReducer from './audiosReducer';

const rootReducer = combineReducers({
    cds: cdsReducer,
    audios: audiosReducer
});

export default rootReducer;