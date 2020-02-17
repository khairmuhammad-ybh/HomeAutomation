import * as ACTION from '../actions/networkSetting.action';
import {Alert} from 'react-native';

// Properties
import properties from '../../utils/properties';

const initState = {
  name: properties.serverName,
  ipAddr: properties.serverIP,
  connected: false,
};

const NetworkButtonStore = (state = initState, action) => {
  switch (action.type) {
    case ACTION.UPDATE_NETWORK_STATE:
      if (action.payload.name == null || action.payload.ipAddr == null) {
        Alert.alert(
          properties.Err_Title_Empty_Field,
          properties.Err_Messsage_Empty_Field,
        );
        return state;
      }
      return {
        ...state,
        name: action.payload.name,
        ipAddr: action.payload.ipAddr,
      };
    case ACTION.UPDATE_CONNECTED_STATE:
      return {
        ...state,
        connected: action.payload.connected,
      };
    default:
      return state;
  }
};

export default NetworkButtonStore;
