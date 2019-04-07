import { getUserListAction, User } from 'src/state/users/types';

export interface UserPageStateProps {
    readonly users: Array<User>;
}

export interface UserPageDispatchProps {
    readonly createUser: (first_name: string, last_name: string, avatar: string) => void;
    readonly deleteUser: (index: number, user: User) => void;
    readonly getUserList: () => void;
    readonly updateUser: (index: number, user: User) => void;
}

export interface UserPageState {
    showModal: boolean;
}

export type UserPageProps = UserPageStateProps & UserPageDispatchProps;
