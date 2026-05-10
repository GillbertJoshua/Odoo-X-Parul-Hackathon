import { useState, useEffect } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { 
  Plus, 
  Calendar, 
  MapPin, 
  Clock, 
  MoreHorizontal, 
  ArrowLeft,
  Share2,
  Trash2,
  PlusCircle,
  AlertCircle
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import api from '../utils/api';

const ItineraryBuilder = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState(null);
  const [stops, setStops] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTripData = async () => {
      try {
        const [tripRes, stopsRes] = await Promise.all([
          api.get(`trips/${id}/`),
          api.get(`stops/?trip=${id}`)
        ]);
        setTrip(tripRes.data);
        setStops(stopsRes.data);
      } catch (err) {
        setError('Failed to load itinerary details.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchTripData();
  }, [id]);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="d-flex justify-content-center align-items-center py-5 my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="d-flex flex-column gap-5">
        <section className="d-flex flex-column md:flex-row justify-content-between align-items-md-center gap-4">
          <div className="d-flex align-items-center gap-3">
            <Link to="/dashboard" className="btn btn-light rounded-3 p-2 shadow-sm">
              <ArrowLeft size={20} />
            </Link>
            <div>
              <h1 className="h3 fw-bold mb-1">{trip?.name || 'Trip Itinerary'}</h1>
              <p className="text-secondary small mb-0 d-flex align-items-center gap-2">
                <Calendar size={14} /> 
                {trip ? `${new Date(trip.start_date).toLocaleDateString()} - ${new Date(trip.end_date).toLocaleDateString()}` : 'Dates not set'}
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-outline-secondary d-flex align-items-center gap-2">
              <Share2 size={18} />
              Share
            </button>
            <button className="btn btn-primary d-flex align-items-center gap-2 shadow-sm">
              <PlusCircle size={18} />
              Add Stop
            </button>
          </div>
        </section>

        {error && (
          <div className="alert alert-danger d-flex align-items-center" role="alert">
            <AlertCircle size={18} className="me-2" />
            <div>{error}</div>
          </div>
        )}

        <div className="row g-5">
          <div className="col-12 col-xl-8">
            <div className="d-flex align-items-center justify-content-between mb-4">
              <h2 className="h5 fw-bold mb-0">Trip Stops</h2>
              <span className="badge bg-light text-secondary border">{stops.length} destinations</span>
            </div>

            <div className="d-flex flex-column gap-3 mb-4">
              {stops.length > 0 ? stops.map((stop) => (
                <div key={stop.id} className="card border-0 shadow-sm p-3 bg-white">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-light p-2 rounded-2 text-muted">
                      <MapPin size={20} />
                    </div>
                    <div className="flex-grow-1">
                      <h3 className="h6 fw-bold mb-1">{stop.location_name}</h3>
                      <div className="d-flex align-items-center gap-3 text-secondary" style={{ fontSize: '11px' }}>
                        <span className="d-flex align-items-center gap-1">
                          <Calendar size={12} /> {new Date(stop.arrival_date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div className="d-flex gap-1">
                      <button className="btn btn-sm btn-light text-secondary">
                        <Plus size={16} />
                      </button>
                      <button className="btn btn-sm btn-light text-danger">
                        <Trash2 size={16} />
                      </button>
                      <button className="btn btn-sm btn-light text-secondary">
                        <MoreHorizontal size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              )) : (
                <div className="card border-0 shadow-sm p-5 text-center bg-white border-dashed">
                  <p className="text-secondary mb-0">No stops added yet. Your journey starts here!</p>
                </div>
              )}
            </div>

            <button className="btn btn-outline-primary border-dashed w-100 py-4 d-flex flex-column align-items-center gap-2 rounded-4 transition-all">
              <PlusCircle size={32} />
              <span className="fw-bold">Add a new destination</span>
            </button>
          </div>

          <div className="col-12 col-xl-4">
            <div className="card border-0 shadow-sm p-4 bg-white mb-4">
              <h3 className="h6 fw-bold mb-4 d-flex align-items-center gap-2 text-primary">
                <MapPin size={18} />
                Trip Summary
              </h3>
              <div className="d-flex flex-column gap-3">
                <SummaryItem label="Destinations" value={stops.length} />
                <SummaryItem label="Total Duration" value={trip ? `${Math.ceil((new Date(trip.end_date) - new Date(trip.start_date)) / (1000 * 60 * 60 * 24))} Days` : 'N/A'} />
                <SummaryItem label="Status" value="Planning" />
              </div>
              <div className="mt-4 pt-4 border-top">
                <Link to={`/budget/${id}`} className="btn btn-light w-100 mb-2 fw-bold text-secondary">
                  Budget Breakdown
                </Link>
                <Link to={`/view-itinerary/${id}`} className="btn btn-primary w-100 fw-bold shadow-sm">
                  Preview Full Itinerary
                </Link>
              </div>
            </div>

            <div className="card border-0 shadow-sm p-4 bg-soft-primary text-primary" style={{ backgroundColor: '#e7f1ff' }}>
              <h3 className="h6 fw-bold mb-2 d-flex align-items-center gap-2">
                <PlusCircle size={18} />
                AI Suggestion
              </h3>
              <p className="small mb-3 leading-relaxed opacity-75">
                We noticed a gap in your schedule. How about adding a hidden gem nearby?
              </p>
              <button className="btn btn-primary btn-sm fw-bold">
                View Recommendations
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

const SummaryItem = ({ label, value }) => (
  <div className="d-flex justify-content-between align-items-center">
    <span className="small text-secondary fw-medium">{label}</span>
    <span className="small fw-bold text-dark">{value}</span>
  </div>
);

export default ItineraryBuilder;
