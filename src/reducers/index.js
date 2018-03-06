import { combineReducers } from 'redux';
import cdsReducer from './cdsReducer'

const rootReducer = combineReducers({
    cds: cdsReducer
});

export default rootReducer;