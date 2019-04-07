import { call } from 'redux-saga/effects'
import axios from 'axios';
import { expectSaga } from 'redux-saga-test-plan';

import { deleteUser, deleteUserFromRedux } from 'src/state/users/actions';

import { deleteUserSaga, getDeleteUserUrl } from './delete-user';

it('Deletes a user via the reqres api', () => {
    const deleteUserAction = () => null;
    const user = {
        id: 1
    }

    expectSaga(deleteUserSaga, user)
        .provide([
            [call(axios.delete, getDeleteUserUrl(user.id)), {}],
            [call(deleteUserFromRedux, user), deleteUserAction],
        ])
        .call(axios.put, getDeleteUserUrl(user.id))
        .call(deleteUserFromRedux, user)
        .put(deleteUserAction)
});
