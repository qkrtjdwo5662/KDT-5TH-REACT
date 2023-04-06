const weightState = 100;

export default function weight(state = weightState, action) {
  if (action.type === '+') {
    state++;
    return state;
  } else if (action.type === '-') {
    state--;
    return state;
  } else return state;
}
