import { all } from 'redux-saga/effects';

import createUser from 'src/state/sagas/create-user';
import deleteUser from 'src/state/sagas/delete-user';
import getUserList from 'src/state/sagas/get-user-list';
import updateUser from 'src/state/sagas/update-user';

export default function*() {
    yield all([
        createUser,
        deleteUser,
        getUserList,
        updateUser,
    ]);
}
