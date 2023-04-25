const INIT = 'workspace/INIT';
const GETALL = 'workspace/GETALL';

//type, 인자 값 설정
export function getAll(data) {
  return {
    type: GETALL,
    payload: data,
  };
}
export function init(data) {
  return {
    type: INIT,
    payload: data,
  };
}

//초기 data
const initStateEmpty = {
  workspace_name: '',
  workspace_category: '',
  workspace_startDate: '',
  workspace_endDate: '',
  githubRepository: '',
  member: [],
  workflow: {
    todoList: [],
    inprogressList: [],
    doneList: [],
  },
};
const initArr = {};
export default function workspace(state = initArr, action) {
  switch (action.type) {
    case INIT:
      // console.log(action.payload);
      return {
        ...action.payload,
      };
    case GETALL:
      return {
        state: action.payload,
      };
    default:
      return state;
  }
}
