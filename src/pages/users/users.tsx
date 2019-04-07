import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { User } from 'src/state/users/types';
import {
    UserPageDispatchProps,
    UserPageProps,
    UserPageState,
    UserPageStateProps,
} from './types';

import { usersSelector } from 'src/state/users/selectors';
import {
    createUser,
    deleteUser,
    getUserList,
    updateUser,
} from 'src/state/users/actions';

import UserList from 'src/components/user-list';
import CreateUserModal from 'src/components/create-user-modal';

const Title = styled.h1`
    font-weight: normal;
`

class UsersPage extends Component<UserPageProps, UserPageState> {
    state = {
        showModal: false,
    }

    componentWillMount() {
        this.props.getUserList();
    }

    hideModal = (): void => {
        this.setState({
            showModal: false,
        });
    }

    showModal = (): void => {
        this.setState({
            showModal: true,
        });
    }

    onCreateUser = (name: string, avatar: string) => {
        const [first_name, last_name] = name.split(' ');

        this.props.createUser(first_name, last_name, avatar);
        this.hideModal();
    }

    render() {
        const { createUser, deleteUser, updateUser, users } = this.props;
        const { showModal } = this.state;

        return (
            <React.Fragment>
                <Title>User Accounts</Title>
                <button onClick={this.showModal} >
                    show
                </button>
                <UserList
                    onUserDelete={deleteUser}
                    onUserSave={updateUser}
                    users={users}
                />
                {showModal && <CreateUserModal onCancel={this.hideModal} onCreate={this.onCreateUser} />}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state: any): UserPageStateProps => ({
    users: usersSelector(state),
});

const mapDispatchToProps = (dispatch: Function): UserPageDispatchProps => ({
    createUser: (first_name: string, last_name: string, avatar: string) => dispatch(createUser(first_name, last_name, avatar)),
    deleteUser: (index: number, user: User) => dispatch(deleteUser(index, user)),
    getUserList: () => dispatch(getUserList()),
    updateUser: (index: number, user: User) => dispatch(updateUser(index, user)),
});

export default connect<UserPageStateProps, UserPageDispatchProps, {}>(
    mapStateToProps,
    mapDispatchToProps,
)(UsersPage);
