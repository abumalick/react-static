import React from 'react';
import PropTypes from 'prop-types';
import {active, topActive, bottomActive, top05} from './styles.css';

const Hamburger = ({clicked, className, onClick}) => {
  return (
    <a className={`${className} relative h2 w2 pointer`} onClick={onClick}>
      <span
        className={`absolute left-0 top-0 w-100 bt bw2 transition ${clicked
          ? `${active} ${topActive}`
          : ''}`}
      />
      <span
        className={`absolute left-0 ${top05} w-100 bt bw2 transition ${clicked
          ? 'o-0'
          : ''}`}
      />
      <span
        className={`absolute left-0 top-1 w-100 bt bw2 transition ${clicked
          ? `${active} ${bottomActive}`
          : ''}`}
      />
    </a>
  );
};

Hamburger.propTypes = {
  clicked: PropTypes.bool.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Hamburger.propTypes = {};

export default Hamburger;
