import { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { MOCK_CITIES, MOCK_ACTIVITIES } from '../data/mockData';
import { Search, Filter, MapPin, Star, Clock, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

const Explore = ({ type }) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-8">
        <section className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="w-full md:max-w-xl relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary w-5 h-5" />
            <input 
              type="text" 
              placeholder={type === 'cities' ? "Search for your next destination..." : "Find things to do..."}
              className="input-field pl-12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button className="btn-secondary flex items-center gap-2 flex-1 md:flex-none justify-center">
              <Filter size={18} />
              Filters
            </button>
            <div className="flex bg-white/5 border border-border rounded-lg p-1">
              <button 
                className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${type === 'cities' ? 'bg-accent-cyan text-background' : 'text-text-secondary hover:text-white'}`}
              >
                Cities
              </button>
              <button 
                className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${type === 'activities' ? 'bg-accent-cyan text-background' : 'text-text-secondary hover:text-white'}`}
              >
                Activities
              </button>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {type === 'cities' ? (
            MOCK_CITIES.map((city) => (
              <CityCard key={city.id} city={city} />
            ))
          ) : (
            MOCK_ACTIVITIES.map((activity) => (
              <ActivityCard key={activity.id} activity={activity} />
            ))
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

const CityCard = ({ city }) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className="glass-card overflow-hidden group"
  >
    <div className="h-48 overflow-hidden relative">
      <img 
        src={city.image} 
        alt={city.name} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute top-3 right-3 px-2 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded text-xs font-bold">
        {city.costIndex}
      </div>
    </div>
    <div className="p-5">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold group-hover:text-accent-cyan transition-colors">{city.name}</h3>
        <div className="flex items-center gap-1 text-sm text-yellow-500 font-bold">
          <Star size={14} fill="currentColor" />
          {city.popularity}
        </div>
      </div>
      <p className="text-sm text-text-secondary mb-6">{city.country}</p>
      <button className="w-full py-2.5 bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 rounded-lg text-sm font-bold hover:bg-accent-cyan hover:text-background transition-all flex items-center justify-center gap-2">
        <Plus size={18} />
        Add to Trip
      </button>
    </div>
  </motion.div>
);

const ActivityCard = ({ activity }) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className="glass-card overflow-hidden group"
  >
    <div className="h-40 overflow-hidden relative">
      <img 
        src={activity.image} 
        alt={activity.name} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute top-3 right-3 px-2 py-1 bg-accent-purple/40 backdrop-blur-md border border-accent-purple/30 rounded text-[10px] font-bold">
        {activity.category}
      </div>
    </div>
    <div className="p-4">
      <h4 className="font-bold mb-3 group-hover:text-accent-cyan transition-colors line-clamp-1">{activity.name}</h4>
      <div className="flex items-center justify-between text-xs text-text-secondary mb-4">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1"><Clock size={12} /> {activity.duration}</span>
          <span className="flex items-center gap-1"><MapPin size={12} /> {activity.city}</span>
        </div>
        <span className="text-white font-bold">${activity.price}</span>
      </div>
      <button className="w-full py-2 bg-white/5 border border-border rounded-lg text-xs font-bold hover:bg-accent-purple hover:border-accent-purple transition-all">
        Book Now
      </button>
    </div>
  </motion.div>
);

export default Explore;
