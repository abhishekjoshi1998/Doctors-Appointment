import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/authSlice';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h2>Welcome, {user?.name}</h2>
      <p>Your Role: {user?.role}</p>
      <h3>This is your dashboard.</h3>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
