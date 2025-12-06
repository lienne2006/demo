import React from 'react';
import styles from './StatCard.module.css';

const StatCard = ({ title, value, percentage, isRevenue = false }) => {
  return (
    <div className={styles.card}>
      <div className={styles.value}>{isRevenue ? `$${value}` : value}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.percentage}>
        {percentage}
      </div>
    </div>
  );
};

export default StatCard;