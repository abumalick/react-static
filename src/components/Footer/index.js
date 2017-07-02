import React from 'react';
import Blocks from './Blocks';
import BottomBar from './BottomBar';
import {footer} from './styles.css';

const Footer = () =>
  <footer className={`bg-near-black light-gray ${footer}`}>
    <Blocks />
    <BottomBar />
  </footer>;

export default Footer;
