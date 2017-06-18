import React, {PropTypes} from 'react';
import {Link} from 'phenomic';
import Svg from 'react-svg-inline';

import twitterSvg from '../icons/iconmonstr-twitter-1.svg';
import gitHubSvg from '../icons/iconmonstr-github-1.svg';

const Header = (props, {metadata: {pkg}}) =>
  <header className="absolute left-0 right-0 white">
    <nav className="mw8 pv3 flex justify-between center">
      <div className="flex">
        <Link
          className="flex items-center o-80 link no-underline color-inherit underline-hover hover-white"
          to={'/'}>
          {'Home'}
        </Link>
      </div>
      <div className="flex">
        {pkg.twitter &&
          <a
            href={`https://twitter.com/${pkg.twitter}`}
            className="flex items-center o-80 link no-underline color-inherit underline-hover hover-white">
            <Svg
              svg={twitterSvg}
              className="o-50 mr2 w2 v-mid"
              fill="#fff"
              cleanup
            />
            {' Twitter'}
          </a>}
        {pkg.repository &&
          <a
            href={pkg.repository}
            className="flex items-center o-80 link no-underline color-inherit underline-hover hover-white">
            <Svg
              svg={gitHubSvg}
              className="o-50 mr2 w2 v-mid"
              fill="#fff"
              cleanup
            />
            {' GitHub'}
          </a>}
      </div>
    </nav>
  </header>;

Header.contextTypes = {
  metadata: PropTypes.object.isRequired,
};

export default Header;
