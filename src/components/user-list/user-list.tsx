import React, { Component } from 'react';

import UserCard from 'src/components/user-card';

class UserList extends Component {
    render() {
        return (
            <section>
                <UserCard />
            </section>
        );
    }
}

export default UserList;
