export type userReducerType = {
    userInfo: userInfoType | null;
}

export type userInfoType = {
    userId: string;
    userName: string;
    userLastName: string;
}

export type userActionType = {
    type: string;
    payload: any;
}