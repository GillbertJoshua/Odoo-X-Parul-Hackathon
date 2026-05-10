import { 
  LayoutDashboard, 
  Map, 
  Search, 
  Briefcase, 
  PieChart, 
  CheckSquare, 
  Settings,
  PlusCircle,
  FileText,
  Clock
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const SidebarLink = ({ to, icon: Icon, children }) => (
  <NavLink 
    to={to} 
    className={({ isActive }) => `
      nav-link d-flex align-items-center gap-3 px-3 py-2 rounded-3 mb-1 transition-all
      ${isActive ? 'bg-primary text-white shadow-sm' : 'text-secondary hover-bg-light'}
    `}
  >
    <Icon size={18} />
    <span className="fw-medium">{children}</span>
  </NavLink>
);

const Sidebar = () => {
  return (
    <aside className="d-none d-lg-flex flex-column bg-white border-end position-fixed h-100 py-4 px-3" style={{ width: '260px', top: '72px', zIndex: 1000 }}>
      <div className="mb-4">
        <p className="text-uppercase small fw-bold text-muted px-3 mb-2" style={{ letterSpacing: '0.05em' }}>Main Menu</p>
        <nav className="nav flex-column">
          <SidebarLink to="/dashboard" icon={LayoutDashboard}>Dashboard</SidebarLink>
          <SidebarLink to="/trips" icon={Map}>My Trips</SidebarLink>
          <SidebarLink to="/create-trip" icon={PlusCircle}>Plan New Trip</SidebarLink>
        </nav>
      </div>

      <div className="mb-4">
        <p className="text-uppercase small fw-bold text-muted px-3 mb-2" style={{ letterSpacing: '0.05em' }}>Explore</p>
        <nav className="nav flex-column">
          <SidebarLink to="/search-city" icon={Search}>City Search</SidebarLink>
          <SidebarLink to="/explore-activities" icon={Clock}>Activities</SidebarLink>
        </nav>
      </div>

      <div className="mb-4">
        <p className="text-uppercase small fw-bold text-muted px-3 mb-2" style={{ letterSpacing: '0.05em' }}>Planning</p>
        <nav className="nav flex-column">
          <SidebarLink to="/itinerary/1" icon={Briefcase}>Itinerary Builder</SidebarLink>
          <SidebarLink to="/budget/1" icon={PieChart}>Budget</SidebarLink>
          <SidebarLink to="/checklist/1" icon={CheckSquare}>Packing List</SidebarLink>
          <SidebarLink to="/notes/1" icon={FileText}>Trip Journal</SidebarLink>
        </nav>
      </div>

      <div className="mt-auto">
        <SidebarLink to="/profile" icon={Settings}>Profile Settings</SidebarLink>
      </div>
    </aside>
  );
};

export default Sidebar;
