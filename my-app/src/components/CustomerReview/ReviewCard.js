import React from 'react';
import styles from './ReviewCard.module.css';

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i} className={i < fullStars ? styles.filledStar : styles.emptyStar}>
        ★
      </span>
    );
  }
  return <div className={styles.rating}>{stars} {rating.toFixed(1)}</div>;
};

const ReviewCard = ({ review }) => {
  const { name, time, text, rating } = review;
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        {/* Thay bằng <img src={avatar} alt={name} className={styles.avatar} /> */}
        <div className={styles.avatarPlaceholder}>{/* Avatar placeholder */}</div>
        <div className={styles.info}>
          <div className={styles.name}>{name}</div>
          <div className={styles.time}>{time} ago</div>
        </div>
        <p className={styles.text}>{text}</p>
        <StarRating rating={rating} />
      </div>
      {/* Thay bằng <img src={image} alt="Dish" className={styles.dishImage} /> */}
      <div className={styles.imagePlaceholder}>Dish Image</div>
    </div>
  );
};

export default ReviewCard;