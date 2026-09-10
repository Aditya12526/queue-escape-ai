import { Link } from 'react-router-dom';
import { Clock, Users, MapPin, Ticket, BellRing, ArrowRight, Timer, Sparkles, AlertCircle, CheckCircle2, XCircle, Trash2, Navigation } from 'lucide-react';
import { useQueue } from '../context/QueueContext';

export const MyQueue = () => {
  const { myTokens, leaveQueue } = useQueue();
  const activeTokens = myTokens.filter(t => t.status === 'waiting' || t.status === 'serving');
  const pastTokens = myTokens.filter(t => t.status === 'completed' || t.status === 'skipped');

  if (activeTokens.length === 0 && pastTokens.length === 0) {
    return (
      <div className="min-h-[calc(100vh-64px)] bg-[#020617] flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-[560px] text-center">
          <div className="w-20 h-20 rounded-[24px] bg-[#0F2342] border border-white/10 flex items-center justify-center mx-auto">
            <Ticket className="w-10 h-10 text-slate-500" />
          </div>
          <h1 className="font-display font-bold text-2xl text-white mt-6">No active tokens</h1>
          <p className="text-slate-400 mt-2">You haven't joined any queue yet. Browse available queues and get your digital token instantly.</p>
          <Link to="/dashboard" className="inline-flex items-center gap-2 mt-8 px-8 py-4 rounded-full bg-white text-navy-900 font-semibold shadow-lg hover:bg-cyan-400 transition-colors">
            Browse Queues <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020617]">
      <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="font-display font-bold text-[28px] lg:text-[32px] text-white leading-tight">My Queue</h1>
            <p className="text-slate-400 mt-1 text-sm">Track your tokens live • Get notified before your turn</p>
          </div>
          <Link to="/dashboard" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-colors">
            <Navigation className="w-4 h-4" /> Browse Queues
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mt-6">
          <div className="rounded-2xl bg-[#0F2342]/60 backdrop-blur border border-white/10 p-4">
            <div className="text-xs tracking-widest text-slate-400 font-semibold">ACTIVE TOKENS</div>
            <div className="font-display font-bold text-2xl text-white mt-1">{activeTokens.length}</div>
            <div className="text-xs text-emerald-400 font-medium mt-1 flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live tracking</div>
          </div>
          <div className="rounded-2xl bg-[#0F2342]/60 backdrop-blur border border-white/10 p-4">
            <div className="text-xs tracking-widest text-slate-400 font-semibold">NEXT UP IN</div>
            <div className="font-display font-bold text-2xl text-white mt-1">{activeTokens[0] ? `${activeTokens[0].estimatedWait}m` : '--'}</div>
            <div className="text-xs text-slate-400 mt-1">Estimated</div>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-cyan-500/15 to-blue-600/15 backdrop-blur border border-cyan-500/20 p-4">
            <div className="text-xs tracking-widest text-cyan-300 font-semibold">YOU SAVE</div>
            <div className="font-display font-bold text-2xl text-white mt-1">~38m</div>
            <div className="text-xs text-cyan-200/70 mt-1">Avg today</div>
          </div>
        </div>

        {/* Active tokens */}
        <div className="mt-8 space-y-6">
          {activeTokens.map(token => {
            const isServing = token.status === 'serving';
            const isSoon = token.peopleAhead <= 3 && token.peopleAhead > 0;

            return (
              <div key={token.id} className={`relative overflow-hidden rounded-[24px] border ${isServing ? 'bg-gradient-to-br from-emerald-500/15 via-[#0F2342] to-[#0F2342] border-emerald-500/30' : isSoon ? 'bg-gradient-to-br from-amber-500/10 via-[#0F2342] to-[#0F2342] border-amber-500/20' : 'bg-[#0F2342]/70 backdrop-blur border-white/10'} shadow-card`}>
                {/* Top accent */}
                <div className={`h-1 w-full ${isServing ? 'bg-emerald-500' : isSoon ? 'bg-amber-500' : 'bg-cyan-500'}`} />

                <div className="p-5 sm:p-6 lg:p-7">
                  {/* Alert bar for soon/serving */}
                  {isServing && (
                    <div className="mb-5 flex items-center gap-3 px-4 py-3 rounded-2xl bg-emerald-500 text-white font-semibold text-sm shadow-lg animate-pulse">
                      <BellRing className="w-5 h-5" /> It's your turn! Please proceed to Counter {token.counterNo} now.
                    </div>
                  )}
                  {isSoon && !isServing && (
                    <div className="mb-5 flex items-center gap-3 px-4 py-3 rounded-2xl bg-amber-500 text-navy-900 font-semibold text-sm">
                      <AlertCircle className="w-5 h-5" /> You're {token.peopleAhead} away — start heading to the counter!
                    </div>
                  )}

                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    {/* Token */}
                    <div className="flex gap-5">
                      <div className="hidden sm:flex w-[140px] shrink-0 flex-col items-center justify-center rounded-[20px] bg-white p-5 shadow-xl text-navy-900">
                        <div className="text-[11px] tracking-[0.2em] font-bold text-slate-500">TOKEN</div>
                        <div className="font-display font-bold text-5xl leading-none mt-1">#{token.tokenNumber}</div>
                        <div className={`mt-3 px-3 py-1 rounded-full text-xs font-bold border ${isServing ? 'bg-emerald-500 text-white border-emerald-500' : 'bg-slate-900 text-white border-slate-900'}`}>
                          {isServing ? '● SERVING NOW' : '● WAITING'}
                        </div>
                        <div className="mt-3 flex gap-[2px] h-6">
                          {Array.from({length: 16}).map((_, i) => (
                            <div key={i} className="bg-slate-900" style={{ width: Math.random() > 0.5 ? '2.5px' : '1px', height: `${8 + Math.random()*14}px` }} />
                          ))}
                        </div>
                      </div>

                      <div>
                        {/* Mobile token header */}
                        <div className="sm:hidden flex items-baseline gap-3">
                          <span className="font-display font-bold text-4xl text-white">#{token.tokenNumber}</span>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${isServing ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-navy-900'}`}>{isServing ? 'Serving' : 'Waiting'}</span>
                        </div>

                        <h3 className="font-display font-semibold text-xl text-white mt-1 sm:mt-0">{token.queueName}</h3>
                        <div className="flex items-center gap-1.5 text-sm text-slate-400 mt-1"><MapPin className="w-4 h-4" /> {token.location} • Counter {token.counterNo}</div>

                        <div className="flex flex-wrap gap-2 mt-3">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300"><Clock className="w-3.5 h-3.5" /> Joined {new Date(token.joinedAt).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</span>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300"><Timer className="w-3.5 h-3.5" /> Avg 4m/person</span>
                        </div>

                        <div className="mt-5 flex items-center gap-2 text-xs text-slate-500">
                          <button onClick={() => leaveQueue(token.id)} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-red-500/15 hover:text-red-300 border border-white/10 hover:border-red-500/20 transition-colors">
                            <Trash2 className="w-3.5 h-3.5" /> Leave Queue
                          </button>
                          <span className="hidden sm:inline">• Your barcode: QE-{token.tokenNumber.toString().padStart(4,'0')}-{token.queueId.toUpperCase()}</span>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="lg:w-[340px] shrink-0">
                      <div className="grid grid-cols-3 gap-3">
                        <div className="rounded-2xl bg-black/20 border border-white/5 p-3 text-center">
                          <div className="text-[11px] tracking-widest text-slate-400 font-semibold">NOW SERVING</div>
                          <div className="font-mono font-bold text-xl text-cyan-400 mt-1">#{token.currentToken}</div>
                          <div className="text-[11px] text-slate-500 mt-1">Live</div>
                        </div>
                        <div className="rounded-2xl bg-black/20 border border-white/5 p-3 text-center">
                          <div className="text-[11px] tracking-widest text-slate-400 font-semibold">AHEAD OF YOU</div>
                          <div className="font-mono font-bold text-xl text-white mt-1">{token.peopleAhead}</div>
                          <div className="text-[11px] text-slate-500 mt-1">people</div>
                        </div>
                        <div className="rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-3 text-center shadow-lg">
                          <div className="text-[11px] tracking-widest text-cyan-100 font-semibold">EST. WAIT</div>
                          <div className="font-mono font-bold text-xl text-white mt-1">{token.estimatedWait}<span className="text-sm">m</span></div>
                          <div className="text-[11px] text-cyan-100 mt-1">~ {new Date(Date.now() + token.estimatedWait*60000).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</div>
                        </div>
                      </div>

                      {/* Progress */}
                      <div className="mt-4">
                        <div className="flex justify-between text-xs mb-1.5">
                          <span className="text-slate-400 font-medium">Progress to your turn</span>
                          <span className="font-mono text-slate-300">{Math.max(0, Math.round(((token.currentToken) / token.tokenNumber)*100))}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-black/30 overflow-hidden">
                          <div className={`h-full transition-all duration-700 ${isServing ? 'bg-emerald-500' : isSoon ? 'bg-amber-500' : 'bg-gradient-to-r from-cyan-400 to-blue-600'}`} style={{ width: `${Math.min(100, Math.max(5, (token.currentToken / token.tokenNumber)*100))}%` }} />
                        </div>
                        <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                          <span>Token #{token.currentToken}</span>
                          <span>Your #{token.tokenNumber}</span>
                        </div>
                      </div>

                      <div className="mt-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 p-3 flex gap-2.5">
                        <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <div className="text-xs leading-relaxed text-cyan-100/80">
                          <span className="font-semibold text-cyan-200">Heads up:</span> Leave now if {token.estimatedWait} min works — you'll be notified at 3 tokens away.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Past */}
        {pastTokens.length > 0 && (
          <div className="mt-10">
            <h3 className="font-display font-semibold text-white flex items-center gap-2"><Clock className="w-5 h-5 text-slate-500" /> Past Tokens</h3>
            <div className="mt-4 grid gap-3">
              {pastTokens.map(t => (
                <div key={t.id} className="flex items-center justify-between p-4 rounded-2xl bg-[#0F2342]/40 border border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center font-display font-bold text-navy-900">#{t.tokenNumber}</div>
                    <div>
                      <div className="text-sm font-semibold text-white">{t.queueName}</div>
                      <div className="text-xs text-slate-400">{new Date(t.joinedAt).toLocaleDateString()} • {t.location}</div>
                    </div>
                  </div>
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold ${t.status === 'completed' ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/20' : 'bg-amber-500/15 text-amber-300 border border-amber-500/20'}`}>
                    {t.status === 'completed' ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />} {t.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Help */}
        <div className="mt-8 rounded-2xl bg-white/[0.03] border border-white/5 p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/20 flex items-center justify-center shrink-0"><Users className="w-5 h-5 text-violet-400" /></div>
            <div>
              <div className="text-sm font-semibold text-white">Need help?</div>
              <div className="text-xs text-slate-400 mt-0.5">Show this token at the counter. No print needed — just your phone.</div>
            </div>
          </div>
          <Link to="/dashboard" className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-navy-900 text-sm font-semibold hover:bg-cyan-400 transition-colors">
            Join Another Queue <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
