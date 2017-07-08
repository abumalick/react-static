import React, {PropTypes} from 'react';

import PagePreview from './PagePreview';

const PagesList = ({pages}) => {
  return (
    <div>
      {pages.length
        ? <ul className="flex flex-column pa0 list">
            {pages.map(page =>
              <li key={page.title}><PagePreview {...page} /></li>,
            )}
          </ul>
        : 'No posts yet.'}
    </div>
  );
};

PagesList.propTypes = {
  pages: PropTypes.array.isRequired,
};

export default PagesList;
