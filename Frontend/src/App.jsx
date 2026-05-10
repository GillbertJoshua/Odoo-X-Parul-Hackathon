import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import CreateTrip from './pages/CreateTrip';
import ItineraryBuilder from './pages/ItineraryBuilder';
import Explore from './pages/Explore';
import BudgetDashboard from './pages/BudgetDashboard';
import Checklist from './pages/Checklist';
import Journal from './pages/Journal';
import SharedItinerary from './pages/SharedItinerary';
import Profile from './pages/Profile';
import { useAuth } from './context/AuthContext';
import './App.css';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  
  if (!user) {
    return <Navigate to="/login" />;
  }
  
  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Auth mode="login" />} />
        <Route path="/signup" element={<Auth mode="signup" />} />
        <Route path="/view-itinerary/:id" element={<SharedItinerary />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/create-trip" element={<ProtectedRoute><CreateTrip /></ProtectedRoute>} />
        <Route path="/trips" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/itinerary/:id" element={<ProtectedRoute><ItineraryBuilder /></ProtectedRoute>} />
        <Route path="/search-city" element={<ProtectedRoute><Explore type="cities" /></ProtectedRoute>} />
        <Route path="/explore-activities" element={<ProtectedRoute><Explore type="activities" /></ProtectedRoute>} />
        <Route path="/budget/:id" element={<ProtectedRoute><BudgetDashboard /></ProtectedRoute>} />
        <Route path="/checklist/:id" element={<ProtectedRoute><Checklist /></ProtectedRoute>} />
        <Route path="/notes/:id" element={<ProtectedRoute><Journal /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
