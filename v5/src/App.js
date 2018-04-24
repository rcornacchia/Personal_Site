import React, { Component } from 'react';
import styled from 'styled-components';
import bitmoji from './bitmoji.png';
import './App.css';

const Logo = styled.img`
  height: 200px;
  width: 200px;
`

const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  padding: 10px;
`

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Logo src={bitmoji} />
          <h1>Hey!</h1>
          <h1>My name is Rob and I'm a full-stack software engineer in NYC.</h1>
        </Container>
      </div>
    );
  }
}

export default App;
