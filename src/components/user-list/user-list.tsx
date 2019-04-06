import React, { Component } from 'react';

import { UserListProps } from './types';

import UserCard from 'src/components/user-card';

class UserList extends Component<UserListProps> {
    render() {
        const { users } = this.props;
        return (
            <section>
                { users.map(user => (
                    <UserCard
                        date={user.date}
                        key={user.id}
                        name={user.name}
                        onChange={() => null}
                    />
                ))}
            </section>
        );
    }
}

export default UserList;
