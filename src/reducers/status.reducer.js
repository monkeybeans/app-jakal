const defaultState = {
  period: 'DISPLAY',
};

export default function status(state = defaultState, action) {
  switch (action.type) {
    case 'PERIOD_RECIEVED':
      return { period: 'SUGGEST' }; // return Object.assign({}, state, { period: action.period });
    default:
      return state;
  }
}
