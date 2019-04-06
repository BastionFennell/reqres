import { call, takeLatest } from 'redux-saga/effects'

import { GET_USER_LIST } from 'src/state/users/action-types';

export function* getUserList() {
    yield call(console.log, 'got here');
}

export default takeLatest(GET_USER_LIST, getUserList);
