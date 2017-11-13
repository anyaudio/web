import {combineReducers} from 'redux';

import {navigationHome} from './navigationHomeReducer';
import {search} from './searchReducer';
import {nowPlaying} from './nowPlayingReducer';
import {player} from './playerReducer';
import {trending} from "./trendingReducer";

export default combineReducers({navigationHome, search, nowPlaying, player, trending});
