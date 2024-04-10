import { LOGIN_USER_ACTION } from "./actions"

export const initialState = {
username: "",
};


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER_ACTION:
            return {
               ...state,
                username: action.payload,
            }
        default:
            return state
    }
};


export default userReducer;