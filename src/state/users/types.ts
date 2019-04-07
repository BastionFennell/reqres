export interface User {
    avatar: string;
    first_name: string;
    last_name: string;
    id: number;
    date: string;
};

export interface getUserListAction {
    readonly type: string;
}

export interface setUserListAction {
    readonly type: string;
    readonly users: Array<User>;
}

export interface updateUserAction {
    readonly type: string;
    readonly user: User;
}

export interface setUserAction {
    readonly type: string;
    readonly user: User;
}

export type UserActions =
    getUserListAction |
    setUserListAction |
    setUserAction |
    updateUserAction;
