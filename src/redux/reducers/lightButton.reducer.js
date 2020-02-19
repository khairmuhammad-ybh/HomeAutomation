import * as ACTION from '../actions/lightButton.action';

const initState = {
  btnStateOnLoad: false,
  btn1: false,
  btn2: false,
  btn3: false,
  btn4: false,
  btn5: false,
  btn6: false,
  btn7: false,
  btn8: false,
};

const LightButtonStore = (state = initState, {type, payload}) => {
  switch (type) {
    case ACTION.UPDATE_SWITCH_BUTTON_STATE: {
      return Object.assign({}, state, {
        [payload.button]: payload.state,
      });
    }
    case ACTION.BTN_SWITCH_STATE_ONLOAD: {
      return {
        ...state,
        btnStateOnLoad: true,
      };
    }
    case ACTION.BTN_SWITCH_STATE_LOAD: {
      return {
        ...state,
        ...payload,
        btnStateOnLoad: false,
      };
    }
    default:
      return state;
  }
};

export default LightButtonStore;
