const weight = 100;

export default function weightReducer(state = weight, action) {
  if (action.type === '+') {
    state++;
    return state;
  } else if (action.type === '-') {
    state--;
    return state;
  } else return state;
}
