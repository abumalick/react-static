import React, {PropTypes} from 'react';
import Helmet from 'react-helmet';

const Head = (props, {metadata: {config, pkg}}) =>
  <div hidden>
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="generator"
        content={`${process.env.PHENOMIC_NAME} ${process.env.PHENOMIC_VERSION}`}
      />
      {config.siteName &&
        <meta property="og:site_name" content={config.siteName} />}
      {config.twitter &&
        <meta property="twitter:site" content={`@${pkg.twitter}`} />}
      <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=es6&flags=gated" />
      <style>{'@-ms-viewport { width: device-width; }'}</style>
    </Helmet>
  </div>;

Head.propTypes = {
  meta: React.PropTypes.arrayOf(React.PropTypes.object),
  scripts: React.PropTypes.arrayOf(React.PropTypes.object),
};

Head.contextTypes = {
  metadata: PropTypes.object.isRequired,
};

export default Head;
