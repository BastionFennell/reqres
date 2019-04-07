import {
    DELETE_USER_FROM_REDUX,
    SET_USER_LIST,
    SET_USER,
} from './action-types';
import { User } from './types';

import {
    deleteUserFromReduxAction,
    setUserListAction,
    setUserAction,
    UserActions,
} from './types';

export const initialState = [] as User[];

export default (
    state = initialState,
    action: UserActions,
) => {
    switch(action.type) {
        case DELETE_USER_FROM_REDUX: {
            const currentAction = action as deleteUserFromReduxAction;
            const userId = currentAction.user.id;

            return [...state.slice(0, userId - 1), ...state.slice(userId)]
        }
        case SET_USER_LIST: {
            const currentAction = action as setUserListAction;
            return currentAction.users;
        }
        case SET_USER: {
            const currentAction = action as setUserAction;
            const user = currentAction.user;

            const newState = state.slice(0);
            // Because the id here doubles as the
            // index, we can just use that.
            newState[user.id - 1] = user;
            return newState;
        }
        default:
            return state;
    }
}
