const prefix = `[light buttons]`;

export const UPDATE_BUTTON_STATE = `${prefix} UPDATE_BUTTON_STATE`;

export const update_button_state = btn_data => ({
  type: UPDATE_BUTTON_STATE,
  payload: btn_data,
});
