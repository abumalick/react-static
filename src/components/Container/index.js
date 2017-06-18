import React, {PropTypes} from 'react';

const Container = props =>
  <div className="min-vh-100 flex flex-column">
    {props.children}
  </div>;

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
