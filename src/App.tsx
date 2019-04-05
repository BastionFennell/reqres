import React, { Component } from 'react';

import UserList from './components/user-list';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
            <h1> User Accounts </h1>
        </header>
        <main>
            <UserList />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
