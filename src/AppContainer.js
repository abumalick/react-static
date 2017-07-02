import React, {PropTypes} from 'react';

import 'tachyons/css/tachyons.css';
import './index.global.css';

import Head from './components/Head';
import Nav from './components/Nav';
import Footer from './components/Footer';

const AppContainer = props =>
  <div className="min-vh-100 flex flex-column">
    <Head />
    <Nav />
    <div className="flex-auto flex flex-column items-stretch">
      {props.children}
    </div>
    <Footer />
  </div>;

AppContainer.propTypes = {
  children: PropTypes.node,
};

export default AppContainer;
