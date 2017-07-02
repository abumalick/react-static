import React from 'react';
import PropTypes from 'prop-types';
import Markdown from '../Markdown';
import {blocks} from './styles.css';

const Blocks = (props, {metadata: {config}}) => {
  return (
    <div className={`flex justify-around ${blocks}`}>
      {config.blocks.map((block, index) =>
        <div key={index}>
          {block.title && <h3>{block.title}</h3>}
          {block.content && <Markdown text={block.content} />}
        </div>,
      )}
    </div>
  );
};

Blocks.contextTypes = {
  metadata: PropTypes.object.isRequired,
};
export default Blocks;
