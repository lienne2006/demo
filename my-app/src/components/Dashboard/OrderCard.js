import React from 'react';
import styles from './OrderCard.module.css';

const OrderCard = ({ order }) => {
  const { id, status, date, time, name, total, highlighted } = order;

  const statusClass = status === 'delivered' 
    ? styles.delivered 
    : styles.inProgress;

  return (
    <div className={`${styles.card} ${highlighted ? styles.highlighted : ''}`}>
      <div className={styles.left}>
        {/*  <img src={avatar} alt={name} className={styles.avatar} /> */}
        <div className={styles.avatarPlaceholder}>
          {}
        </div>
        <div className={styles.info}>
          <div className={`${styles.status} ${statusClass}`}>{status}</div>
          <div className={styles.name}>{name}</div>
          <div className={styles.total}>Total: ${total.toFixed(2)}</div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.orderId}>Order id: {id}</div>
        <div className={styles.dateTime}>{date} {time}</div>
        <button className={styles.detailsButton}>Details</button>
      </div>
    </div>
  );
};

export default OrderCard;