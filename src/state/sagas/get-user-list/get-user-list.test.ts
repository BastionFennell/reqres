import { call } from 'redux-saga/effects'
import axios from 'axios';
import { expectSaga } from 'redux-saga-test-plan';

import { setUserList } from 'src/state/users/actions';

import { getUserList, getUserListUrl } from './get-user-list';

const userListResponse = {
    data: {
        data: [{
            first_name: 'Doot',
            last_name: 'McDoot',
            id: 1,
        }]
    }
}

it('Gets users from the reqres api', () => {
    const setUserListAction = () => null;

    expectSaga(getUserList)
        .provide([
            [call(axios.get, getUserListUrl), userListResponse],
            [call(setUserList, userListResponse.data.data), setUserListAction],
        ])
        .call(axios.get, getUserListUrl)
        .put(setUserListAction)
});
