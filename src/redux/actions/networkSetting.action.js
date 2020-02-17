const prefix = `[network setting]`;

export const UPDATE_NETWORK_STATE = `${prefix} UPDATE_NETWORK_STATE`;
export const UPDATE_CONNECTED_STATE = `${prefix} UPDATE_CONNECTED_STATE`;

export const update_network_state = netData => ({
  type: UPDATE_NETWORK_STATE,
  payload: netData,
});

export const update_connected_state = state => ({
  type: UPDATE_CONNECTED_STATE,
  payload: state
})
