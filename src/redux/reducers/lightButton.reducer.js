import * as ACTIONS from '../actions/lightButton.action';

const initState = {
  btn1: false,
  btn2: false,
  btn3: false,
  btn4: false,
  btn5: false,
  btn6: false,
  btn7: false,
  btn8: false,
};

const LightButtonStore = (state = initState, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_BUTTON_STATE: {
      return Object.assign({}, state, {
        [action.payload.button]: action.payload.state,
      });
    }
    default:
      return state;
  }
};

export default LightButtonStore;
