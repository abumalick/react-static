import React, {PropTypes} from 'react';

const Content = props =>
  <div className="flex-auto flex flex-column items-stretch">
    {props.children}
  </div>;

Content.propTypes = {
  children: PropTypes.node,
};

export default Content;
