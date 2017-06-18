import React, {PropTypes} from 'react';

import LatestPosts from '../../components/LatestPosts';
import Page from '../Page';

const Post = props => {
  // it's up to you to choose what to do with this layout ;)
  const pageDate = props.head.date ? new Date(props.head.date) : null;

  return (
    <Page
      {...props}
      header={
        <div>
          <header className="flex justify-center o-60 mb3 f6">
            {pageDate &&
              <time key={pageDate.toISOString()}>
                {pageDate.toDateString()}
              </time>}
          </header>
        </div>
      }>
      <hr />
      <LatestPosts />
    </Page>
  );
};

Post.propTypes = {
  head: PropTypes.object.isRequired,
};

export default Post;
