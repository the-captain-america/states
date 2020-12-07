const authInitialState = {
  data: {},
  loading: false,
};

// const authReducer = (state, action) => {
//   switch (action.type) {
//     case 'LOGIN_START':
//       return {
//         ...state,
//         data: action.payload,
//         loading: true,
//       };
//     case 'LOGIN_SUCCESS':
//       return {
//         ...state,
//         loading: false,
//       };
//     case 'LOGIN_FAILURE':
//       return {
//         ...state,
//         data: action.payload,
//         loading: false,
//       };
//     default:
//       return state;
//   }
// };

// export { authInitialState, authReducer };

// This is defined as login_success -- this should be referenced by
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export { authInitialState, authReducer };
