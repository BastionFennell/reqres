import { call } from 'redux-saga/effects'
import axios from 'axios';
import { expectSaga } from 'redux-saga-test-plan';

import { updateUser, setUser } from 'src/state/users/actions';

import { updateUserSaga, getUpdateUserUrl } from './update-user';

const updateUserResponse = {
    data: {
        data: {
            first_name: 'Doot',
            last_name: 'McDoot',
            id: 1,
        }
    }
}

it('Updates a user via the reqres api', () => {
    const setUserAction = () => null;
    const userId = 1;

    expectSaga(updateUserSaga, userId)
        .provide([
            [call(axios.put, getUpdateUserUrl(userId)), updateUserResponse],
            [call(setUser, updateUserResponse.data.data), setUserAction],
        ])
        .call(axios.put, getUpdateUserUrl(userId))
        .call(setUser, updateUserResponse.data.data)
        .put(setUserAction)
});
