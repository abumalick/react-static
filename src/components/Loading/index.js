import React from 'react';
import Helmet from 'react-helmet';
import TopBarProgressIndicator from 'react-topbar-progress-indicator';

import styles from './index.css';

TopBarProgressIndicator.config({
  barColors: {
    '0': '#fff',
    '1.0': '#fff',
  },
  shadowBlur: 5,
});

const Loading = () =>
  <div>
    <Helmet title={'Loading...'} />
    <TopBarProgressIndicator />
    <div className="flex vh-25 justify-center items-center">
      <div
        className={`o-0 h4 w4 bw3 br-100 b--solid b--black-20 ${styles.spinner}`}
      />
    </div>
  </div>;

export default Loading;
