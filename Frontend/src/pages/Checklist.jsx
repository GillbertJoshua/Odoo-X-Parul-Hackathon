import { useState } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { PACKING_CATEGORIES } from '../data/mockData';
import { CheckCircle2, Circle, Plus, Trash2, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Checklist = () => {
  const [items, setItems] = useState(() => {
    return PACKING_CATEGORIES.map(cat => ({
      ...cat,
      items: cat.items.map(item => ({ id: Math.random().toString(), text: item, completed: false }))
    }));
  });

  const toggleItem = (catIndex, itemId) => {
    const newItems = [...items];
    const item = newItems[catIndex].items.find(i => i.id === itemId);
    if (item) item.completed = !item.completed;
    setItems(newItems);
  };

  const totalItems = items.reduce((acc, cat) => acc + cat.items.length, 0);
  const completedItems = items.reduce((acc, cat) => acc + cat.items.filter(i => i.completed).length, 0);
  const progress = totalItems === 0 ? 0 : Math.round((completedItems / totalItems) * 100);

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-8">
        <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Packing Checklist</h1>
            <p className="text-text-secondary">European Summer Tour • Don't forget the essentials!</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="btn-secondary flex items-center gap-2">
              <RotateCcw size={18} />
              Reset
            </button>
            <button className="btn-primary flex items-center gap-2">
              <Plus size={18} />
              Add Category
            </button>
          </div>
        </section>

        <div className="glass-card p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-text-secondary">Trip Readiness</span>
            <span className="text-sm font-bold text-accent-cyan">{progress}%</span>
          </div>
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="h-full bg-accent-cyan shadow-accent-cyan"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {items.map((category, catIndex) => (
            <div key={category.name} className="flex flex-col gap-4">
              <div className="flex justify-between items-center px-1">
                <h3 className="font-bold text-lg">{category.name}</h3>
                <span className="text-xs text-text-secondary">{category.items.filter(i => i.completed).length}/{category.items.length}</span>
              </div>
              <div className="glass-card p-4 space-y-2">
                <AnimatePresence>
                  {category.items.map((item) => (
                    <motion.div 
                      key={item.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      className={`flex items-center justify-between p-2 rounded-lg group hover:bg-white/5 transition-colors cursor-pointer ${item.completed ? 'opacity-50' : ''}`}
                      onClick={() => toggleItem(catIndex, item.id)}
                    >
                      <div className="flex items-center gap-3">
                        {item.completed ? (
                          <CheckCircle2 size={20} className="text-accent-cyan" />
                        ) : (
                          <Circle size={20} className="text-text-secondary group-hover:text-white" />
                        )}
                        <span className={`text-sm ${item.completed ? 'line-through' : ''}`}>{item.text}</span>
                      </div>
                      <button className="p-1.5 text-text-secondary hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Trash2 size={14} />
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
                <div className="pt-2">
                  <button className="w-full py-2 flex items-center justify-center gap-2 text-xs text-text-secondary hover:text-white transition-colors border border-dashed border-border rounded-lg hover:border-white/20">
                    <Plus size={14} />
                    Add Item
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Checklist;
