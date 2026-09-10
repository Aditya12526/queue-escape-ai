import { useState } from 'react';
import { ShieldCheck, Monitor, SkipForward, Plus, Activity, Users, Clock, AlertTriangle, TrendingUp, Settings, ChevronDown, Ticket, Zap } from 'lucide-react';
import { useQueue } from '../context/QueueContext';
import type { Queue } from '../types';

export const Admin = () => {
  const { queues, nextToken, skipToken, addCounter } = useQueue();
  const [selectedId, setSelectedId] = useState<string>(queues[0]?.id || 'q1');
  const selected: Queue | undefined = queues.find(q => q.id === selectedId);

  const waiting = selected ? selected.totalTokens - selected.currentToken : 0;
  const progress = selected ? (selected.currentToken / selected.totalTokens) * 100 : 0;

  return (
    <div className="min-h-screen bg-[#020617]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="font-display font-bold text-[26px] lg:text-[30px] leading-none text-white">Admin Dashboard</h1>
              <p className="text-sm text-slate-400 mt-1">Manage queues • Control tokens • Monitor counters</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> SYSTEM LIVE
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F2342] border border-white/10 text-white text-sm">
              <img src="https://i.pravatar.cc/100?img=15" alt="" className="w-7 h-7 rounded-full" />
              Admin • College Office
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6">
          <div className="rounded-2xl bg-[#0F2342]/60 backdrop-blur border border-white/10 p-4">
            <div className="flex items-center justify-between">
              <div className="text-xs tracking-widest text-slate-400 font-semibold">TOTAL QUEUES</div>
              <div className="w-8 h-8 rounded-xl bg-violet-500/15 flex items-center justify-center"><Monitor className="w-4 h-4 text-violet-400" /></div>
            </div>
            <div className="font-display font-bold text-2xl text-white mt-2">{queues.length}</div>
            <div className="text-xs text-slate-400 mt-1">{queues.filter(q => q.isOpen).length} open</div>
          </div>
          <div className="rounded-2xl bg-[#0F2342]/60 backdrop-blur border border-white/10 p-4">
            <div className="flex items-center justify-between">
              <div className="text-xs tracking-widest text-slate-400 font-semibold">PEOPLE WAITING</div>
              <div className="w-8 h-8 rounded-xl bg-amber-500/15 flex items-center justify-center"><Users className="w-4 h-4 text-amber-400" /></div>
            </div>
            <div className="font-display font-bold text-2xl text-white mt-2">{queues.reduce((acc,q)=>acc+q.totalTokens-q.currentToken,0)}</div>
            <div className="text-xs text-amber-400 mt-1 flex items-center gap-1"><TrendingUp className="w-3 h-3" /> +12 today</div>
          </div>
          <div className="rounded-2xl bg-[#0F2342]/60 backdrop-blur border border-white/10 p-4">
            <div className="flex items-center justify-between">
              <div className="text-xs tracking-widest text-slate-400 font-semibold">AVG WAIT</div>
              <div className="w-8 h-8 rounded-xl bg-cyan-500/15 flex items-center justify-center"><Clock className="w-4 h-4 text-cyan-400" /></div>
            </div>
            <div className="font-display font-bold text-2xl text-white mt-2">~14m</div>
            <div className="text-xs text-emerald-400 mt-1">↓ 64% vs manual</div>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-emerald-600/20 to-teal-600/20 backdrop-blur border border-emerald-500/20 p-4">
            <div className="flex items-center justify-between">
              <div className="text-xs tracking-widest text-emerald-300 font-semibold">COUNTERS</div>
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center"><Activity className="w-4 h-4 text-emerald-400" /></div>
            </div>
            <div className="font-display font-bold text-2xl text-white mt-2">{queues.reduce((acc,q)=>acc+q.counters,0)}</div>
            <div className="text-xs text-emerald-300 mt-1">Active</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 mt-6">
          {/* Queue list */}
          <div className="lg:col-span-4">
            <div className="rounded-[20px] bg-[#0F2342]/60 backdrop-blur border border-white/10 overflow-hidden">
              <div className="p-5 border-b border-white/5 flex items-center justify-between">
                <h3 className="font-semibold text-white flex items-center gap-2"><Settings className="w-4 h-4 text-slate-400" /> Queues</h3>
                <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 font-mono">{queues.length} total</span>
              </div>
              <div className="p-2 space-y-2 max-h-[520px] overflow-auto">
                {queues.map(q => {
                  const isSelected = selectedId === q.id;
                  const wait = q.totalTokens - q.currentToken;
                  return (
                    <button
                      key={q.id}
                      onClick={() => setSelectedId(q.id)}
                      className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center gap-3 ${isSelected ? 'bg-white text-navy-900 border-white shadow-lg' : 'bg-white/[0.04] hover:bg-white/[0.07] border-white/5 text-white'}`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0 ${isSelected ? 'bg-slate-900 text-white' : `bg-gradient-to-br ${q.color} text-white`}`}>{q.icon}</div>
                      <div className="flex-1 min-w-0">
                        <div className={`font-semibold text-sm leading-tight truncate ${isSelected ? 'text-navy-900' : 'text-white'}`}>{q.name}</div>
                        <div className={`text-xs truncate ${isSelected ? 'text-slate-600' : 'text-slate-400'}`}>{q.location}</div>
                        <div className="flex items-center gap-2 mt-1.5">
                          <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${isSelected ? 'bg-slate-900 text-white' : 'bg-white/10 text-slate-300'}`}>#{q.currentToken} → #{q.totalTokens}</span>
                          <span className={`w-1.5 h-1.5 rounded-full ${q.isOpen ? 'bg-emerald-500' : 'bg-red-500'}`} />
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className={`font-bold leading-none ${isSelected ? 'text-navy-900' : 'text-white'}`}>{wait}</div>
                        <div className={`text-[11px] ${isSelected ? 'text-slate-500' : 'text-slate-400'}`}>waiting</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Control panel */}
          <div className="lg:col-span-8 space-y-6">
            {selected && (
              <>
                {/* Current */}
                <div className="rounded-[24px] overflow-hidden bg-gradient-to-br from-[#0F2342] to-[#0A1930] border border-white/10 shadow-card">
                  <div className={`h-1 w-full bg-gradient-to-r ${selected.color}`} />
                  <div className="p-6 lg:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="flex gap-4">
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${selected.color} flex items-center justify-center text-2xl shadow-lg`}>{selected.icon}</div>
                        <div>
                          <h2 className="font-display font-bold text-xl text-white leading-tight">{selected.name}</h2>
                          <p className="text-sm text-slate-400 mt-1">{selected.location}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${selected.isOpen ? 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20' : 'bg-red-500/15 text-red-300 border-red-500/20'}`}>{selected.isOpen ? '● OPEN' : '● CLOSED'}</span>
                            <span className="text-xs text-slate-400">{selected.counters} counters • Avg {selected.avgWaitMinutes}m / person</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-bold">
                        <AlertTriangle className="w-4 h-4" /> {waiting > 20 ? 'High load' : waiting > 10 ? 'Moderate' : 'Normal flow'}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mt-6">
                      <div className="rounded-2xl bg-white p-4 text-center shadow-xl">
                        <div className="text-[11px] tracking-widest font-bold text-slate-500">NOW SERVING</div>
                        <div className="font-display font-bold text-4xl text-navy-900 mt-1">#{selected.currentToken}</div>
                        <div className="text-xs text-slate-500 mt-1">Counter {Math.floor(Math.random()*selected.counters)+1}</div>
                      </div>
                      <div className="rounded-2xl bg-black/20 border border-white/10 p-4 text-center">
                        <div className="text-[11px] tracking-widest font-bold text-slate-400">NEXT TOKEN</div>
                        <div className="font-display font-bold text-4xl text-white mt-1">#{selected.currentToken + 1}</div>
                        <div className="text-xs text-slate-400 mt-1">Up next</div>
                      </div>
                      <div className="rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-4 text-center shadow-lg">
                        <div className="text-[11px] tracking-widest font-bold text-cyan-100">WAITING</div>
                        <div className="font-display font-bold text-4xl text-white mt-1">{waiting}</div>
                        <div className="text-xs text-cyan-100 mt-1">~{waiting * selected.avgWaitMinutes}m total</div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <div className="flex justify-between text-xs mb-2">
                        <span className="text-slate-400 font-medium flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-amber-400" /> Queue Progress</span>
                        <span className="font-mono text-slate-300">{progress.toFixed(0)}% • {selected.currentToken} / {selected.totalTokens}</span>
                      </div>
                      <div className="h-2.5 rounded-full bg-black/30 overflow-hidden">
                        <div className={`h-full bg-gradient-to-r ${selected.color} transition-all duration-500`} style={{ width: `${progress}%` }} />
                      </div>
                    </div>

                    {/* Controls */}
                    <div className="grid sm:grid-cols-3 gap-3 mt-6">
                      <button
                        onClick={() => nextToken(selected.id)}
                        disabled={selected.currentToken >= selected.totalTokens}
                        className="group flex items-center justify-center gap-2 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 disabled:bg-white/5 disabled:text-slate-500 text-white font-semibold shadow-lg hover:shadow-glow transition-all disabled:cursor-not-allowed"
                      >
                        <Ticket className="w-5 h-5 group-hover:scale-110 transition-transform" /> Next Token
                      </button>
                      <button
                        onClick={() => skipToken(selected.id)}
                        disabled={selected.currentToken >= selected.totalTokens}
                        className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-amber-500 hover:bg-amber-600 disabled:bg-white/5 disabled:text-slate-500 text-white font-semibold shadow-lg transition-all disabled:cursor-not-allowed"
                      >
                        <SkipForward className="w-5 h-5" /> Skip Token
                      </button>
                      <button
                        onClick={() => addCounter(selected.id)}
                        className="flex items-center justify-center gap-2 py-4 rounded-2xl bg-white hover:bg-slate-50 text-navy-900 font-semibold shadow-lg hover:shadow-xl transition-all"
                      >
                        <Plus className="w-5 h-5" /> Add Counter
                      </button>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
                      <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300">Press <span className="font-mono font-bold text-white">Space</span> for Next</span>
                      <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300">Counters: <span className="font-bold text-white">{selected.counters}</span> • Avg stays ~{selected.avgWaitMinutes}m</span>
                    </div>
                  </div>
                </div>

                {/* Recent activity */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="rounded-[20px] bg-[#0F2342]/60 backdrop-blur border border-white/10 p-6">
                    <h3 className="font-semibold text-white flex items-center gap-2"><Activity className="w-4 h-4 text-cyan-400" /> Recent Activity</h3>
                    <div className="mt-4 space-y-3">
                      {[
                        { t: 'Token #'+selected.currentToken+' completed', d: '2 min ago', c: 'bg-emerald-500' },
                        { t: 'Token #'+(selected.currentToken+1)+' called', d: 'Just now', c: 'bg-cyan-500' },
                        { t: 'New token #'+selected.totalTokens+' joined', d: '4 min ago', c: 'bg-violet-500' },
                        { t: 'Counter 2 opened', d: '12 min ago', c: 'bg-amber-500' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full ${item.c} shrink-0`} />
                          <div className="flex-1 min-w-0">
                            <div className="text-sm text-white truncate">{item.t}</div>
                            <div className="text-xs text-slate-500">{item.d}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[20px] bg-[#0F2342]/60 backdrop-blur border border-white/10 p-6">
                    <h3 className="font-semibold text-white flex items-center gap-2"><Users className="w-4 h-4 text-violet-400" /> Counter Load</h3>
                    <div className="mt-4 space-y-3">
                      {Array.from({ length: selected.counters }).map((_, i) => {
                        const load = 40 + Math.random()*50;
                        return (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-sm font-bold text-white">C{i+1}</div>
                            <div className="flex-1">
                              <div className="flex justify-between text-xs mb-1">
                                <span className="text-slate-300 font-medium">Counter {i+1}</span>
                                <span className="font-mono text-slate-400">{load.toFixed(0)}%</span>
                              </div>
                              <div className="h-1.5 rounded-full bg-black/30 overflow-hidden">
                                <div className={`h-full ${load > 80 ? 'bg-red-500' : load > 60 ? 'bg-amber-500' : 'bg-emerald-500'}`} style={{ width: `${load}%` }} />
                              </div>
                            </div>
                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${load > 80 ? 'bg-red-500/15 text-red-300' : 'bg-emerald-500/15 text-emerald-300'}`}>{load > 80 ? 'Busy' : 'Normal'}</span>
                          </div>
                        );
                      })}
                    </div>
                    <button onClick={() => addCounter(selected.id)} className="mt-4 w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium flex items-center justify-center gap-2">
                      <Plus className="w-4 h-4" /> Add Counter to balance load
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-amber-500/5 border border-amber-500/10 p-4 flex gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-sm">
            <div className="font-semibold text-amber-200">Mock Admin • No backend</div>
            <div className="text-amber-100/60 text-xs mt-1">These controls update local mock state only. In production, Next/Skip would sync via WebSocket to all users instantly.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
