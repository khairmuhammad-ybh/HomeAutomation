const prefix = `[network setting]`;

export const UPDATE_NETWORK_STATE = `${prefix} UPDATE_NETWORK_STATE`;

export const update_network_state = netData => ({
  type: UPDATE_NETWORK_STATE,
  payload: netData,
});
