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
    deleteUser,
    getUserList,
    updateUser,
} from 'src/state/users/actions';

import UserList from 'src/components/user-list';
import Modal from 'src/components/modal';

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

    render() {
        const { deleteUser, updateUser, users } = this.props;
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
                {showModal && <Modal>
                    CreateUser
                </Modal>
                }
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
