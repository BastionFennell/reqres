import { getUserListAction, User } from 'src/state/users/types';

export interface UserPageStateProps {
    readonly users: Array<User>;
}

export interface UserPageDispatchProps {
    readonly deleteUser: (index: number, user: User) => void;
    readonly getUserList: () => void;
    readonly updateUser: (index: number, user: User) => void;
}

export interface UserPageState {
    showModal: boolean;
}

export type UserPageProps = UserPageStateProps & UserPageDispatchProps;
