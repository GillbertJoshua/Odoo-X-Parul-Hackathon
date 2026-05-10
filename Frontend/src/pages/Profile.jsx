import { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { User, Mail, Globe, Bell, Shield, LogOut, Camera, Save, Trash2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <DashboardLayout>
      <div className="container-fluid" style={{ maxWidth: '1000px' }}>
        <section className="mb-5">
          <h1 className="h2 fw-bold mb-1">Account Settings</h1>
          <p className="text-secondary">Manage your profile, preferences, and security.</p>
        </section>

        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div className="d-flex flex-column gap-2 mb-4">
              <button 
                onClick={() => setActiveTab('profile')}
                className={`btn text-start d-flex align-items-center gap-3 px-4 py-3 rounded-3 border-0 shadow-sm ${activeTab === 'profile' ? 'btn-primary shadow' : 'btn-white bg-white text-secondary'}`}
              >
                <User size={20} />
                <span className="fw-bold">Profile Info</span>
              </button>
              <button 
                onClick={() => setActiveTab('preferences')}
                className={`btn text-start d-flex align-items-center gap-3 px-4 py-3 rounded-3 border-0 shadow-sm ${activeTab === 'preferences' ? 'btn-primary shadow' : 'btn-white bg-white text-secondary'}`}
              >
                <Globe size={20} />
                <span className="fw-bold">Preferences</span>
              </button>
              <button className="btn btn-white bg-white text-secondary text-start d-flex align-items-center gap-3 px-4 py-3 rounded-3 border-0 shadow-sm shadow-none">
                <Bell size={20} />
                <span className="fw-bold">Notifications</span>
              </button>
              <button className="btn btn-white bg-white text-secondary text-start d-flex align-items-center gap-3 px-4 py-3 rounded-3 border-0 shadow-sm shadow-none">
                <Shield size={20} />
                <span className="fw-bold">Security</span>
              </button>
            </div>
            
            <div className="pt-3 border-top">
              <button onClick={handleLogout} className="btn btn-outline-danger w-100 d-flex align-items-center justify-content-center gap-2 py-2 fw-bold rounded-3">
                <LogOut size={18} />
                Sign Out
              </button>
            </div>
          </div>

          <div className="col-12 col-md-8">
            <div className="card border-0 shadow-sm p-4 bg-white mb-4">
              <div className="d-flex flex-column flex-md-row align-items-center gap-4">
                <div className="position-relative">
                  <div className="bg-primary rounded-4 d-flex align-items-center justify-content-center text-white fw-bold shadow-lg" style={{ width: '100px', height: '100px', fontSize: '2.5rem' }}>
                    {user?.username?.[0]?.toUpperCase() || 'U'}
                  </div>
                  <button className="btn btn-dark btn-sm rounded-circle position-absolute bottom-0 end-0 p-2 shadow">
                    <Camera size={16} />
                  </button>
                </div>
                <div className="text-center text-md-start flex-grow-1">
                  <h3 className="h4 fw-bold mb-1">{user?.first_name} {user?.last_name}</h3>
                  <p className="small text-secondary mb-3">@{user?.username} • Member since 2026</p>
                  <button className="btn btn-light btn-sm fw-bold border shadow-sm px-4 py-2">Update Photo</button>
                </div>
              </div>
            </div>

            <div className="card border-0 shadow-sm p-4 bg-white mb-4">
              <h4 className="h6 fw-bold text-uppercase text-secondary mb-4" style={{ letterSpacing: '0.05em' }}>Personal Information</h4>
              <form className="row g-4">
                <div className="col-md-6">
                  <label className="form-label small fw-bold text-secondary">First Name</label>
                  <input type="text" className="form-control" defaultValue={user?.first_name} />
                </div>
                <div className="col-md-6">
                  <label className="form-label small fw-bold text-secondary">Last Name</label>
                  <input type="text" className="form-control" defaultValue={user?.last_name} />
                </div>
                <div className="col-12">
                  <label className="form-label small fw-bold text-secondary">Email Address</label>
                  <div className="input-group">
                    <span className="input-group-text bg-light text-secondary border-end-0">
                      <Mail size={16} />
                    </span>
                    <input type="email" className="form-control border-start-0 ps-0" defaultValue={user?.email} />
                  </div>
                </div>
                <div className="col-12">
                  <label className="form-label small fw-bold text-secondary">Language Preference</label>
                  <select className="form-select">
                    <option>English (US)</option>
                    <option>French (FR)</option>
                    <option>Japanese (JP)</option>
                    <option>Spanish (ES)</option>
                  </select>
                </div>
                <div className="col-12 pt-2">
                  <button type="submit" className="btn btn-primary px-5 py-2 fw-bold d-flex align-items-center gap-2">
                    <Save size={18} />
                    Save Changes
                  </button>
                </div>
              </form>
            </div>

            <div className="card border-0 shadow-sm p-4 bg-soft-danger text-danger mt-5" style={{ backgroundColor: '#fff5f5' }}>
              <h4 className="h6 fw-bold text-uppercase mb-2" style={{ letterSpacing: '0.05em' }}>Danger Zone</h4>
              <p className="small text-secondary mb-4">Once you delete your account, there is no going back. All your trips and data will be permanently removed.</p>
              <button className="btn btn-outline-danger fw-bold d-flex align-items-center justify-content-center gap-2 px-4 py-2" style={{ maxWidth: '200px' }}>
                <Trash2 size={18} />
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
