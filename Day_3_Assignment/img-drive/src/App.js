import React, { useState } from 'react';
import UploadForm from './components/UploadForm';
import ImageGallery from './components/ImageGallery';
import './App.css';

function App() {
  const [images, setImages] = useState([]);

  const handleAddImage = (image) => {
    setImages(prevImages => [...prevImages, image]);
  };

  const handleEditImage = (id, newDescription) => {
    setImages(prevImages => prevImages.map(img => img.id === id ? { ...img, description: newDescription } : img));
  };

  const handleRemoveImage = (id) => {
    setImages(prevImages => prevImages.filter(img => img.id !== id));
  };

  return (
    <div className="App">
      <UploadForm onAddImage={handleAddImage} />
      <ImageGallery images={images} onEditImage={handleEditImage} onRemoveImage={handleRemoveImage} />
    </div>
  );
}

export default App;
