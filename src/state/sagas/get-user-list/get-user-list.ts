import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios';

import { GET_USER_LIST } from 'src/state/users/action-types';
import { setUserList } from 'src/state/users/actions';

export const getUserListUrl = 'https://reqres.in/api/users';

export function* getUserList() {
    const { data: response } = yield call(axios.get, getUserListUrl);

    const users = response.data || [];
    const setUserListAction = yield call(setUserList, users);

    yield put(setUserListAction);
}

export default takeLatest(GET_USER_LIST, getUserList);
