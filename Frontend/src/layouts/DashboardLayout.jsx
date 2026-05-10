import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-vh-100 bg-light">
      <Navbar />
      <div className="container-fluid pt-5 mt-4">
        <div className="row">
          <div className="col-lg-2 d-none d-lg-block">
            <Sidebar />
          </div>
          <main className="col-lg-10 col-md-12 p-4 p-md-5">
            <div className="fade-in">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
