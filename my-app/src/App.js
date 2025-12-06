import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, Outlet, Link } from 'react-router-dom';

// === IMPORT CÁC COMPONENTS CỦA BẠN ===
import Dashboard from './components/Dashboard/Dashboard';
import CustomerReview from './components/CustomerReview/CustomerReview';
import Sidebar from './components/Layout/Sidebar';

// Components Inventory
import InventoryDashboard from './components/Inventory/InventoryDashboard/InventoryDashboard';
import AddNewInventory from './components/Inventory/AddNewInventory/AddNewInventory'; 
// === CSS ===
import styles from './App.module.css';
import './App.global.css'; 
// Component giả định
const StockReport = () => <h1>Báo cáo Tồn Kho</h1>;



// --- DỮ LIỆU SIDEBAR CHO LAYOUT ROMDOL ---
const sidebarItemsRomdol = [
    { path: '/', label: 'Dashboard', icon: '🏠' }, 
    { path: 'inventory', label: 'Quản lý Kho (Inventory)', icon: '🛒' }, 
    { path: 'orders', label: 'Quản lý đơn hàng', icon: '📦' },
    { path: 'menu', label: 'Thực đơn', icon: '🍔' },
    { path: 'revenue', label: 'Thống kê doanh thu', icon: '💰' },
    { path: 'feedback', label: 'Phản hồi của khách hàng', icon: '💬' },
    { path: 'detail', label: 'Chi tiết khách hàng', icon: '👤' },
];

// --- DỮ LIỆU SIDEBAR CHO LAYOUT KFC ---
const sidebarItemsKFC = [
    { path: '/', label: 'Customer Review Home', icon: '💬' },
    { path: 'settings', label: 'Cài đặt KFC', icon: '⚙️' },
    { path: 'analytics', label: 'Phân tích phản hồi', icon: '📊' },
];

// --- DỮ LIỆU SUB-SIDEBAR CHO TRANG INVENTORY ---
const inventorySubMenuItems = [
    { path: '', label: 'Tổng quan Kho', component: InventoryDashboard }, 
    { path: 'reports', label: 'Báo cáo tồn kho', component: StockReport },
];



// COMPONENT 3: SUB-LAYOUT CHO INVENTORY (Cấp trung gian)
function InventorySubLayout() {
    return (
        <div className={styles.inventoryLayout}>
            <h2>Quản lý Kho Hàng</h2>
            
            <nav className={styles.inventoryNav}>
                <ul>
                    {inventorySubMenuItems.map((item, index) => (
                        <li key={index}>
                            <Link to={item.path} className={styles.subLink}> 
                                {item.label}
                            </Link>
                        </li>
                    ))}
                    {/* Link đến trang Add New độc lập (vẫn có Sidebar chính) */}
                    <li><Link to="add-new" className={styles.subLink}>+ Thêm mới</Link></li>
                </ul>
            </nav>
            
            <div className={styles.inventoryContent}>
                <Outlet />
            </div>
        </div>
    );
}

// ******************************************************
// COMPONENT 2: DASHBOARD LAYOUT (Cấp cao nhất - Luôn có Sidebar)
// ******************************************************
function DashboardLayout({ sidebarItems, LogoText, TitleText }) {
    return (
        <div className={styles.appContainer}>
            {/* SIDEBAR LUÔN HIỂN THỊ */}
            <Sidebar
                logo={LogoText}
                title={TitleText}
                items={sidebarItems} 
            />
            
            <main className={styles.mainContent}>
                {/* <Outlet> hiển thị nội dung thay đổi theo Route/Layout */}
                <Outlet /> 
            </main>
        </div>
    );
}


// ******************************************************
// COMPONENT 1: HÀM APP() QUẢN LÝ STATE VÀ ROUTES
// ******************************************************
function LayoutManager() {
    const [layout, setLayout] = useState('romdol');
    const navigate = useNavigate();

    const currentSidebarItems = layout === 'romdol' ? sidebarItemsRomdol : sidebarItemsKFC;
    const currentLogo = layout === 'romdol' ? 'Romdol.' : 'KFC Logo';
    const currentTitle = layout === 'romdol' ? 'Modern Admin Dashboard' : 'KFC Review Panel';

    const handleToggleLayout = () => {
        const newLayout = layout === 'romdol' ? 'kfc' : 'romdol';
        setLayout(newLayout);
        navigate('/', { replace: true });
    };

    return (
        <>
            <Routes>
                {/* ROUTE BỌC: Tất cả các trang bên dưới đều có Sidebar Chính */}
                <Route 
                    path="/" 
                    element={<DashboardLayout sidebarItems={currentSidebarItems} LogoText={currentLogo} TitleText={currentTitle} />}
                >
                    {/* Tuyến đường con được render bên trong <Outlet> của DashboardLayout */}
                    {layout === 'romdol' ? (
                        <>
                            {/* index = / (Trang chủ Romdol) */}
                            <Route index element={<Dashboard />} /> 
                            <Route path="orders" element={<div>Trang Quản lý đơn hàng</div>} />
                            
                            {/* 🎯 TRANG ADD NEW VỚI SIDEBAR CHÍNH 🎯 
                                Route này độc lập, bỏ qua InventorySubLayout.
                            */}
                            <Route path="inventory/add-new" element={<AddNewInventory />} />
                            
                            {/* CẤU TRÚC LAYOUT INVENTORY SUB-MENU (Bao gồm Dashboard/Report) */}
                            <Route path="inventory" element={<InventorySubLayout />}>
                                {inventorySubMenuItems.map((item, index) => (
                                    <Route 
                                        key={index}
                                        path={item.path} 
                                        element={<item.component />}
                                    />
                                ))}
                            </Route>

                            <Route path="feedback" element={<div>Phản hồi của khách hàng (Romdol)</div>} />
                            <Route path="*" element={<h1>404 - Trang Romdol không tồn tại</h1>} />
                        </>
                    ) : (
                        // Tuyến đường con của Layout KFC
                        <>
                            <Route index element={<CustomerReview />} />
                            <Route path="settings" element={<div>Cài đặt KFC</div>} />
                            <Route path="analytics" element={<div>Phân tích Phản hồi</div>} />
                            <Route path="*" element={<h1>404 - Trang KFC không tồn tại</h1>} />
                        </>
                    )}
                </Route>
            </Routes>
            
            {/* Nút Toggle Layout */}
            <button
                className={styles.toggleButton}
                onClick={handleToggleLayout}
                style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}
            >
                Toggle Layout ({layout === 'romdol' ? 'Romdol' : 'KFC'})
            </button>
        </>
    );
}

// Hàm App Wrapper
function App() {
    return (
        <BrowserRouter>
            <LayoutManager />
        </BrowserRouter>
    );
}

export default App;