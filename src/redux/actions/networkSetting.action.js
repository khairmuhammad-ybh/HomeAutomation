const prefix = `[network setting]`;

export const UPDATE_NETWORK_DATA_STATE = `${prefix} UPDATE_NETWORK_DATA_STATE`;
export const BTN_NETWORK_STATE_ONLOAD = `${prefix} BTN_NETWORK_STATE_ONLOAD`;
export const BTN_NETWORK_STATE_LOAD = `${prefix} BTN_NETWORK_STATE_LOAD`;
export const UPDATE_NETWORK_NAME_STATE = `${prefix} UPDATE_NETWORK_NAME_STATE`;
export const UPDATE_NETWORK_IP_STATE = `${prefix} UPDATE_NETWORK_IP_STATE`;

export const update_network_data_state = netData => ({
  type: UPDATE_NETWORK_DATA_STATE,
  payload: netData,
});

export const btn_network_state_onload = () => ({
  type: BTN_NETWORK_STATE_ONLOAD,
});

export const btn_network_state_load = buttonNetworkStates => ({
  type: BTN_NETWORK_STATE_LOAD,
  payload: buttonNetworkStates,
});

export const update_network_name_state = networkdata => ({
  type: UPDATE_NETWORK_NAME_STATE,
  payload: networkdata,
});

export const update_network_ip_state = networkdata => ({
  type: UPDATE_NETWORK_IP_STATE,
  payload: networkdata,
});
