import {combineReducers} from 'redux';
import LightButtonStore from './lightButton.reducer';
import NetworkButtonStore from './networkSetting.reducer';
// Redux-Persist
import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

const networkPersistConfig = {
  key: 'network',
  storage: AsyncStorage,
  whitelist: ['storedName', 'storedIpAddr'],
};

export default combineReducers({
  LightButton: LightButtonStore,
  NetworkConfig: persistReducer(networkPersistConfig, NetworkButtonStore),
});
