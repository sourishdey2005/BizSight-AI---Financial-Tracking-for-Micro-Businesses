
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { DashboardLayout } from './components/DashboardLayout';
import { Overview } from './pages/dashboard/Overview';
import { Transactions } from './pages/dashboard/Transactions';
import { Inventory } from './pages/dashboard/Inventory';
import { BIAnalytics } from './pages/dashboard/BIAnalytics';
import { AIPredictions } from './pages/dashboard/AIPredictions';
import { Reports } from './pages/dashboard/Reports';
import { BusinessProfile } from './pages/dashboard/BusinessProfile';
import { AdminPanel } from './pages/dashboard/AdminPanel';
import { User, Role } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing token/user in localStorage for JWT flow
    const savedUser = localStorage.getItem('bizsight_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem('bizsight_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('bizsight_user');
  };

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage user={user} />} />
        <Route path="/login" element={!user ? <LoginPage onLogin={login} /> : <Navigate to="/app" />} />
        <Route path="/register" element={!user ? <RegisterPage onRegister={login} /> : <Navigate to="/app" />} />
        
        <Route path="/app" element={user ? <DashboardLayout user={user} onLogout={logout} /> : <Navigate to="/login" />}>
          <Route index element={<Overview />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="analytics" element={<BIAnalytics />} />
          <Route path="ai" element={<AIPredictions />} />
          <Route path="reports" element={<Reports />} />
          <Route path="profile" element={<BusinessProfile />} />
          <Route path="admin" element={user?.role === 'Admin' ? <AdminPanel /> : <Navigate to="/app" />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
