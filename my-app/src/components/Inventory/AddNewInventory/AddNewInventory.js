// src/components/Inventory/AddNewInventory/AddNewInventory.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './AddNewInventory.module.css';

const AddNewInventory = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    imageFile: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, imageFile: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Đây là nơi bạn sẽ thêm logic gọi API backend để lưu dữ liệu
    console.log('Form Data Submitted:', formData);
    alert(`Đã nhận dữ liệu cho item: ${formData.name}. Sẵn sàng gửi backend!`);
    // Thường sau khi submit thành công, bạn sẽ navigate về trang Dashboard
    // navigate('/'); 
  };

  const imagePreviewUrl = formData.imageFile ? URL.createObjectURL(formData.imageFile) : null;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>Inventory Management</h1>
      </header>
      
      <div className={styles.contentWrapper}>
        <section className={styles.formSection}>
          <h2 className={styles.subtitle}>Add New Inventory</h2>
          
          <Link to="/" className={styles.backButton}>
             Back Home
          </Link>

          <form onSubmit={handleSubmit} className={styles.form}>
            {/* Cột trái: Form Inputs */}
            <div className={styles.inputColumn}>
                <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Item Name :</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.input}
                    required
                />
                </div>

                <div className={styles.formGroup}>
                <label htmlFor="category" className={styles.label}>Category :</label>
                <input
                    type="text"
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className={styles.input}
                    required
                />
                </div>

                <div className={styles.formGroup}>
                <label htmlFor="price" className={styles.label}>Price :</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className={styles.input}
                    step="0.01"
                    required
                />
                </div>

                <div className={styles.formGroupDescription}>
                <label htmlFor="description" className={styles.label}>Description</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className={styles.textarea}
                />
                </div>
                
                <button type="submit" className={styles.submitButton}>
                  Upload
                </button>
            </div>


            {/* Cột phải: Image Upload/Preview */}
            <div className={styles.uploadColumn}>
                <div className={styles.imagePlaceholder}>
                    {imagePreviewUrl ? (
                        <img 
                            src={imagePreviewUrl} 
                            alt="Item Preview" 
                            className={styles.imagePreview}
                        />
                    ) : (
                        <p>Image Preview Area</p>
                    )}
                </div>

                <label className={styles.uploadLabel}>
                    Choose File
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className={styles.fileInput}
                        required
                        />
                </label>
                {formData.imageFile && <p className={styles.fileName}>{formData.imageFile.name}</p>}
            </div>

            
          </form>
        </section>
      </div>
    </div>
  );
};

export default AddNewInventory;