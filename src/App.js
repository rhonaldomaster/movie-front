import React, { Component } from 'react';
import MainHeader from './modules/main-header';
import MainFooter from './modules/main-footer';
import MainContent from './modules/main-content';

class App extends Component {
  render() {
    return (
      <main>
        <MainHeader></MainHeader>
        <MainContent></MainContent>
        <MainFooter></MainFooter>
      </main>
    );
  }
}

export default App;
