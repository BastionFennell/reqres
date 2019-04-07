import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';
import dateFns from 'date-fns';

import { User } from 'src/state/users/types';

import { createUserAction as createUserActionType } from 'src/state/users/types';
import { CREATE_USER } from 'src/state/users/action-types';
import { addUser } from 'src/state/users/actions';

export const createUserUrl = 'https://reqres.in/api/users';

export function* createUserSaga({ avatar, first_name, last_name }: createUserActionType) {
    const userDate = dateFns.format(Date.now(), 'YYYY-MM-DD');
    const { data: response } = yield call(axios.post,
        createUserUrl,
        {
            avatar,
            first_name,
            last_name,
            userDate,
        },
    );

    const newUser = response || {};
    const addUserAction = yield call(addUser, newUser);

    yield put(addUserAction);
}

export default takeLatest(CREATE_USER, createUserSaga);
