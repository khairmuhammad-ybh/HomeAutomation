import {combineReducers} from 'redux';
import LightButtonStore from './lightButton.reducer';

export default combineReducers({
  LightButton: LightButtonStore,
});
