import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState('');

  const onDrop = (acceptedFiles) => {
    acceptedFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        setImages(prevImages => [...prevImages, { id: Date.now(), src: reader.result, description: '' }]);
      };
      reader.readAsDataURL(file);
    });
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAddPhoto = () => {
    setImages(prevImages => prevImages.map(img => img.description ? img : { ...img, description }));
    setDescription('');
  };

  const handleEdit = (id, newDescription) => {
    setImages(prevImages => prevImages.map(img => img.id === id ? { ...img, description: newDescription } : img));
  };

  const handleRemove = (id) => {
    setImages(prevImages => prevImages.filter(img => img.id !== id));
  };

  return (
    <div className="App">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Upload photo</p>
      </div>
      <input
        type="text"
        value={description}
        onChange={handleDescriptionChange}
        placeholder="description"
      />
      <button onClick={handleAddPhoto}>Add Photo</button>
      <div className="gallery">
        {images.map(img => (
          <div key={img.id} className="image-container">
            <img src={img.src} alt="uploaded" />
            <p>{img.description}</p>
            <button onClick={() => handleEdit(img.id, prompt('Edit description:', img.description))}>Edit</button>
            <button onClick={() => handleRemove(img.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
