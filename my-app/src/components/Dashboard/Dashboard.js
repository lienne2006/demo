import React from 'react';
import styles from './Dashboard.module.css';
import Header from '../Layout/Header'; 
import StatCard from './StatCard';
import OrderCard from './OrderCard';

// Dữ liệu giả cho Stat Cards
const statData = [
  { title: 'Total Orders', value: 75, percentage: '+5 (30 days)' },
  { title: 'Total Delivered', value: 357, percentage: '-4 (30 days)' },
  { title: 'Total Cancelled', value: 65, percentage: '-1 (30 days)' },
  { title: 'Total Revenue', value: 128, percentage: '+2 (30 days)', isRevenue: true },
];

// Dữ liệu giả cho Order Cards
const orderData = [
  { id: 1123, status: 'delivered', date: '28/11/24', time: '12:00', name: 'Name', total: 40.00, avatar: '...', highlighted: false },
  { id: 1180, status: 'delivered', date: '28/11/24', time: '12:00', name: 'Name', total: 40.00, avatar: '...', highlighted: false },
  // Dòng highlight trong ảnh
  { id: 1124, status: 'in progress', date: '28/11/24', time: '12:00', name: 'Name', total: 40.00, avatar: '...', highlighted: true }, 
  { id: 1125, status: 'in progress', date: '28/11/24', time: '12:00', name: 'Name', total: 40.00, avatar: '...', highlighted: false },
  { id: 1126, status: 'in progress', date: '28/11/24', time: '12:00', name: 'Name', total: 40.00, avatar: '...', highlighted: false },
  { id: 1127, status: 'in progress', date: '28/11/24', time: '12:00', name: 'Name', total: 40.00, avatar: '...', highlighted: false },
];

const Dashboard = () => {
  const filterOptions = [
    { label: '10 Apr 2025 - 10 May 2025', value: 'current' },
    { label: 'Last 30 days', value: 'last30' },
  ];

  return (
    <div className={styles.dashboard}>
      
      {/*  HEADER COMPONENT */}
      <Header
        title="Dashboard"
        subtitle="Hi,ADMIN . Welcome back!"
        filterLabel="Filter Periode"
        filterOptions={filterOptions}
      />
      
      {/* ➡️ THẺ THỐNG KÊ */}
      <section className={styles.statsGrid}>
        {statData.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </section>

      {/* DANH SÁCH ĐƠN HÀNG */}
      <section className={styles.recentOrders}>
        <div className={styles.ordersHeader}>
          {/* Nút filter Order nằm ở bên trái, không nằm trong Header chung */}
          <button className={styles.filterButton}>Filter Order</button>
        </div>
        
        <div className={styles.ordersList}>
          {orderData.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;