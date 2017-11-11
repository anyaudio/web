import {combineReducers} from 'redux';

import {navigationHome} from './navigationHomeReducer';
import {search} from './searchReducer';
import {nowPlaying} from "./nowPlayingReducer";

export default combineReducers({navigationHome, search, nowPlaying});
