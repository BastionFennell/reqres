import {
    GET_USER_LIST,
    SET_USER_LIST,
} from './action-types';

import {
    getUserListAction,
    setUserListAction,
    User,
} from 'src/state/users/types';

export const getUserList = (): getUserListAction => ({
    type: GET_USER_LIST,
})

export const setUserList = (users: Array<User>): setUserListAction => ({
    type: SET_USER_LIST,
    users,
})
