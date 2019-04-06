import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import {
    UserPageDispatchProps,
    UserPageProps,
    UserPageStateProps,
} from './types';

import { usersSelector } from 'src/state/users/selectors';
import { getUserList } from 'src/state/users/actions';

import UserList from 'src/components/user-list';

const Title = styled.h1`
    font-weight: normal;
`

class UsersPage extends Component<UserPageProps> {
    componentWillMount() {
        this.props.getUserList();
    }

    render() {
        const { users } = this.props;

        return (
            <React.Fragment>
                <Title>User Accounts</Title>
                <UserList users={users}/>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: any): UserPageStateProps => ({
    users: usersSelector(state),
});

const mapDispatchToProps = (dispatch: Function): UserPageDispatchProps => ({
    getUserList: () => dispatch(getUserList()),
});

export default connect<UserPageStateProps, UserPageDispatchProps, {}>(
    mapStateToProps,
    mapDispatchToProps,
)(UsersPage);
