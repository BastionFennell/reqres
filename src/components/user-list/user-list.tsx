import React, { Component } from 'react';

import UserCard from 'src/components/user-card';

class UserList extends Component {
    render() {
        return (
            <section>
                <UserCard
                    date="1/1/1111"
                    name="Doot"
                    onChange={() => null}
                />
            </section>
        );
    }
}

export default UserList;
