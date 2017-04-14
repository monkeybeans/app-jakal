import React from 'react';
import './header.scss';

const text = 'Jakal voting and suggestions';

const Header = () => (
  <div id="header" className="header">
    <h1 data-reflection-text={text}>{text}</h1>
    <h1 data-reflection-text={text}>{text}</h1>
  </div>
);

export default Header;
