import React from 'react';

const Footer = () =>
  <footer className="tc">
    {/* If you like Phenomic, this is a way to share the love ;) */}
    <p>
      <a href={process.env.PHENOMIC_HOMEPAGE} className="f7 o-60 no-underline">
        {'Website generated with '}
        <span className="fw6">
          {`<${process.env.PHENOMIC_NAME} />`}
        </span>
      </a>
    </p>
  </footer>;

export default Footer;
