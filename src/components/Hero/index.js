import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import styles from './styles.css';

const Hero = ({buttonText, buttonLink, img, title}) => {
  return (
    <div
      className={`${styles.radialGradient} bg-green`}
      style={
        img && {
          background: `#111 url(${img}) 50% 50% / cover`,
        }
      }>
      <div className={`flex flex-column pv5 tc ${styles.linearGradient}`}>
        <div className="flex flex-column self-center w-100 mw8 pa3">
          <h1 className={`near-white ${styles.textShadow}`}>
            {title}
          </h1>
          {buttonText &&
            <Button to={buttonLink} className="mt4">
              {buttonText}
            </Button>}
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  buttonLink: PropTypes.string,
  buttonText: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
};

export default Hero;
