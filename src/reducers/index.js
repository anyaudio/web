import {combineReducers} from 'redux';

import {navigationHome} from './navigationHomeReducer';
import {search} from './searchReducer';

export default combineReducers({navigationHome, search});
