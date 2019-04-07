import {
    GET_USER_LIST,
    SET_USER_LIST,
    SET_USER,
    UPDATE_USER,
} from './action-types';

import {
    getUserListAction,
    setUserListAction,
    setUserAction,
    updateUserAction,
    User,
} from 'src/state/users/types';

export const getUserList = (): getUserListAction => ({
    type: GET_USER_LIST,
})

export const setUser = (user: User): setUserAction => ({
    type: SET_USER,
    user,
});

export const setUserList = (users: Array<User>): setUserListAction => ({
    type: SET_USER_LIST,
    users,
})

export const updateUser = (user: User): updateUserAction => ({
    type: UPDATE_USER,
    user,
});
