import DashboardLayout from '../layouts/DashboardLayout';
import { motion } from 'framer-motion';
import { 
  PieChart as PieChartIcon, 
  BarChart3, 
  DollarSign, 
  TrendingDown, 
  AlertTriangle
} from 'lucide-react';

const BudgetDashboard = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-8">
        <section>
          <h1 className="text-3xl font-bold mb-2">Trip Budget & Analytics</h1>
          <p className="text-text-secondary">Track your spending and optimize your travel costs.</p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <BudgetStat 
            label="Total Budget" 
            value="$4,500" 
            icon={<DollarSign size={20} />} 
            color="accent-cyan"
          />
          <BudgetStat 
            label="Spent so far" 
            value="$1,240" 
            icon={<BarChart3 size={20} />} 
            color="accent-purple"
            trend="-12% vs plan"
            trendColor="text-green-400"
          />
          <BudgetStat 
            label="Remaining" 
            value="$3,260" 
            icon={<TrendingDown size={20} />} 
            color="accent-cyan"
          />
          <BudgetStat 
            label="Avg. Daily" 
            value="$214" 
            icon={<DollarSign size={20} />} 
            color="accent-purple"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 glass-card p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold">Spending by Category</h3>
              <select className="bg-white/5 border border-border rounded-lg px-3 py-1.5 text-xs text-text-secondary outline-none focus:border-accent-cyan">
                <option>All Destinations</option>
                <option>Paris</option>
                <option>Rome</option>
              </select>
            </div>
            
            <div className="space-y-6">
              <CategoryBar name="Stay" amount={2000} spent={600} color="bg-accent-cyan" />
              <CategoryBar name="Transport" amount={1500} spent={400} color="bg-accent-purple" />
              <CategoryBar name="Activities" amount={700} spent={150} color="bg-accent-cyan" />
              <CategoryBar name="Meals" amount={300} spent={90} color="bg-accent-purple" />
            </div>

            <div className="mt-10 p-4 rounded-xl bg-accent-cyan/5 border border-accent-cyan/20 flex items-start gap-3">
              <AlertTriangle className="text-accent-cyan flex-shrink-0" size={20} />
              <p className="text-sm text-text-secondary leading-relaxed">
                <span className="text-white font-bold">Smart Insight:</span> You're currently <span className="text-green-400">under budget</span> on transport. We recommend allocating the saved $120 to a high-end dining experience in Florence!
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="font-bold mb-6 flex items-center gap-2">
                <PieChartIcon size={18} className="text-accent-purple" />
                Budget Allocation
              </h3>
              <div className="aspect-square relative flex items-center justify-center">
                <svg viewBox="0 0 32 32" className="w-full h-full -rotate-90">
                  <circle r="16" cx="16" cy="16" fill="transparent" stroke="rgba(255,255,255,0.05)" strokeWidth="32" />
                  <circle r="16" cx="16" cy="16" fill="transparent" stroke="#00D4FF" strokeWidth="32" strokeDasharray="44 100" />
                  <circle r="16" cx="16" cy="16" fill="transparent" stroke="#7C3AED" strokeWidth="32" strokeDasharray="33 100" strokeDashoffset="-44" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/20 backdrop-blur-sm rounded-full m-8 border border-white/5">
                  <span className="text-xs text-text-secondary">Spent</span>
                  <span className="text-lg font-bold">28%</span>
                </div>
              </div>
              <div className="mt-8 space-y-3">
                <LegendItem color="bg-accent-cyan" label="Stay" percent="44%" />
                <LegendItem color="bg-accent-purple" label="Transport" percent="33%" />
                <LegendItem color="bg-white/10" label="Other" percent="23%" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

const BudgetStat = ({ label, value, icon, color, trend, trendColor }) => (
  <div className="glass-card p-6">
    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${color === 'accent-cyan' ? 'bg-accent-cyan/10 text-accent-cyan' : 'bg-accent-purple/10 text-accent-purple'}`}>
      {icon}
    </div>
    <p className="text-xs text-text-secondary font-medium uppercase tracking-wider mb-1">{label}</p>
    <div className="flex items-baseline justify-between">
      <h4 className="text-2xl font-bold">{value}</h4>
      {trend && <span className={`text-[10px] font-bold ${trendColor}`}>{trend}</span>}
    </div>
  </div>
);

const CategoryBar = ({ name, amount, spent, color }) => {
  const percent = (spent / amount) * 100;
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-end">
        <div>
          <span className="text-sm font-bold">{name}</span>
          <span className="text-xs text-text-secondary ml-2">${spent} of ${amount}</span>
        </div>
        <span className="text-xs font-medium text-text-secondary">{Math.round(percent)}%</span>
      </div>
      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          className={`h-full rounded-full ${color}`} 
        />
      </div>
    </div>
  );
};

const LegendItem = ({ color, label, percent }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <div className={`w-3 h-3 rounded-full ${color}`} />
      <span className="text-xs text-text-secondary">{label}</span>
    </div>
    <span className="text-xs font-bold">{percent}</span>
  </div>
);

export default BudgetDashboard;
