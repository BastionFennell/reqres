import {
    DELETE_USER,
    DELETE_USER_FROM_REDUX,
    GET_USER_LIST,
    SET_USER_LIST,
    SET_USER,
    UPDATE_USER,
} from './action-types';

import {
    deleteUserAction,
    deleteUserFromReduxAction,
    getUserListAction,
    setUserListAction,
    setUserAction,
    updateUserAction,
    User,
} from 'src/state/users/types';

export const deleteUser = (index: number, user: User): deleteUserAction => ({
    type: DELETE_USER,
    index,
    user,
});

export const deleteUserFromRedux = (index: number): deleteUserFromReduxAction => ({
    type: DELETE_USER_FROM_REDUX,
    index,
});


export const getUserList = (): getUserListAction => ({
    type: GET_USER_LIST,
})

export const setUser = (index: number, user: User): setUserAction => ({
    type: SET_USER,
    index,
    user,
});

export const setUserList = (users: Array<User>): setUserListAction => ({
    type: SET_USER_LIST,
    users,
})

export const updateUser = (index: number, user: User): updateUserAction => ({
    type: UPDATE_USER,
    index,
    user,
});
