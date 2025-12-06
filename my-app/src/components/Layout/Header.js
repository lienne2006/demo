import React from 'react';
import styles from './Header.module.css';

const Header = ({ title, subtitle, filterLabel, filterOptions, children }) => {
  return (
    <header className={styles.header}>
      <div className={styles.titleArea}>
        {title && <h2 className={styles.title}>{title}</h2>}
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>

      {/* Vùng Lọc/Filter (Nếu có) */}
      {(filterLabel || filterOptions) && (
        <div className={styles.filter}>
          {filterLabel && <span>{filterLabel}</span>}
          {filterOptions && (
            <select className={styles.filterSelect}>
              {filterOptions.map((option, index) => (
                <option key={index} value={option.value || option.label}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
        </div>
      )}
      
      {/* Các thành phần bổ sung (ví dụ: nút, icon) */}
      {children}
    </header>
  );
};

export default Header;