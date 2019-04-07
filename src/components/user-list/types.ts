import { User } from 'src/state/users/types';

export interface UserListProps {
    readonly users: Array<User>;
    onUserSave(user: User): void;
}
