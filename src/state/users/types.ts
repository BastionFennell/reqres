export interface User {
    avatar: string;
    first_name: string;
    last_name: string;
    id: number;
    date: string;
};

export interface addUserAction {
    readonly type: string;
    readonly user: User;
}

export interface createUserAction {
    readonly type: string;
    readonly first_name: string;
    readonly last_name: string;
}

export interface deleteUserFromReduxAction {
    readonly type: string;
    readonly index: number;
}

export interface deleteUserAction {
    readonly type: string;
    readonly index: number;
    readonly user: User;
}

export interface getUserListAction {
    readonly type: string;
}

export interface setUserListAction {
    readonly type: string;
    readonly users: Array<User>;
}

export interface updateUserAction {
    readonly type: string;
    readonly index: number;
    readonly user: User;
}

export interface setUserAction {
    readonly type: string;
    readonly index: number;
    readonly user: User;
}

export type UserActions =
    deleteUserFromReduxAction |
    deleteUserAction |
    getUserListAction |
    setUserListAction |
    setUserAction |
    updateUserAction;
