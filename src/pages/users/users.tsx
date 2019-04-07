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
import { getUserList, updateUser } from 'src/state/users/actions';

import UserList from 'src/components/user-list';

const Title = styled.h1`
    font-weight: normal;
`

class UsersPage extends Component<UserPageProps> {
    componentWillMount() {
        this.props.getUserList();
    }

    onUserSave = (user: User): void => {
        const { updateUser } = this.props;

        updateUser(user);
    }

    render() {
        const { users } = this.props;

        return (
            <React.Fragment>
                <Title>User Accounts</Title>
                <UserList onUserSave={this.onUserSave} users={users}/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: any): UserPageStateProps => ({
    users: usersSelector(state),
});

const mapDispatchToProps = (dispatch: Function): UserPageDispatchProps => ({
    getUserList: () => dispatch(getUserList()),
    updateUser: (user: User) => dispatch(updateUser(user)),
});

export default connect<UserPageStateProps, UserPageDispatchProps, {}>(
    mapStateToProps,
    mapDispatchToProps,
)(UsersPage);
