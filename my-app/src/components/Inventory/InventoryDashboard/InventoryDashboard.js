// src/components/Inventory/InventoryDashboard/InventoryDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './InventoryDashboard.module.css';

// Dữ liệu giả định (Mô phỏng dữ liệu từ Backend)
const categories = [
  { name: 'Gỏi & gỏi cuốn', image: '/images/category-goi.jpg' },
  { name: 'Buger', image: '/images/category-buger.jpg' },
  { name: 'Tráng miệng', image: '/images/category-dessert.jpg' },
  { name: 'Nước uống', image: '/images/category-drink.jpg' },
];

const popularItems = [
  { id: 1, name: 'Chocolate Brownie', price: '15.00', image: '/images/item-brownie.jpg', description: 'Dark chocolate, walnuts, fudge swirl. Comes with vanilla ice cream.' },
  { id: 2, name: 'Buger', price: '10.00', image: '/images/item-buger.jpg', description: 'Premium beef patty, cheddar, lettuce, tomato, special sauce.' },
  { id: 3, name: 'Macarons', price: '12.00', image: '/images/item-macarons.jpg', description: 'Assorted flavors: pistachio, strawberry, and chocolate.' },
];

const allFoodItems = [
  ...popularItems, // Thêm 3 item phổ biến vào danh sách tổng
  { id: 4, name: 'Cheesecake', price: '8.50', image: '/images/item-cheesecake.jpg' },
  { id: 5, name: 'Mojito', price: '6.00', image: '/images/item-mojito.jpg' },
];

// Component con: Hiển thị một Item
const ItemCard = ({ item, isPopular = false }) => (
  <div className={styles.itemCard}>
    <img src={item.image} alt={item.name} className={styles.itemImage} />
    <div className={styles.itemDetails}>
      <h4 className={styles.itemName}>{item.name}</h4>
      {isPopular && (
        <p className={styles.itemDescription}>
          {item.description}
        </p>
      )}
      <div className={styles.itemFooter}>
        <button className={styles.editButton}>Edit info</button>
        <span className={styles.itemPrice}>${item.price}</span>
      </div>
    </div>
  </div>
);

const InventoryDashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <header className={styles.header}>
        <h1 className={styles.title}>Inventory Management</h1>
      </header>

      {/* --- All Categories Section --- */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>All Categories</h2>
        <div className={styles.categoriesGrid}>
          {categories.map((cat, index) => (
            <div key={index} className={styles.categoryCard}>
              <img src={cat.image} alt={cat.name} className={styles.categoryImage} />
              <span className={styles.categoryName}>{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- Most Popular Section --- */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Most popular</h2>
        <div className={styles.itemsGrid}>
          {popularItems.map((item) => (
            <ItemCard key={item.id} item={item} isPopular={true} />
          ))}
        </div>
      </section>

      {/* --- All Foods Section --- */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>All foods</h2>
        <div className={styles.itemsGrid}>
          {allFoodItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default InventoryDashboard;