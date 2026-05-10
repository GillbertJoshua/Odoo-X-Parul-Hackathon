import { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { Plus, Search, FileText, Pin, MoreVertical, Clock, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const MOCK_NOTES = [
  { id: '1', title: 'Paris Hotel Info', content: 'Hotel de Ville, Room 402. Check-in after 2 PM. Call +33 1 23 45 67 89 if late.', date: 'July 10, 2026', pinned: true },
  { id: '2', title: 'Rome Restaurant Wishlist', content: '1. Da Enzo al 29 (Trastevere)\n2. Roscioli Salumeria\n3. Gelateria dei Gracchi', date: 'July 12, 2026', pinned: false },
  { id: '3', title: 'Train Tickets Note', content: 'Eurail pass is digital. Keep QR code ready. Platform usually announced 15 mins before departure.', date: 'July 14, 2026', pinned: false },
];

const Journal = () => {
  const [search, setSearch] = useState('');

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-8">
        <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Trip Journal & Notes</h1>
            <p className="text-text-secondary">Capture your memories and important details.</p>
          </div>
          <button className="btn-primary flex items-center gap-2">
            <Plus size={18} />
            New Note
          </button>
        </section>

        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search notes..." 
              className="input-field pl-10 py-2 text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white/5 border border-border rounded-lg text-xs font-bold text-white">All Notes</button>
            <button className="px-4 py-2 text-xs font-bold text-text-secondary hover:text-white transition-colors">By City</button>
            <button className="px-4 py-2 text-xs font-bold text-text-secondary hover:text-white transition-colors">Attachments</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {MOCK_NOTES.map((note) => (
            <motion.div 
              key={note.id}
              whileHover={{ y: -4 }}
              className="glass-card p-6 flex flex-col gap-4 relative group"
            >
              {note.pinned && (
                <div className="absolute top-4 right-10 text-accent-cyan">
                  <Pin size={16} fill="currentColor" />
                </div>
              )}
              <div className="absolute top-4 right-4 text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                <MoreVertical size={18} />
              </div>
              
              <div className="flex items-center gap-2 text-accent-purple mb-1">
                <FileText size={18} />
                <h3 className="font-bold text-lg text-white">{note.title}</h3>
              </div>
              
              <p className="text-sm text-text-secondary leading-relaxed whitespace-pre-wrap flex-1">
                {note.content}
              </p>
              
              <div className="pt-4 border-t border-border flex justify-between items-center text-[10px] uppercase font-bold text-text-secondary tracking-widest">
                <span className="flex items-center gap-1"><Calendar size={12} /> {note.date}</span>
                <span className="flex items-center gap-1"><Clock size={12} /> 10:30 AM</span>
              </div>
            </motion.div>
          ))}

          <button className="border-2 border-dashed border-border rounded-xl flex flex-col items-center justify-center gap-2 text-text-secondary hover:text-accent-cyan hover:border-accent-cyan hover:bg-accent-cyan/5 transition-all p-12">
            <Plus size={32} strokeWidth={1} />
            <span className="font-medium">Add a note</span>
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Journal;
