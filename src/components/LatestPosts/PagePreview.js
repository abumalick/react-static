import React, {PropTypes} from 'react';
import {Link} from 'phenomic';

import Button from '../Button';

const PagePreview = ({__url, title, date, description}) => {
  const pageDate = date ? new Date(date) : null;

  return (
    <div className="flex flex-column mw6 center mv3 pv3 ph0">
      <Link to={__url} className="self-center no-underline underline-hover">
        <h3>{title}</h3>

      </Link>
      <div className="f7 silver">
        {pageDate &&
          <time key={pageDate.toISOString()}>
            {pageDate.toDateString()}
          </time>}
      </div>
      <p className="f6">
        {description}
      </p>
      <Button to={__url}>{'Read More →'}</Button>
    </div>
  );
};

PagePreview.propTypes = {
  __url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string,
  description: PropTypes.string,
};

export default PagePreview;
