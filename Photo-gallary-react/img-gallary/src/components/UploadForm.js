import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './UploadForm.css';

function UploadForm({ onAddImage }) {
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setSelectedFile(acceptedFiles[0]);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAddPhoto = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        onAddImage({ id: Date.now(), src: reader.result, description });
        setDescription('');
        setSelectedFile(null);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      alert("Please select a file first.");
    }
  };

  return (
    <div className="upload-section">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag & drop a photo, or click to select one</p>
      </div>
      <input
        type="text"
        value={description}
        onChange={handleDescriptionChange}
        placeholder="Enter a description"
        className="description-input"
      />
      <button onClick={handleAddPhoto} className="add-photo-button">Add Photo with Description</button>
    </div>
  );
}

export default UploadForm;
