import React, {PropTypes} from 'react';
import {Link} from 'phenomic';

const Button = ({className, children, to, ...otherProps}) =>
  <div>
    <Link
      role="button"
      to={to}
      className={`pv2 ph4 br-pill link no-underline white bg-blue grow dib bg-animate ${className}`}
      {...otherProps}>
      {children}
    </Link>
  </div>;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
};

Button.displayName = 'Button';

export default Button;
