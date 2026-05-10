import { Compass, Globe, Zap, Shield, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Landing = () => {
  return (
    <div className="min-vh-100 bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-5 mt-5 pb-5 px-3 overflow-hidden position-relative bg-light">
        <div className="container py-5 mt-5">
          <div className="text-center position-relative">
            <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-white border shadow-sm mb-4">
              <span className="badge bg-primary rounded-circle p-1 d-inline-block" style={{ width: '8px', height: '8px' }}></span>
              <span className="small fw-bold text-secondary">AI-Powered Travel Planning is Here</span>
            </div>

            <h1 className="display-3 fw-bold mb-4 tracking-tight">
              Plan Less. Explore More.<br />
              <span className="text-primary">Live the Journey.</span>
            </h1>

            <p className="lead text-secondary max-w-2xl mx-auto mb-5">
              The intelligent multi-city travel planner that designs personalized itineraries, manages budgets, and organizes everything in one beautiful dashboard.
            </p>

            <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-3">
              <Link to="/signup" className="btn btn-primary btn-lg px-4 py-3 fw-bold d-flex align-items-center gap-2 shadow">
                Start Planning for Free
                <ChevronRight size={20} />
              </Link>
              <Link to="/dashboard" className="btn btn-outline-secondary btn-lg px-4 py-3 fw-bold">
                View Demo Dashboard
              </Link>
            </div>

            <div className="mt-5 pt-4 position-relative">
              <div className="card border-0 shadow-lg overflow-hidden rounded-4">
                <img 
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070&auto=format&fit=crop" 
                  alt="Product Preview" 
                  className="w-100 object-fit-cover shadow-lg"
                  style={{ maxHeight: '500px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 px-3">
        <div className="container py-5">
          <div className="text-center mb-5 pb-3">
            <h2 className="display-5 fw-bold mb-3">Everything you need for the perfect trip</h2>
            <p className="lead text-secondary">Designed for modern travelers who value time and experience.</p>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-4">
              <FeatureCard 
                icon={<Globe className="text-primary" size={32} />}
                title="Multi-City Optimization"
                description="Our AI finds the most efficient routes and durations for your multi-stop adventures."
              />
            </div>
            <div className="col-12 col-md-4">
              <FeatureCard 
                icon={<Zap className="text-success" size={32} />}
                title="Intelligent Budgeting"
                description="Get real-time cost estimates and track your spending with smart analytics."
              />
            </div>
            <div className="col-12 col-md-4">
              <FeatureCard 
                icon={<Shield className="text-info" size={32} />}
                title="Collaborative Planning"
                description="Share your itineraries with friends and plan together in real-time."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-5 bg-light border-top border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-center gap-5 opacity-50">
            <span className="h4 fw-bold mb-0">AIRBNB</span>
            <span className="h4 fw-bold mb-0">EXPEDIA</span>
            <span className="h4 fw-bold mb-0">BOOKING.COM</span>
            <span className="h4 fw-bold mb-0">SKYSCANNER</span>
            <span className="h4 fw-bold mb-0">TRIPADVISOR</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 px-3">
        <div className="container py-5">
          <div className="card border-0 shadow-lg p-5 text-center bg-primary text-white rounded-4 position-relative overflow-hidden">
            <div className="position-relative z-1 py-4">
              <h2 className="display-5 fw-bold mb-4">Ready to start your next adventure?</h2>
              <p className="lead mb-5 opacity-75">Join 10,000+ travelers planning their dream trips with Traveloop.</p>
              <Link to="/signup" className="btn btn-light btn-lg px-5 py-3 fw-bold text-primary shadow">
                Create Your Free Account
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-5 px-3 border-top bg-white">
        <div className="container py-4">
          <div className="row align-items-center g-4">
            <div className="col-12 col-md-4 text-center text-md-start">
              <Link to="/" className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 text-decoration-none">
                <Compass className="text-primary" size={24} />
                <span className="h4 fw-bold mb-0 text-dark">Traveloop</span>
              </Link>
            </div>
            <div className="col-12 col-md-4 text-center">
              <div className="d-flex justify-content-center gap-4 small text-secondary">
                <a href="#" className="text-decoration-none text-secondary hover-primary">Privacy</a>
                <a href="#" className="text-decoration-none text-secondary hover-primary">Terms</a>
                <a href="#" className="text-decoration-none text-secondary hover-primary">Twitter</a>
                <a href="#" className="text-decoration-none text-secondary hover-primary">Instagram</a>
              </div>
            </div>
            <div className="col-12 col-md-4 text-center text-md-end">
              <p className="small text-secondary mb-0">© 2026 Traveloop Inc. Built for the Hackathon.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="card border-0 shadow-sm p-4 h-100 bg-white transition-up">
    <div className="bg-light rounded-3 p-3 d-inline-flex align-items-center justify-content-center mb-4 shadow-sm" style={{ width: 'fit-content' }}>
      {icon}
    </div>
    <h3 className="h4 fw-bold mb-3">{title}</h3>
    <p className="text-secondary mb-0 leading-relaxed">{description}</p>
  </div>
);

export default Landing;
