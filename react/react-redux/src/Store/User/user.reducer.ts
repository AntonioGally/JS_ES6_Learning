import { userActionType, userReducerType } from "./user.types";

//Our state
const initialState: userReducerType = {
    userInfo: null
}

function userReducer(state: userReducerType = initialState, action: userActionType) {
    switch (action.type) {
        case "SET_USER_INFO":
            return { ...state, userInfo: action.payload }
        default:
            return state
    }
}

export default userReducer;