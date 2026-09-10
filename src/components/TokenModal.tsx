import { X, Check, Clock, Users, MapPin, Ticket, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { UserToken } from '../types';

interface Props {
  token: UserToken | null;
  onClose: () => void;
}

export const TokenModal = ({ token, onClose }: Props) => {
  if (!token) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#020617]/80 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative w-full max-w-[480px] rounded-[28px] overflow-hidden bg-gradient-to-b from-[#0F2342] to-[#0A1930] border border-white/10 shadow-2xl animate-[float_0.4s_ease_out]">
        {/* Glow */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl" />

        <div className="relative">
          {/* Header */}
          <div className="flex items-center justify-between p-6 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
                <Check className="w-6 h-6 text-white" strokeWidth={3} />
              </div>
              <div>
                <div className="font-semibold text-white">Successfully Joined!</div>
                <div className="text-xs text-slate-400">Your token is confirmed</div>
              </div>
            </div>
            <button onClick={onClose} className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Ticket */}
          <div className="mx-6 rounded-[20px] bg-white text-navy-900 overflow-hidden relative">
            {/* perforated line */}
            <div className="absolute left-0 right-0 top-[58%] h-px border-t-2 border-dashed border-slate-200" />
            <div className="absolute -left-3 top-[58%] w-6 h-6 bg-[#0F2342] rounded-full -translate-y-1/2" />
            <div className="absolute -right-3 top-[58%] w-6 h-6 bg-[#0F2342] rounded-full -translate-y-1/2" />

            <div className="p-6 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold tracking-widest">
                <Ticket className="w-3.5 h-3.5" /> DIGITAL TOKEN
              </div>
              
              <div className="mt-4">
                <div className="text-xs tracking-[0.2em] text-slate-500 font-semibold">YOUR TOKEN NUMBER</div>
                <div className="font-display font-bold text-[56px] leading-none tracking-tight text-slate-900 mt-2">#{token.tokenNumber}</div>
                <div className="inline-flex items-center gap-2 mt-3 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  Waiting • Counter {token.counterNo}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-6 pt-6">
                <div className="text-center">
                  <div className="text-[11px] tracking-widest text-slate-500 font-semibold">NOW SERVING</div>
                  <div className="font-mono font-bold text-lg text-slate-900">#{token.currentToken}</div>
                </div>
                <div className="text-center border-x border-slate-100">
                  <div className="text-[11px] tracking-widest text-slate-500 font-semibold">AHEAD</div>
                  <div className="font-mono font-bold text-lg text-slate-900">{token.peopleAhead}</div>
                </div>
                <div className="text-center">
                  <div className="text-[11px] tracking-widest text-slate-500 font-semibold">EST. WAIT</div>
                  <div className="font-mono font-bold text-lg text-slate-900">{token.estimatedWait}m</div>
                </div>
              </div>
            </div>

            <div className="px-6 pb-6">
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4">
                <div className="font-semibold text-slate-900 text-sm">{token.queueName}</div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1"><MapPin className="w-3.5 h-3.5" />{token.location}</div>
                <div className="flex items-center gap-4 mt-3 text-xs">
                  <span className="flex items-center gap-1.5 text-slate-600"><Clock className="w-3.5 h-3.5" /> Joined {new Date(token.joinedAt).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</span>
                  <span className="flex items-center gap-1.5 text-slate-600"><Users className="w-3.5 h-3.5" /> {token.category}</span>
                </div>
              </div>
              
              {/* Barcode fake */}
              <div className="mt-4 flex justify-center">
                <div className="flex gap-[2px] items-end h-8">
                  {Array.from({length: 32}).map((_, i) => (
                    <div key={i} className="bg-slate-900" style={{ width: Math.random() > 0.5 ? '3px' : '1.5px', height: `${12 + Math.random()*20}px` }} />
                  ))}
                </div>
              </div>
              <div className="text-center text-[10px] tracking-[0.3em] text-slate-400 mt-1 font-mono">QE-{token.tokenNumber.toString().padStart(4,'0')}-{token.queueId.toUpperCase()}</div>
            </div>
          </div>

          {/* Info */}
          <div className="mx-6 mt-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 p-4 flex gap-3">
            <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-sm leading-relaxed">
              <div className="font-semibold text-cyan-200">Smart Tip</div>
              <div className="text-cyan-100/70 text-xs mt-0.5">We’ll notify you when you’re 3 tokens away. No need to stand in line — arrive 5 minutes before your turn.</div>
            </div>
          </div>

          <div className="p-6 flex gap-3">
            <Link to="/my-queue" onClick={onClose} className="flex-1 py-3.5 rounded-full bg-white text-navy-900 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-cyan-400 transition-colors">
              View My Queue <ArrowRight className="w-4 h-4" />
            </Link>
            <button onClick={onClose} className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/10 transition-colors">
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
