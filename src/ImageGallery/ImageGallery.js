import React from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import "../styles/ImageGallery.scss";

const ImageGallery = ({ obj }) => {
  return (
    <ul className="ImageGallery">
      <ImageGalleryItem objs={obj} />
    </ul>
  );
};

export default ImageGallery;
