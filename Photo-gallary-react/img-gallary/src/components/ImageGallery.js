import React from 'react';
import './ImageGallery.css';

function ImageGallery({ images, onEditImage, onRemoveImage }) {
  return (
    <div className="gallery">
      {images.map(img => (
        <div key={img.id} className="image-container">
          <img src={img.src} alt="uploaded" />
          <p>{img.description}</p>
          <button onClick={() => onEditImage(img.id, prompt('Edit description:', img.description))} className="edit-button">Edit</button>
          <button onClick={() => onRemoveImage(img.id)} className="remove-button">Remove</button>
        </div>
      ))}
    </div>
  );
}

export default ImageGallery;
