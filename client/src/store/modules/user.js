const initState = {
  userID: '',
  userPW: '',
  isLogin: true,
};

// action type
const LOGIN = 'user/LOGIN';
const LOGOUT = 'user/LOGOUT';

// action 생성 함수
export function login(loginInfo) {
  return {
    type: LOGIN,
    payload: loginInfo,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

// 리듀서
export default function user(state = initState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        userID: action.payload.id,
        userPW: action.payload.password,
        isLogin: true,
      };
    case LOGOUT:
      return {
        ...state,
        userID: '',
        userPW: '',
        isLogin: false,
      };
    default:
      return state;
  }
}
