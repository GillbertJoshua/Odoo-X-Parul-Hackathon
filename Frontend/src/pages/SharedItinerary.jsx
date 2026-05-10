import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Clock, Download, Copy, Share2, Star } from 'lucide-react';

const SharedItinerary = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <section className="mb-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-80 rounded-3xl overflow-hidden mb-8 shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop" 
              alt="Shared Trip" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute bottom-10 left-10 right-10 flex flex-col md:flex-row justify-between items-end gap-6">
              <div>
                <span className="px-3 py-1 bg-accent-cyan text-background text-[10px] font-bold uppercase tracking-widest rounded mb-3 inline-block">Public Itinerary</span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">European Summer Tour</h1>
                <p className="text-text-secondary flex items-center gap-2">
                  <Calendar size={16} /> July 15 - August 05, 2026 • 21 Days • By Jeevs
                </p>
              </div>
              <div className="flex gap-3">
                <button className="btn-primary flex items-center gap-2">
                  <Copy size={18} />
                  Copy Trip
                </button>
                <button className="btn-secondary flex items-center gap-2 bg-white/10">
                  <Download size={18} />
                  Save PDF
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <MapPin size={24} className="text-accent-cyan" />
              The Journey
            </h2>

            <div className="space-y-12 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/5">
              <SharedStop 
                city="Paris, France" 
                days="Days 1-4" 
                description="The city of lights. Focus on Montmartre and Le Marais."
                activities={['Eiffel Tower', 'Louvre Museum', 'Seine River Cruise']}
              />
              <SharedStop 
                city="Rome, Italy" 
                days="Days 5-9" 
                description="Ancient history and incredible carbonara."
                activities={['Colosseum', 'Vatican Museums', 'Trastevere Dinner']}
              />
              <SharedStop 
                city="Florence, Italy" 
                days="Days 10-13" 
                description="Art capital of the world. Tuscany day trips."
                activities={['Uffizi Gallery', 'Ponte Vecchio', 'Wine Tasting']}
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-4">Trip Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-yellow-500">
                    <Star size={16} fill="currentColor" />
                  </div>
                  <span>9.8 Avg. Rating</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-accent-cyan">
                    <Clock size={16} />
                  </div>
                  <span>14 Optimized Routes</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-accent-purple">
                    <Share2 size={16} />
                  </div>
                  <span>Shared 24 times</span>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 border-accent-cyan/20">
              <h3 className="font-bold mb-4">Plan your own trip?</h3>
              <p className="text-sm text-text-secondary mb-6 leading-relaxed">
                Join Traveloop to create your own personalized multi-city itineraries like this one.
              </p>
              <button className="w-full btn-primary">Start Planning Free</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const SharedStop = ({ city, days, description, activities }) => (
  <div className="relative pl-10">
    <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-accent-cyan border-4 border-background shadow-accent-cyan z-10" />
    <div className="flex justify-between items-start mb-2">
      <h3 className="text-xl font-bold text-white">{city}</h3>
      <span className="text-xs font-bold text-accent-cyan uppercase tracking-wider">{days}</span>
    </div>
    <p className="text-sm text-text-secondary mb-4 leading-relaxed">{description}</p>
    <div className="flex flex-wrap gap-2">
      {activities.map((act) => (
        <span key={act} className="px-3 py-1 bg-white/5 border border-border rounded-full text-xs text-text-secondary">
          {act}
        </span>
      ))}
    </div>
  </div>
);

export default SharedItinerary;
