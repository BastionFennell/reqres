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
import DeleteUserModal from 'src/components/delete-user-modal';
import CreateButton from './create-button';

const Title = styled.h1`
    font-size: 2.5em;
    font-weight: normal;
    margin-bottom: 40px;
`;

const CreateSection = styled.section`
    margin-bottom: 40px;
`;


class UsersPage extends Component<UserPageProps, UserPageState> {
    state = {
        deletedUser: null,
        deletedUserIndex: -1,
        showDeleteModal: false,
        showCreateModal: false,
    }

    componentWillMount() {
        this.props.getUserList();
    }

    hideCreateModal = (): void => {
        this.setState({
            showCreateModal: false,
        });
    }

    showCreateModal = (): void => {
        this.setState({
            showCreateModal: true,
        });
    }

    hideDeleteModal = (): void => {
        this.setState({
            showDeleteModal: false,
            deletedUserIndex: -1,
            deletedUser: null,
        });
    }

    showDeleteModal = (index: number, user: User): void => {
        this.setState({
            showDeleteModal: true,
            deletedUserIndex: index,
            deletedUser: user,
        });
    }

    onCreateUser = (name: string, avatar: string) => {
        const [first_name, last_name] = name.split(' ');

        this.props.createUser(first_name, last_name, avatar);
        this.hideCreateModal();
    }

    onDeleteUser = () => {
        const { deletedUser, deletedUserIndex } = this.state;
        if (deletedUser) {
            this.props.deleteUser(deletedUserIndex, deletedUser);
            this.hideDeleteModal();
        }
    }

    render() {
        const { createUser, deleteUser, updateUser, users } = this.props;
        const { deletedUser, showCreateModal, showDeleteModal } = this.state;

        return (
            <React.Fragment>
                <Title>User Accounts</Title>
                <CreateSection>
                    <CreateButton onClick={this.showCreateModal} />
                </CreateSection>
                <UserList
                    onUserDelete={this.showDeleteModal}
                    onUserSave={updateUser}
                    users={users}
                />
                {showCreateModal && <CreateUserModal onCancel={this.hideCreateModal} onCreate={this.onCreateUser} />}
                {showDeleteModal && deletedUser && <DeleteUserModal onCancel={this.hideDeleteModal} onDelete={this.onDeleteUser} user={deletedUser}/>}
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
