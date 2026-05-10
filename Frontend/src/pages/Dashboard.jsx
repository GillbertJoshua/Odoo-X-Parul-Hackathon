import { useState, useEffect } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { Plus, Calendar, MapPin, TrendingUp, DollarSign, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import api from '../utils/api';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await api.get('trips/');
        setTrips(response.data);
      } catch (error) {
        console.error('Error fetching trips:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrips();
  }, []);

  return (
    <DashboardLayout>
      <div className="d-flex flex-column gap-5">
        <section className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-4">
          <div>
            <h1 className="h2 fw-bold mb-1">Welcome back, {user?.first_name || user?.username}! 👋</h1>
            <p className="text-secondary mb-0">You have {trips.length} upcoming trips and 3 saved destinations.</p>
          </div>
          <Link to="/create-trip" className="btn btn-primary d-flex align-items-center gap-2 shadow-sm">
            <Plus size={20} />
            Plan New Trip
          </Link>
        </section>

        <section className="row g-4">
          <div className="col-12 col-md-4">
            <StatCard 
              icon={<MapPin className="text-primary" size={24} />}
              label="Total Countries"
              value="12"
              trend="+2 this year"
            />
          </div>
          <div className="col-12 col-md-4">
            <StatCard 
              icon={<Calendar className="text-success" size={24} />}
              label="Days Traveled"
              value="48"
              trend="+15% from 2025"
            />
          </div>
          <div className="col-12 col-md-4">
            <StatCard 
              icon={<DollarSign className="text-info" size={24} />}
              label="Budget Optimization"
              value="94%"
              trend="Top 5% of travelers"
            />
          </div>
        </section>

        <section>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="h4 fw-bold mb-0">Upcoming Trips</h2>
            <Link to="/trips" className="text-primary text-decoration-none small fw-bold d-flex align-items-center gap-1">
              View all trips <ArrowRight size={16} />
            </Link>
          </div>
          
          {loading ? (
            <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : trips.length > 0 ? (
            <div className="row g-4">
              {trips.map((trip) => (
                <div key={trip.id} className="col-12 col-md-6">
                  <TripCard trip={trip} />
                </div>
              ))}
            </div>
          ) : (
            <div className="card border-0 shadow-sm p-5 text-center bg-white">
              <div className="mb-3">
                <MapPin size={48} className="text-muted opacity-50" />
              </div>
              <h3 className="h5 fw-bold">No trips planned yet</h3>
              <p className="text-secondary">Start by creating your first travel itinerary!</p>
              <Link to="/create-trip" className="btn btn-outline-primary mt-2">Get Started</Link>
            </div>
          )}
        </section>

        <section className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="h4 fw-bold mb-0">Recommended for you</h2>
            <Link to="/search-city" className="text-primary text-decoration-none small fw-bold d-flex align-items-center gap-1">
              Explore more <ArrowRight size={16} />
            </Link>
          </div>
          <div className="row g-4">
            <div className="col-12 col-sm-6 col-lg-4">
              <DestinationCard 
                city={{ name: 'Tokyo', country: 'Japan', costIndex: '$$$', popularity: '4.9', image: 'https://images.unsplash.com/photo-1540959733332-e94e1bf3253d?q=80&w=800' }} 
              />
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <DestinationCard 
                city={{ name: 'Paris', country: 'France', costIndex: '$$$', popularity: '4.8', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800' }} 
              />
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <DestinationCard 
                city={{ name: 'Bali', country: 'Indonesia', costIndex: '$', popularity: '4.7', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800' }} 
              />
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  );
};

const StatCard = ({ icon, label, value, trend }) => (
  <div className="card border-0 shadow-sm h-100 p-4 bg-white">
    <div className="d-flex align-items-center gap-3">
      <div className="bg-light rounded-3 p-3 d-flex align-items-center justify-content-center shadow-sm">
        {icon}
      </div>
      <div>
        <p className="text-muted small fw-semibold mb-0">{label}</p>
        <div className="d-flex align-items-baseline gap-2">
          <h4 className="fw-bold mb-0">{value}</h4>
          <span className="badge bg-soft-primary text-primary border-0 small text-uppercase" style={{ fontSize: '10px' }}>{trend}</span>
        </div>
      </div>
    </div>
  </div>
);

const TripCard = ({ trip }) => (
  <Link to={`/itinerary/${trip.id}`} className="text-decoration-none text-dark h-100">
    <div className="card border-0 shadow-sm h-100 overflow-hidden bg-white">
      <div className="position-relative" style={{ height: '200px' }}>
        <img 
          src={trip.cover_photo || 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800'} 
          alt={trip.name} 
          className="w-100 h-100 object-fit-cover"
        />
        <div className="position-absolute bottom-0 start-0 w-100 p-3 bg-gradient-dark">
          <span className="badge bg-primary rounded-pill shadow-sm">
            Trip Details
          </span>
        </div>
      </div>
      <div className="card-body p-4">
        <h3 className="h5 fw-bold mb-2 transition-primary">{trip.name}</h3>
        <div className="d-flex align-items-center gap-3 text-secondary small mb-3">
          <span className="d-flex align-items-center gap-1">
            <Calendar size={14} />
            {new Date(trip.start_date).toLocaleDateString()} - {new Date(trip.end_date).toLocaleDateString()}
          </span>
        </div>
        <p className="card-text text-secondary small line-clamp-2">{trip.description || 'Explore the wonders of ' + trip.name + ' on this exciting journey.'}</p>
      </div>
    </div>
  </Link>
);

const DestinationCard = ({ city }) => (
  <div className="card border-0 shadow-sm h-100 overflow-hidden bg-white">
    <div className="position-relative" style={{ height: '180px' }}>
      <img 
        src={city.image} 
        alt={city.name} 
        className="w-100 h-100 object-fit-cover"
      />
      <div className="position-absolute top-0 end-0 m-3">
        <span className="badge bg-dark bg-opacity-50 backdrop-blur-sm">
          {city.costIndex}
        </span>
      </div>
    </div>
    <div className="card-body p-4">
      <div className="d-flex justify-content-between align-items-start mb-1">
        <h4 className="h6 fw-bold mb-0 transition-primary">{city.name}</h4>
        <div className="d-flex align-items-center gap-1 text-warning small fw-bold">
          <TrendingUp size={14} />
          {city.popularity}
        </div>
      </div>
      <p className="text-secondary small mb-4">{city.country}</p>
      <button className="btn btn-outline-primary w-100 btn-sm fw-bold rounded-2">
        Add to Trip
      </button>
    </div>
  </div>
);

export default Dashboard;
