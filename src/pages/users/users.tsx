import React, { Component } from 'react';
import { connect } from 'react-redux';

import { UserPageProps } from './types';

import { usersSelector } from 'src/state/users/selectors';
import UserList from 'src/components/user-list';

class UsersPage extends Component<UserPageProps> {
  render() {
    return (
      <React.Fragment>
        <UserList />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: any): UserPageProps => ({
    users: usersSelector(state),
});

export default connect<UserPageProps, {}, {}>(
    mapStateToProps,
)(UsersPage);
