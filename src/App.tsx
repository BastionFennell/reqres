import React, { Component } from 'react';

import UserPage from './pages/users';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header>
            Super Hero Co
        </header>
        <main>
            <UserPage />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
