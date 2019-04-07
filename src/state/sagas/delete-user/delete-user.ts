import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';
import { User } from 'src/state/users/types';

import { deleteUserAction as deleteUserActionType } from 'src/state/users/types';
import { DELETE_USER } from 'src/state/users/action-types';
import { deleteUserFromRedux } from 'src/state/users/actions';

export const getDeleteUserUrl = (id: number) => `https://reqres.in/api/users/${id}`;

export function* deleteUserSaga({ index, user }: deleteUserActionType) {
    const { data: response } = yield call(axios.delete,
        getDeleteUserUrl(user.id),
    );

    const deleteUserAction = yield call(deleteUserFromRedux, index);

    yield put(deleteUserAction);
}

export default takeLatest(DELETE_USER, deleteUserSaga);
