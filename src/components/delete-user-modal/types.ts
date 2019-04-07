import { User } from 'src/state/users/types';

export interface UserModalProps {
    onCancel: Function;
    onDelete: () => void;
    user: User,
}
