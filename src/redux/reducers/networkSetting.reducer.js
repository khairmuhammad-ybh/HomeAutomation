import * as ACTION from '../actions/networkSetting.action';
// Properties
import properties from '../../utils/properties';

const initState = {
  btnNetworkOnLoad: false,
  connected: false,
  name: properties.serverName,
  ipAddr: properties.serverIP,
  storedName: null,
  storedIpAddr: null,
};

const NetworkButtonStore = (state = initState, {type, payload}) => {
  switch (type) {
    case ACTION.UPDATE_NETWORK_DATA_STATE:
      return {
        ...state,
        storedName: payload.storedName,
        storedIpAddr: payload.storedIpAddr,
      };
    case ACTION.BTN_NETWORK_STATE_ONLOAD: {
      return {
        ...state,
        btnNetworkOnLoad: true,
      };
    }
    case ACTION.BTN_NETWORK_STATE_LOAD: {
      return {
        ...state,
        ...payload,
        btnNetworkOnLoad: false,
      };
    }
    case ACTION.UPDATE_NETWORK_NAME_STATE: {
      return {
        ...state,
        name: payload.name,
      };
    }
    case ACTION.UPDATE_NETWORK_IP_STATE: {
      return {
        ...state,
        ipAddr: payload.ipAddr,
      };
    }
    default:
      return state;
  }
};

export default NetworkButtonStore;
