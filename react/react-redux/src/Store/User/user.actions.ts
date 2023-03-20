import { userInfoType } from "./user.types";

export const setUserInfo = (data: userInfoType) => {
    return {
        type: "SET_USER_INFO",
        payload: data
    }
}