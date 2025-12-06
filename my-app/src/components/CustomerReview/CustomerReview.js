import React from 'react';
import styles from './CustomerReview.module.css';
import StatCard from '../Dashboard/StatCard'; 
import ReviewCard from './ReviewCard';

// Dữ liệu giả
const statData = [
  { title: 'Tổng đơn hàng', value: 75, percentage: '4 (30 days)' },
  { title: 'Số lượng khách hàng', value: 60, percentage: '5 (30 days)' },
  { title: 'Số doanh thu', value: 128, percentage: '1% (30 days)', isRevenue: true },
];

const reviewData = [
  { name: 'Jons Sena', time: '2 days', text: 'Lorem ipsum...', rating: 4.5, image: 'dish-1.png' },
  { name: 'Sofia', time: '2 days', text: 'Lorem ipsum...', rating: 4.0, image: 'dish-2.png' },
  { name: 'Andreamsyah', time: '2 days', text: 'Lorem ipsum...', rating: 4.2, image: 'dish-3.png' },
  
];

const CustomerReview = () => {
  return (
    <div className={styles.customerReview}>
      <header className={styles.header}>
        <h2>Dashboard</h2>
        <div className={styles.filter}>
          <span>Lọc theo thời gian</span>
          <select>
            <option>2/11/2025 - 3/12/2025</option>
          </select>
        </div>
      </header>

      <section className={styles.statsGrid}>
        {statData.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </section>

      <section className={styles.customerReviewSection}>
        <div className={styles.reviewHeader}>
          <h3>Customer Review</h3>
          <p>hú hú khẹc khẹc.</p>
          <div className={styles.navigation}>
            <button className={styles.arrow}>{'<'}</button>
            <button className={styles.arrow}>{'>'}</button>
          </div>
        </div>
        
        <div className={styles.reviewsList}>
          {reviewData.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CustomerReview;