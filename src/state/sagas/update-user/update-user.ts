import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';
import { User } from 'src/state/users/types';

import { UPDATE_USER } from 'src/state/users/action-types';
import { setUser } from 'src/state/users/actions';

interface updateUserActionType {
    type: string,
    user: User,
}

export const getUpdateUserUrl = (id: number) => `https://reqres.in/api/users/${id}`;

export function* updateUserSaga({ user }: updateUserActionType) {
    const { data: response } = yield call(axios.put,
        getUpdateUserUrl(user.id),
        {...user},
    );

    const newUser = response.data || {};
    const setUserAction = yield call(setUser, newUser);

    yield put(setUserAction);
}

export default takeLatest(UPDATE_USER, updateUserSaga);
