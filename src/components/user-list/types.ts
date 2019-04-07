import { User } from 'src/state/users/types';

export interface UserListProps {
    readonly users: Array<User>;
    onUserDelete(user: User): void;
    onUserSave(user: User): void;
}
