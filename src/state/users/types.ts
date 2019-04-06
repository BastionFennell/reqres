import { GET_USER_LIST } from './action-types';

export interface User {
    id: number;
    name: string;
    date: string;
};

export interface getUserListAction {
    readonly type: string;
}
