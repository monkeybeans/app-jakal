const defaultState = {
  period: 'display',
};

export default function status(state = defaultState, action) {
  switch (action.type) {
    case 'PERIOD_RECIEVED':
      return Object.assign({}, state, { period: action.period });
    default:
      return state;
  }
}
