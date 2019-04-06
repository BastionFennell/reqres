export interface User {
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

export type UserActions = getUserListAction | setUserListAction;
