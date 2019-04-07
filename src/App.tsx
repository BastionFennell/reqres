import React, { Component } from 'react';
import styled from 'styled-components';

import UserPage from './pages/users';

const AppContainer = styled.div`
    overflow-x: hidden;
`;

const Header = styled.header`
    align-items: center;
    background: #e2e2e2;
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.5);
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
    max-width: 640px;
    min-width: 400px;
    padding: 0 30px;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header>
            <Logo />
            Super Hero Co.
        </Header>
        <Main>
            <UserPage />
        </Main>
      </AppContainer>
    );
  }
}

export default App;
