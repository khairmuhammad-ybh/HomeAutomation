import * as ACTION from '../actions/networkSetting.action';
import {Alert} from 'react-native';

// Properties
import properties from '../../utils/properties';

const initState = {
  name: properties.serverName,
  ipAddr: properties.serverIP,
};

const NetworkButtonStore = (state = initState, action) => {
  switch (action.type) {
    case ACTION.UPDATE_NETWORK_STATE:
      if (action.payload.name == null || action.payload.ipAddr == null) {
        Alert.alert(
          'Please provide Name and IP Address \nfor your network to connect successfully',
        );
        return state;
      }
      // TODO: Try to connect to server with IpAddr given by user
      return {
        name: action.payload.name,
        ipAddr: action.payload.ipAddr,
      };
    default:
      return state;
  }
};

export default NetworkButtonStore;
