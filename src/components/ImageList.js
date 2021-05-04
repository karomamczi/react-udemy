import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = (props) => {
  const images = props.images.slice(0, 100).map((image, index) => {
    return (
      <ImageCard
        key={`dog-${index}`}
        imageAlt={`Dog ${index}`}
        imageSrc={image}
      />
    );
  });
  return <ul>{images}</ul>;
};

export default ImageList;
