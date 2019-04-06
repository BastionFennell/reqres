import React, { Component } from 'react';
import styled from 'styled-components';

import UserPage from './pages/users';

const Header = styled.header`
    align-items: center;
    background: #e2e2e2;
    display: flex;
    font-size: 24px;
    height: 75px;
    justify-content: flex-start;
    padding: 0 30px;
    width: 100%;
`;

const Logo = styled.div`
    border-radius: 50%;
    background: #2e3737;
    height: 45px;
    margin-right: 20px;
    width: 45px;
`;

const Main = styled.main`
    margin: 0 auto;
    max-width: 990px;
    padding: 0 95px;
`;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header>
            <Logo />
            Super Hero Co.
        </Header>
        <Main>
            <UserPage />
        </Main>
      </React.Fragment>
    );
  }
}

export default App;
