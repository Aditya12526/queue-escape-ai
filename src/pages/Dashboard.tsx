import { useState } from 'react';
import { Search, SlidersHorizontal, Sparkles, Clock, Users, Activity, TrendingDown } from 'lucide-react';
import { useQueue } from '../context/QueueContext';
import { QueueCard } from '../components/QueueCard';
import { TokenModal } from '../components/TokenModal';
import type { UserToken, QueueCategory } from '../types';

export const Dashboard = () => {
  const { queues, myTokens, joinQueue } = useQueue();
  const [activeCategory, setActiveCategory] = useState<QueueCategory | 'All'>('All');
  const [search, setSearch] = useState('');
  const [activeToken, setActiveToken] = useState<UserToken | null>(null);

  const categories: (QueueCategory | 'All')[] = ['All', 'College', 'Hospital', 'Bank'];

  const filtered = queues.filter(q => {
    const matchCat = activeCategory === 'All' || q.category === activeCategory;
    const matchSearch = q.name.toLowerCase().includes(search.toLowerCase()) || q.location.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const handleJoin = (id: string) => {
    const token = joinQueue(id);
    if (token) setActiveToken(token);
  };

  const isJoined = (queueId: string) => myTokens.some(t => t.queueId === queueId && (t.status === 'waiting' || t.status === 'serving'));

  const stats = {
    totalWaiting: queues.reduce((acc, q) => acc + (q.totalTokens - q.currentToken), 0),
    avgWait: Math.round(queues.filter(q => q.isOpen).reduce((acc, q) => acc + q.avgWaitMinutes, 0) / queues.filter(q => q.isOpen).length),
    openCounters: queues.reduce((acc, q) => acc + q.counters, 0),
  };

  return (
    <div className="min-h-screen bg-[#020617]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold tracking-widest">
              <Activity className="w-3.5 h-3.5" /> LIVE DASHBOARD
            </div>
            <h1 className="font-display font-bold text-[28px] lg:text-[32px] text-white leading-tight mt-3">Available Queues</h1>
            <p className="text-slate-400 mt-1 text-sm lg:text-[15px]">Choose a queue to join. Your token updates in real time.</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#0F2342]/60 backdrop-blur border border-white/10">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-500/20 flex items-center justify-center"><Users className="w-5 h-5 text-cyan-400" /></div>
              <div>
                <div className="text-xs tracking-widest text-slate-400 font-semibold">PEOPLE WAITING</div>
                <div className="font-mono font-bold text-white leading-none">{stats.totalWaiting}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#0F2342]/60 backdrop-blur border border-white/10">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center"><TrendingDown className="w-5 h-5 text-emerald-400" /></div>
              <div>
                <div className="text-xs tracking-widest text-slate-400 font-semibold">AVG. WAIT</div>
                <div className="font-mono font-bold text-white leading-none">~{stats.avgWait} min</div>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#0F2342]/60 backdrop-blur border border-white/10">
              <div className="w-9 h-9 rounded-xl bg-violet-500/15 border border-violet-500/20 flex items-center justify-center"><Clock className="w-5 h-5 text-violet-400" /></div>
              <div>
                <div className="text-xs tracking-widest text-slate-400 font-semibold">OPEN COUNTERS</div>
                <div className="font-mono font-bold text-white leading-none">{stats.openCounters}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-6 flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search queues, locations, services..."
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[#0F2342]/50 backdrop-blur border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/30 focus:bg-[#0F2342]/80 transition-colors text-sm"
            />
          </div>
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#0F2342]/50 backdrop-blur border border-white/10 overflow-x-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-white text-navy-900 shadow'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <button className="hidden lg:inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/[0.04] border border-white/10 text-slate-300 text-sm font-medium hover:bg-white/10 hover:text-white transition-colors">
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </button>
        </div>

        {/* Smart banner */}
        <div className="mt-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-violet-600/10 border border-cyan-500/15 p-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center"><Sparkles className="w-5 h-5 text-white" /></div>
            <div>
              <div className="text-sm font-semibold text-white">AI Tip: Join now, arrive later</div>
              <div className="text-xs text-slate-400">Least crowded right now is <span className="text-cyan-300 font-semibold">Pharmacy • 7 waiting • ~35m</span></div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-slate-300 font-medium">All queues updating live</span>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-6 grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {filtered.map(q => (
            <QueueCard key={q.id} queue={q} onJoin={handleJoin} isJoined={isJoined(q.id)} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-12 text-center py-16 rounded-[24px] bg-[#0F2342]/30 border border-white/5">
            <div className="text-slate-400">No queues found for "{search}"</div>
            <button onClick={() => setSearch('')} className="mt-3 px-5 py-2 rounded-full bg-white text-navy-900 text-sm font-semibold">Clear search</button>
          </div>
        )}

        {/* Footer info */}
        <div className="mt-10 rounded-[20px] bg-[#0F2342]/40 backdrop-blur border border-white/5 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-400">
            <span className="font-semibold text-white">{filtered.length} queues</span> • {queues.filter(q => q.isOpen).length} open now • Updates every 8 seconds
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Mock data • Version 1 • No backend
          </div>
        </div>
      </div>

      <TokenModal token={activeToken} onClose={() => setActiveToken(null)} />
    </div>
  );
};
