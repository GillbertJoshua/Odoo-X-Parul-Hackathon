import { useState } from 'react';
import { Compass, Mail, Lock, User, ArrowRight, Globe, AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Auth = ({ mode }) => {
  const navigate = useNavigate();
  const { login, signup } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password_confirm: '',
    first_name: '',
    last_name: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      if (mode === 'signup') {
        if (formData.password !== formData.password_confirm) {
          setError('Passwords do not match');
          setLoading(false);
          return;
        }
        await signup(formData);
      } else {
        await login(formData.username, formData.password);
      }
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.detail || err.response?.data?.message || 'Authentication failed. Please check your credentials.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light py-5">
      <div className="row w-100 justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="text-center mb-4">
            <Link to="/" className="text-decoration-none">
              <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-3 p-3 mb-3 shadow">
                <Compass className="text-white" size={32} />
              </div>
            </Link>
            <h1 className="h3 fw-bold mb-2">
              {mode === 'login' ? 'Welcome back' : 'Create your account'}
            </h1>
            <p className="text-secondary">
              {mode === 'login' ? 'Enter your details to access your trips.' : 'Start your journey with Traveloop today.'}
            </p>
          </div>

          <div className="card border-0 shadow-sm p-4 p-md-5">
            {error && (
              <div className="alert alert-danger d-flex align-items-center" role="alert">
                <AlertCircle size={18} className="me-2" />
                <div>{error}</div>
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              {mode === 'signup' && (
                <>
                  <div className="mb-3">
                    <label className="form-label small text-secondary fw-semibold">Username</label>
                    <div className="input-group">
                      <span className="input-group-text bg-white border-end-0 text-secondary">
                        <User size={18} />
                      </span>
                      <input 
                        type="text" 
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="form-control border-start-0 ps-0" 
                        placeholder="username"
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label small text-secondary fw-semibold">First Name</label>
                      <input 
                        type="text" 
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        className="form-control" 
                        placeholder="John"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label small text-secondary fw-semibold">Last Name</label>
                      <input 
                        type="text" 
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        className="form-control" 
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label small text-secondary fw-semibold">Email Address</label>
                    <div className="input-group">
                      <span className="input-group-text bg-white border-end-0 text-secondary">
                        <Mail size={18} />
                      </span>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control border-start-0 ps-0" 
                        placeholder="name@example.com"
                        required
                      />
                    </div>
                  </div>
                </>
              )}

              {mode === 'login' && (
                <div className="mb-3">
                  <label className="form-label small text-secondary fw-semibold">Username</label>
                  <div className="input-group">
                    <span className="input-group-text bg-white border-end-0 text-secondary">
                      <User size={18} />
                    </span>
                    <input 
                      type="text" 
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="form-control border-start-0 ps-0" 
                      placeholder="username"
                      required
                    />
                  </div>
                </div>
              )}

              <div className="mb-3">
                <div className="d-flex justify-between">
                  <label className="form-label small text-secondary fw-semibold">Password</label>
                </div>
                <div className="input-group">
                  <span className="input-group-text bg-white border-end-0 text-secondary">
                    <Lock size={18} />
                  </span>
                  <input 
                    type="password" 
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="form-control border-start-0 ps-0" 
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              {mode === 'signup' && (
                <div className="mb-4">
                  <label className="form-label small text-secondary fw-semibold">Confirm Password</label>
                  <div className="input-group">
                    <span className="input-group-text bg-white border-end-0 text-secondary">
                      <Lock size={18} />
                    </span>
                    <input 
                      type="password" 
                      name="password_confirm"
                      value={formData.password_confirm}
                      onChange={handleChange}
                      className="form-control border-start-0 ps-0" 
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </div>
              )}

              <button 
                type="submit" 
                disabled={loading}
                className="btn btn-primary w-100 py-2 d-flex align-items-center justify-content-center gap-2"
              >
                {loading ? (
                  <div className="spinner-border spinner-border-sm" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  <>
                    {mode === 'login' ? 'Sign In' : 'Create Account'}
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>
          </div>

          <p className="text-center mt-4 text-secondary">
            {mode === 'login' ? "Don't have an account?" : "Already have an account?"}
            <Link 
              to={mode === 'login' ? '/signup' : '/login'} 
              className="ms-1 fw-bold text-primary text-decoration-none"
            >
              {mode === 'login' ? 'Sign up' : 'Sign in'}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
