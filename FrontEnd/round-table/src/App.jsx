import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Home from './pages/Home';
import Appointments from './pages/Appointments';
import BookAppointment from './pages/BookAppointment';

function App() {
  const { user } = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <nav style={styles.navbar}>
        <h2>Doctor Appointment App</h2>
        <div>
          {!user ? (
            <>
              <Link to="/login" style={styles.link}>Login</Link>
              <Link to="/signup" style={styles.link}>Signup</Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" style={styles.link}>Dashboard</Link>
              {user.role === 'doctor' && (
                <Link to="/appointments" style={styles.link}>Appointments</Link>
              )}
              {user.role === 'user' && (
                <Link to="/book" style={styles.link}>Book Appointment</Link>
              )}
            </>
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard" />} />
        <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/appointments" element={user?.role === 'doctor' ? <Appointments /> : <Navigate to="/login" />} />
        <Route path="/book" element={user?.role === 'user' ? <BookAppointment /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

const styles = {
  navbar: {
    padding: '10px 20px',
    backgroundColor: '#0c7ac0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
  },
  link: {
    marginLeft: '15px',
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  }
};

export default App;
