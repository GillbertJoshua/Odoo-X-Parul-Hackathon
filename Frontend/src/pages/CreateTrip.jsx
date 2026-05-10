import { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { Camera, Calendar, ArrowLeft, Info, Sparkles, AlertCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../utils/api';

const CreateTrip = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    start_date: '',
    end_date: '',
    description: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await api.post('trips/', formData);
      navigate(`/itinerary/${response.data.id}`);
    } catch (err) {
      setError(err.response?.data?.detail || 'Failed to create trip. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="container-fluid" style={{ maxWidth: '800px' }}>
        <div className="d-flex align-items-center gap-3 mb-4">
          <Link to="/dashboard" className="btn btn-light rounded-3 p-2 shadow-sm">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="h3 fw-bold mb-0">Plan your next adventure</h1>
        </div>

        {error && (
          <div className="alert alert-danger d-flex align-items-center mb-4" role="alert">
            <AlertCircle size={18} className="me-2" />
            <div>{error}</div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
          <div className="card border-0 shadow-sm p-4 bg-white">
            <div className="mb-4">
              <label className="form-label small fw-bold text-secondary text-uppercase" style={{ letterSpacing: '0.05em' }}>Trip Name</label>
              <input 
                type="text" 
                placeholder="e.g. Summer in Tokyo 2026"
                className="form-control"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
            </div>

            <div className="row g-4 mb-4">
              <div className="col-12 col-md-6">
                <label className="form-label small fw-bold text-secondary text-uppercase flex items-center gap-2" style={{ letterSpacing: '0.05em' }}>
                  <Calendar size={14} /> Start Date
                </label>
                <input 
                  type="date" 
                  className="form-control"
                  value={formData.start_date}
                  onChange={(e) => setFormData({...formData, start_date: e.target.value})}
                  required
                />
              </div>
              <div className="col-12 col-md-6">
                <label className="form-label small fw-bold text-secondary text-uppercase flex items-center gap-2" style={{ letterSpacing: '0.05em' }}>
                  <Calendar size={14} /> End Date
                </label>
                <input 
                  type="date" 
                  className="form-control"
                  value={formData.end_date}
                  onChange={(e) => setFormData({...formData, end_date: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label small fw-bold text-secondary text-uppercase" style={{ letterSpacing: '0.05em' }}>Description (Optional)</label>
              <textarea 
                placeholder="What's the vibe for this trip?"
                className="form-control"
                style={{ minHeight: '120px' }}
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              />
            </div>

            <div className="d-flex flex-column flex-sm-row gap-3">
              <button 
                type="submit" 
                disabled={loading}
                className="btn btn-primary px-5 py-2 fw-bold d-flex align-items-center justify-content-center gap-2"
              >
                {loading ? (
                  <div className="spinner-border spinner-border-sm" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  <>Create Itinerary</>
                )}
              </button>
              <button 
                type="button" 
                className="btn btn-outline-secondary px-4 py-2 fw-bold d-flex align-items-center justify-content-center gap-2"
              >
                <Sparkles size={18} />
                Plan with AI
              </button>
            </div>
          </div>

          <div className="card border-0 shadow-sm bg-white p-3">
            <div className="d-flex align-items-start gap-3">
              <div className="bg-light p-2 rounded-circle">
                <Info size={20} className="text-primary" />
              </div>
              <p className="small text-secondary mb-0 leading-relaxed">
                Don't worry about getting everything perfect now. You can always change the dates, name, and details of your trip later in settings.
              </p>
            </div>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default CreateTrip;
