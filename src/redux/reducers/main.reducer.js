import {combineReducers} from 'redux';
import LightButtonStore from './lightButton.reducer';
import NetworkButtonStore from './networkSetting.reducer';

export default combineReducers({
  LightButton: LightButtonStore,
  NetworkConfig: NetworkButtonStore,
});
