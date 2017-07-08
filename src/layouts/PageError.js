import React, {PropTypes} from 'react';

import Page from './Page';

const PageError = ({error, errorText}) =>
  <Page
    head={{
      // hero credit: https://www.flickr.com/photos/mypubliclands/16101654539/
      hero: 'https://farm8.staticflickr.com/7559/16101654539_bee5151340_k.jpg',
    }}>
    <div className="flex flex-column justify-center items-center pv3">
      <div className="f1 light-silver">{'Oooops!'}</div>
      <div>
        <h1 className="pv4 tc">
          <strong>{error}</strong>
          {' '}
          {errorText}
        </h1>
        {error === 404 &&
          <div className="tc">
            <p>
              {'It seems you found a broken link. '}
              {'Sorry about that. '}
            </p>
            <p>
              {'Do not hesitate to report this page.'}
            </p>
          </div>}
      </div>
    </div>
  </Page>;

PageError.propTypes = {
  error: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorText: PropTypes.string,
};

PageError.defaultProps = {
  error: 404,
  errorText: 'Page Not Found',
};

export default PageError;
