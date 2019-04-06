import { all } from 'redux-saga/effects';

import getUserList from 'src/state/sagas/get-user-list';

export default function*() {
    yield all([
        getUserList,
    ]);
}
