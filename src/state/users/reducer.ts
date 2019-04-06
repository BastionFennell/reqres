import { SET_USER_LIST } from './action-types';
import { User } from './types';

import {
    setUserListAction,
    UserActions,
} from './types';

export const initialState = [] as User[];

export default (
    state = initialState,
    action: UserActions,
) => {
    switch(action.type) {
        case SET_USER_LIST: {
            const currentAction = action as setUserListAction;
            return currentAction.users;
        }
        default:
            return state;
    }
}
