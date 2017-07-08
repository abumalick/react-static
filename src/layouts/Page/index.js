import React, {PropTypes} from 'react';
import Helmet from 'react-helmet';
import warning from 'warning';
import {BodyContainer, joinUri} from 'phenomic';

import Hero from '../../components/Hero';
import Loading from '../../components/Loading';

import styles from './index.css';

const Page = (
  {isLoading, __filename, __url, head, body, header, bodyHeader, children},
  {metadata: {config}},
) => {
  warning(
    typeof head.title === 'string',
    `Your page '${__filename}' needs a title`,
  );

  const metaTitle = head.metaTitle ? head.metaTitle : head.title;
  const socialImage = head.hero && head.hero.match('://')
    ? head.hero
    : joinUri(process.env.PHENOMIC_USER_URL, head.hero);

  return (
    <div className="flex flex-column">
      <Helmet>
        <title>{metaTitle}</title>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={metaTitle} />
        <meta
          property="og:url"
          content={joinUri(process.env.PHENOMIC_USER_URL, __url)}
        />
        <meta property="og:image" content={socialImage} />
        <meta property="og:description" content={head.description} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={metaTitle} />
        {config.twitter &&
          <meta name="twitter:creator" content={`@${config.twitter}`} />}
        <meta name="twitter:description" content={head.description} />
        <meta property="twitter:image" content={socialImage} />
        <meta property="description" content={head.description} />
      </Helmet>
      {!header &&
        <Hero
          buttonLink={head.cta && head.cta.link}
          buttonText={head.cta && head.cta.label}
          img={head.hero}
          title={head.title}
        />}
      <div className="flex flex-column self-center w-100 mw7 pv3">
        {bodyHeader}
        <div className={styles.body}>
          {isLoading ? <Loading /> : <BodyContainer>{body}</BodyContainer>}
        </div>
        {children}
      </div>
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  __filename: PropTypes.string,
  __url: PropTypes.string,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
  header: PropTypes.element,
  bodyHeader: PropTypes.element,
};

Page.contextTypes = {
  metadata: PropTypes.object.isRequired,
};

export default Page;
