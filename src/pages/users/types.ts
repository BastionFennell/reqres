import { getUserListAction, User } from 'src/state/users/types';

export interface UserPageStateProps {
    readonly users: Array<User>;
}

export interface UserPageDispatchProps {
    readonly deleteUser: (user: User) => void;
    readonly getUserList: () => void;
    readonly updateUser: (user: User) => void;
}

export type UserPageProps = UserPageStateProps & UserPageDispatchProps;
