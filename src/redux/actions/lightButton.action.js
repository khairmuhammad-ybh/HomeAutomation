const prefix = `[light buttons]`;

export const UPDATE_SWITCH_BUTTON_STATE = `${prefix} UPDATE_SWITCH_BUTTON_STATE`;
export const BTN_SWITCH_STATE_ONLOAD = `${prefix} BTN_SWITCH_STATE_ONLOAD`;
export const BTN_SWITCH_STATE_LOAD = `${prefix} BTN_SWITCH_STATE_LOAD`;

export const update_switch_button_state = btn_data => ({
  type: UPDATE_SWITCH_BUTTON_STATE,
  payload: btn_data,
});

export const btn_switch_state_onload = () => ({
  type: BTN_SWITCH_STATE_ONLOAD,
});

export const btn_switch_state_load = buttonStates => ({
  type: BTN_SWITCH_STATE_LOAD,
  payload: buttonStates,
});
