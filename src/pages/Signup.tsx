import { Link, useNavigate } from 'react-router-dom';
import { Clock3, Mail, Lock, User, ArrowRight, Building2, Sparkles, Check } from 'lucide-react';

export const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#020617] flex">
      {/* Left Visual - mirrored */}
      <div className="hidden lg:flex w-[46%] relative overflow-hidden bg-gradient-to-br from-[#0A1930] via-[#0F2342] to-[#14325E] border-r border-white/10">
        <div className="absolute inset-0 mesh-gradient opacity-60" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-violet-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl" />

        <div className="relative flex-1 flex flex-col justify-between p-10">
          <div />
          <div>
            <h2 className="font-display font-bold text-[36px] leading-tight text-white">
              One account.<br />
              <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">Every queue.</span>
            </h2>
            <p className="mt-4 text-slate-300 leading-relaxed max-w-[420px]">Colleges, hospitals, banks — manage all your tokens in one place. Free forever for students.</p>

            <div className="mt-8 space-y-3 max-w-[420px]">
              {[
                'Join any queue in 2 seconds',
                'Live tracking + smart alerts',
                'No paperwork, no standing',
              ].map(item => (
                <div key={item} className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 backdrop-blur border border-white/10 text-white text-sm">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shrink-0"><Check className="w-4 h-4 text-white" /></div>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-white p-4 flex items-center gap-3 max-w-[420px]">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-white font-bold">✓</div>
            <div>
              <div className="text-sm font-bold text-slate-900">Trusted by 120+ institutions</div>
              <div className="text-xs text-slate-500">Including DU, AIIMS, SBI & more</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right - Form */}
      <div className="flex-1 flex flex-col min-h-screen">
        <div className="px-6 lg:px-10 h-[72px] flex items-center justify-between border-b border-white/[0.06] shrink-0">
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

        <div className="flex-1 flex items-center justify-center px-6 py-8">
          <div className="w-full max-w-[440px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-bold tracking-widest">
              <Sparkles className="w-3.5 h-3.5" /> CREATE ACCOUNT • FREE
            </div>
            <h1 className="font-display font-bold text-[32px] leading-tight text-white mt-4">Get started</h1>
            <p className="text-slate-400 mt-2">Create your free account. No card required.</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium text-slate-300">Full name</label>
                  <div className="relative mt-2">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500" />
                    <input placeholder="Aarav Sharma" defaultValue="Aarav Sharma" className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white/[0.06] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/50 text-sm" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-300">Role</label>
                  <div className="relative mt-2">
                    <Building2 className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-500" />
                    <select className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white/[0.06] border border-white/10 text-white focus:outline-none focus:border-cyan-400/50 text-sm appearance-none">
                      <option className="bg-slate-900">Student</option>
                      <option className="bg-slate-900">Patient</option>
                      <option className="bg-slate-900">Customer</option>
                      <option className="bg-slate-900">Staff</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-300">Email address</label>
                <div className="relative mt-2">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input type="email" placeholder="you@college.edu" defaultValue="aarav@email.com" className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white/[0.06] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/50 text-sm" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-300">Password</label>
                <div className="relative mt-2">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                  <input type="password" placeholder="Min. 8 characters" defaultValue="password123" className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white/[0.06] border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/50 text-sm" />
                </div>
                <div className="flex gap-1.5 mt-2">
                  <div className="h-1 flex-1 rounded-full bg-emerald-500" />
                  <div className="h-1 flex-1 rounded-full bg-emerald-500" />
                  <div className="h-1 flex-1 rounded-full bg-emerald-500" />
                  <div className="h-1 flex-1 rounded-full bg-white/10" />
                </div>
                <div className="text-xs text-emerald-400 mt-1 font-medium">Strong password</div>
              </div>

              <label className="flex items-start gap-2.5 text-sm text-slate-400 pt-1 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-white/20 bg-white/10 text-cyan-500 mt-0.5" />
                <span>I agree to the <a href="#" className="text-cyan-400 hover:underline">Terms</a> and <a href="#" className="text-cyan-400 hover:underline">Privacy Policy</a></span>
              </label>

              <button type="submit" className="w-full py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold flex items-center justify-center gap-2 shadow-glow hover:shadow-glow-strong hover:scale-[1.01] transition-all mt-2">
                Create Account <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-center text-sm text-slate-400">
                Already have an account? <Link to="/login" className="font-semibold text-cyan-400 hover:text-cyan-300">Sign in →</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
