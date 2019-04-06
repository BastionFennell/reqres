import React, { Component } from 'react';

import { UserListProps } from './types';

import UserCard from 'src/components/user-card';

class UserList extends Component<UserListProps> {
    render() {
        const { onUserSave, users } = this.props;
        return (
            <section>
                { users.map((user, index) => (
                    <UserCard
                        avatar={user.avatar}
                        date={user.date}
                        key={user.id}
                        name={`${user.first_name} ${user.last_name}`}
                        onSave={(name: string) => onUserSave(name, index)}
                    />
                ))}
            </section>
        );
    }
}

export default UserList;
