import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { User } from 'src/state/users/types';
import {
    UserPageDispatchProps,
    UserPageProps,
    UserPageStateProps,
} from './types';

import { usersSelector } from 'src/state/users/selectors';
import {
    deleteUser,
    getUserList,
    updateUser,
} from 'src/state/users/actions';

import UserList from 'src/components/user-list';

const Title = styled.h1`
    font-weight: normal;
`

class UsersPage extends Component<UserPageProps> {
    componentWillMount() {
        this.props.getUserList();
    }

    render() {
        const { deleteUser, updateUser, users } = this.props;

        return (
            <React.Fragment>
                <Title>User Accounts</Title>
                <UserList
                    onUserDelete={deleteUser}
                    onUserSave={updateUser}
                    users={users}
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: any): UserPageStateProps => ({
    users: usersSelector(state),
});

const mapDispatchToProps = (dispatch: Function): UserPageDispatchProps => ({
    deleteUser: (index: number, user: User) => dispatch(deleteUser(index, user)),
    getUserList: () => dispatch(getUserList()),
    updateUser: (index: number, user: User) => dispatch(updateUser(index, user)),
});

export default connect<UserPageStateProps, UserPageDispatchProps, {}>(
    mapStateToProps,
    mapDispatchToProps,
)(UsersPage);
