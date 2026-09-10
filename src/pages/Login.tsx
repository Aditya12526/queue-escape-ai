import { Link, useNavigate } from 'react-router-dom';
import { Clock3, Mail, Lock, ArrowRight, Eye, ShieldCheck, Sparkles } from 'lucide-react';
import { useState } from 'react';

export const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#020617] flex">
      {/* Left - Form */}
      <div className="flex-1 flex flex-col">
        <div className="px-6 lg:px-10 h-[72px] flex items-center justify-between border-b border-white/[0.06] bg-[#020617]">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-glow">
              <Clock3 className="w-5 h-5 text-white" />
            </div>
            <div className="leading-none">
              <div className="font-display font-bold text-white">QueueEscape<span className="text-cyan-400"> AI</span></div>
              <div className="text-[11px] tracking-widest text-slate-400 font-medium">DON'T STAND IN LINE</div>
            </div>
          </Link>
          <Link to="/" className="text-sm text-slate-400 hover:text-white">← Back to home</Link>
        </div>

        <div className="flex-1 flex items-center justify-center px-6 py-10 lg:py-12">
          <div className="w-full max-w-[420px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5" /> SECURE LOGIN
            </div>
            <h1 className="font-display font-bold text-[32px] leading-tight text-white mt-4">Welcome back</h1>
            <p className="text-slate-400 mt-2">Sign in to manage your queues and tokens.</p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="text-sm font-medium text-slate-300">Email address</label>
                <div className="relative mt-2">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input
                    type="email"
                    defaultValue="aarav@email.com"
                    placeholder="you@college.edu"
                    className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white/[0.06] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/[0.08] transition-colors"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-300">Password</label>
                  <a href="#" className="text-xs font-semibold text-cyan-400 hover:text-cyan-300">Forgot?</a>
                </div>
                <div className="relative mt-2">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    defaultValue="password123"
                    placeholder="••••••••"
                    className="w-full pl-11 pr-11 py-3.5 rounded-2xl bg-white/[0.06] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/[0.08] transition-colors"
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 text-sm text-slate-400 cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-white/20 bg-white/10 text-cyan-500 focus:ring-cyan-500/20" />
                  Remember me
                </label>
                <span className="text-xs text-slate-500">Mock login — no auth needed</span>
              </div>

              <button type="submit" className="w-full py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold flex items-center justify-center gap-2 shadow-glow hover:shadow-glow-strong hover:scale-[1.01] transition-all">
                Sign In <ArrowRight className="w-5 h-5" />
              </button>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center"><div className="w-full h-px bg-white/10" /></div>
                <div className="relative flex justify-center"><span className="px-3 bg-[#020617] text-xs text-slate-500">or continue with</span></div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button type="button" className="py-3 rounded-2xl bg-white text-navy-900 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors">
                  <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="" className="w-5 h-5" /> Google
                </button>
                <button type="button" className="py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-medium text-sm hover:bg-white/10 transition-colors">
                  SSO Login
                </button>
              </div>

              <p className="text-center text-sm text-slate-400 pt-2">
                New to QueueEscape? <Link to="/signup" className="font-semibold text-cyan-400 hover:text-cyan-300">Create account →</Link>
              </p>
            </form>

            <div className="mt-8 rounded-2xl bg-amber-500/10 border border-amber-500/20 p-4 flex gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0"><Sparkles className="w-4 h-4 text-amber-400" /></div>
              <div className="text-xs leading-relaxed text-amber-100/80">
                <span className="font-semibold text-amber-200">Demo Mode:</span> Just click Sign In. No password check — Version 1 uses mock data only.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right - Visual */}
      <div className="hidden lg:flex w-[48%] relative overflow-hidden bg-gradient-to-br from-[#0A1930] via-[#0F2342] to-[#14325E] border-l border-white/10">
        <div className="absolute inset-0 mesh-gradient opacity-60" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />

        <div className="relative flex-1 flex flex-col justify-between p-10">
          <div />
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/10 text-white text-xs font-bold tracking-widest">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> LIVE QUEUES • REAL TIME
            </div>
            <h2 className="font-display font-bold text-[36px] leading-tight text-white mt-6">
              Skip the wait.<br />
              <span className="text-cyan-300">Own your time.</span>
            </h2>
            <p className="mt-4 text-slate-300 leading-relaxed max-w-[420px]">Join queues from anywhere. Track your token live. Get notified when it's your turn.</p>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-[420px]">
              {[
                { k: '12k+', l: 'Active users' },
                { k: '64%', l: 'Less waiting' },
                { k: '4.9★', l: 'Rating' },
              ].map(s => (
                <div key={s.k} className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-4 text-center">
                  <div className="font-display font-bold text-xl text-white">{s.k}</div>
                  <div className="text-xs text-slate-400 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-400">
            <img src="https://i.pravatar.cc/100?img=12" alt="" className="w-8 h-8 rounded-full" />
            <span>"QueueEscape saved me 45 mins at the admin block. Game changer!" — <span className="text-white font-medium">Riya, 3rd Year</span></span>
          </div>
        </div>
      </div>
    </div>
  );
};
