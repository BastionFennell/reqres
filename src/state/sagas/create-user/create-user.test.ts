import { call } from 'redux-saga/effects'
import axios from 'axios';
import { expectSaga } from 'redux-saga-test-plan';

import { createUser, addUser } from 'src/state/users/actions';

import { createUserSaga, createUserUrl } from './create-user';

it('Deletes a user via the reqres api', () => {
    const addUserAction = () => null;
    const user = {
        id: 1
    }

    const first_name = 'doot';
    const last_name = 'mcDoot';

    expectSaga(createUserSaga, first_name, last_name)
        .provide([
            [call(axios.post, createUserUrl, { first_name, last_name }), user],
            [call(addUser, user), addUserAction],
        ])
        .call(axios.post, createUserUrl, { first_name, last_name })
        .call(addUser, user)
        .put(addUserAction)
});
