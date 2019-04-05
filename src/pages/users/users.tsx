import React, { Component } from 'react';

import UserList from 'src/components/user-list';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <UserList />
      </React.Fragment>
    );
  }
}

export default App;
