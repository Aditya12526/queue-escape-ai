import type { Queue } from '../types';
import { Clock, Users, Monitor, MapPin, ArrowRight, Zap, Timer } from 'lucide-react';

interface Props {
  queue: Queue;
  onJoin: (id: string) => void;
  isJoined?: boolean;
}

const categoryStyles: Record<string, { badge: string; dot: string }> = {
  College: { badge: 'bg-violet-500/10 text-violet-300 border-violet-500/20', dot: 'bg-violet-500' },
  Hospital: { badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20', dot: 'bg-emerald-500' },
  Bank: { badge: 'bg-amber-500/10 text-amber-300 border-amber-500/20', dot: 'bg-amber-500' },
};

export const QueueCard = ({ queue, onJoin, isJoined }: Props) => {
  const styles = categoryStyles[queue.category] || categoryStyles.College;
  const waiting = queue.totalTokens - queue.currentToken;
  const estimated = waiting * queue.avgWaitMinutes;
  const progress = ((queue.currentToken / queue.totalTokens) * 100).toFixed(0);

  return (
    <div className="group relative overflow-hidden rounded-[20px] bg-[#0F2342]/70 backdrop-blur-xl border border-white/[0.07] hover:border-white/15 hover:bg-[#112A4D]/80 transition-all duration-300 hover:shadow-card hover:-translate-y-1 flex flex-col">
      {/* Gradient accent top */}
      <div className={`h-[3px] w-full bg-gradient-to-r ${queue.color} opacity-80`} />

      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="flex items-start gap-3">
            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${queue.color} flex items-center justify-center text-xl shadow-lg shrink-0`}>
              <span>{queue.icon}</span>
            </div>
            <div>
              <h3 className="font-display font-semibold text-white leading-tight text-[16px]">{queue.name}</h3>
              <div className="flex items-center gap-1.5 mt-1 text-xs text-slate-400">
                <MapPin className="w-3 h-3 shrink-0" />
                <span className="line-clamp-1">{queue.location}</span>
              </div>
            </div>
          </div>
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wider border ${styles.badge} shrink-0`}>
            <span className={`w-1.5 h-1.5 rounded-full ${styles.dot} animate-pulse`} />
            {queue.category.toUpperCase()}
          </span>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="rounded-2xl bg-black/20 border border-white/[0.06] p-3 text-center">
            <div className="text-[11px] tracking-widest text-slate-400 font-semibold">NOW SERVING</div>
            <div className="font-mono font-bold text-xl text-cyan-400 leading-none mt-1">#{queue.currentToken}</div>
            <div className="text-[11px] text-slate-500 mt-1 flex items-center justify-center gap-1"><Timer className="w-3 h-3" /> Live</div>
          </div>
          <div className="rounded-2xl bg-black/20 border border-white/[0.06] p-3 text-center">
            <div className="text-[11px] tracking-widest text-slate-400 font-semibold">WAITING</div>
            <div className="font-mono font-bold text-xl text-white leading-none mt-1">{waiting}</div>
            <div className="text-[11px] text-slate-500 mt-1 flex items-center justify-center gap-1"><Users className="w-3 h-3" /> people</div>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 p-3 text-center">
            <div className="text-[11px] tracking-widest text-cyan-300/80 font-semibold">EST. WAIT</div>
            <div className="font-mono font-bold text-xl text-white leading-none mt-1">{estimated}<span className="text-sm font-normal text-slate-400">m</span></div>
            <div className="text-[11px] text-cyan-300/70 mt-1 flex items-center justify-center gap-1"><Clock className="w-3 h-3" /> avg {queue.avgWaitMinutes}m / person</div>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-slate-400 font-medium flex items-center gap-1.5"><Zap className="w-3 h-3 text-amber-400" /> Queue Progress</span>
            <span className="font-mono text-slate-300">{progress}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-black/30 overflow-hidden">
            <div className={`h-full bg-gradient-to-r ${queue.color} transition-all duration-700`} style={{ width: `${progress}%` }} />
          </div>
          <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
            <span>#{1}</span>
            <span>#{queue.totalTokens}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/[0.06] mt-auto">
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1.5 text-slate-400"><Monitor className="w-3.5 h-3.5" /> {queue.counters} Counters</span>
            <span className={`flex items-center gap-1.5 font-semibold ${queue.isOpen ? 'text-emerald-400' : 'text-red-400'}`}>
              <span className={`w-2 h-2 rounded-full ${queue.isOpen ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]' : 'bg-red-500'}`} />
              {queue.isOpen ? 'Open Now' : 'Closed'}
            </span>
          </div>
          <button
            onClick={() => onJoin(queue.id)}
            disabled={!queue.isOpen || isJoined}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              isJoined
                ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 cursor-default'
                : queue.isOpen
                ? 'bg-white text-navy-900 hover:bg-cyan-400 hover:text-navy-900 shadow-lg hover:shadow-glow'
                : 'bg-white/10 text-slate-500 cursor-not-allowed'
            }`}
          >
            {isJoined ? 'Joined ✓' : 'Join Queue'} {!isJoined && queue.isOpen && <ArrowRight className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};
