import React, { Component } from 'react';
import logo from '../logo.svg';
import MainMenu from './menu/main-menu';

class MainHeader extends Component {
  render() {
    return(
      <header className="main-header">
        <img src={logo} className="main-header__logo" alt="logo" />
        <h1 className="main-header__title">Movie store</h1>
        <MainMenu></MainMenu>
      </header>
    );
  }
}

export default MainHeader;