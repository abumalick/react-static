import React from 'react';
import PropTypes from 'prop-types';
import Markdown from '../Markdown';

const BottomBar = (props, {metadata: {config}}) => {
  return (
    <div className="ph3 flex flex-wrap justify-between items-center f5 o-80">
      <div className="flex-2">
        {config.footerBottom.left &&
          <Markdown text={config.footerBottom.left} />}
      </div>
      {config.footerBottom.center
        ? <Markdown text={config.footerBottom.center} />
        : <a className="no-underline" href="#top">
            &#9650;
          </a>}
      <div className="flex-2">
        {config.footerBottom.right &&
          <Markdown text={config.footerBottom.right} />}
      </div>
    </div>
  );
};

BottomBar.contextTypes = {
  metadata: PropTypes.object.isRequired,
};

export default BottomBar;
