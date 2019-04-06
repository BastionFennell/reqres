import { getUserListAction, User } from 'src/state/users/types';

export interface UserPageStateProps {
    readonly users: Array<User>;
}

export interface UserPageDispatchProps {
    readonly getUserList: () => void;
}

export type UserPageProps = UserPageStateProps & UserPageDispatchProps;
