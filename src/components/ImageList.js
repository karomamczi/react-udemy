import React from 'react';
import './ImageList.css';

const ImageList = (props) => {
  const images = props.images.map((image, index) => {
    return (
      <li key={`dog-${index}`}>
        <img alt={`Dog ${index}`} src={image} />
      </li>
    );
  });
  return <ul>{images}</ul>;
};

export default ImageList;
