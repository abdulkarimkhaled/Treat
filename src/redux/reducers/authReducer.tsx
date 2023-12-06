import Types from "../types";
//initial state of this reducer
const initialState = {
  token: '',
  type: ''
};

//recieve state and edit the data based on the recieved action
const authReducer = (state = initialState, action: { type: string, payload: { token: string, type: string } }) => {
  switch (action.type) {
    //save login data action
    case Types.SAVE_LOGIN:
      return {
        ...state,
        token: action.payload.token,
        type: action.payload.type
      };

    //delete token action
    case Types.DELETE_LOGIN:
      return {
        ...state,
        token: '',
        type: ''
      };

    default:
      return state;
  }
};

export default authReducer;
