import React from "react";
import "../styles/ImageGalleryItem.scss";

const ImageGalleryItem = ({ objs }) => (
  <>
    {objs.map((obj) => (
      <li className="ImageGalleryItem" key={obj.id}>
        <img
          src={obj.webformatURL}
          alt={obj.tags}
          className="ImageGalleryItem-image"
        />
      </li>
    ))}
  </>
);

export default ImageGalleryItem;
