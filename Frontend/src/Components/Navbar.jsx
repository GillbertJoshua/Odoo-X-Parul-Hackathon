import { Compass, Bell, Menu, LogOut, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg glass-navbar fixed-top py-2 shadow-sm">
      <div className="container-fluid px-4">
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2 fw-bold fs-3">
          <div className="bg-primary rounded-3 p-2 d-flex align-items-center justify-content-center shadow-sm">
            <Compass className="text-white" size={24} />
          </div>
          <span className="text-dark">Traveloop</span>
        </Link>

        <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <Menu size={24} />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <Link className="nav-link fw-medium px-3" to="/dashboard">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-medium px-3" to="/trips">My Trips</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-medium px-3" to="/search-city">Explore</Link>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-link text-secondary p-2 position-relative">
              <Bell size={20} />
              <span className="position-absolute top-2 start-3 translate-middle p-1 bg-danger border border-light rounded-circle">
                <span className="visually-hidden">New alerts</span>
              </span>
            </button>

            <div className="dropdown">
              <button 
                className="btn btn-light rounded-pill d-flex align-items-center gap-2 border shadow-sm px-3 py-1"
                type="button" 
                data-bs-toggle="dropdown"
              >
                <span className="small fw-semibold text-secondary d-none d-sm-inline">
                  {user?.username || 'User'}
                </span>
                <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center text-white small fw-bold shadow-sm" style={{ width: '32px', height: '32px' }}>
                  {user?.username?.[0]?.toUpperCase() || 'U'}
                </div>
              </button>
              <ul className="dropdown-menu dropdown-menu-end shadow-lg border-0 mt-2 p-2 rounded-3">
                <li>
                  <Link className="dropdown-item rounded-2 py-2 d-flex align-items-center gap-2" to="/profile">
                    <User size={16} /> Profile
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <button onClick={handleLogout} className="dropdown-item rounded-2 py-2 d-flex align-items-center gap-2 text-danger">
                    <LogOut size={16} /> Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
