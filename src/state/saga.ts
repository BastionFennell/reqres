import { all } from 'redux-saga/effects';

import getUserList from 'src/state/sagas/get-user-list';
import updateUser from 'src/state/sagas/update-user';

export default function*() {
    yield all([
        getUserList,
        updateUser,
    ]);
}
