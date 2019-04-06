import { GET_USER_LIST } from './action-types';

import { getUserListAction } from 'src/state/users/types';

export const getUserList = (): getUserListAction => ({
    type: GET_USER_LIST,
})
