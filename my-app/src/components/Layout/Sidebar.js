import React from 'react';
// 1. Import Link và useLocation
import { Link, useLocation } from 'react-router-dom'; 

import styles from './Sidebar.module.css';

const Sidebar = ({ logo, title, items }) => {
  // 2. Sử dụng hook useLocation để lấy đường dẫn URL hiện tại
  const location = useLocation();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <div className={styles.logo}>{logo}</div>
        {title && <span className={styles.title}>{title}</span>}
      </div>
      <nav className={styles.nav}>
        <ul>
          {items.map((item) => (
            <li 
              key={item.path} // Dùng path làm key (đảm bảo path là duy nhất)
              // 3. So sánh item.path với đường dẫn hiện tại để xác định mục active
              className={location.pathname === item.path ? styles.active : ''}
            >
              {/* 4. Thay thế <a> bằng <Link> và dùng item.path làm to */}
              <Link to={item.path} className={styles.link}>
                <span className={styles.icon}>{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;