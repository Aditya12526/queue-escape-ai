import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Clock3, LayoutDashboard, Ticket, ShieldCheck, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useQueue } from '../context/QueueContext';

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { myTokens } = useQueue();
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const activeTokens = myTokens.filter(t => t.status === 'waiting' || t.status === 'serving').length;

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/my-queue', label: 'My Queue', icon: Ticket, badge: activeTokens },
    { path: '/admin', label: 'Admin', icon: ShieldCheck },
  ];

  const isLanding = location.pathname === '/';
  const isAuth = location.pathname === '/login' || location.pathname === '/signup';

  if (isLanding || isAuth) return null;

  return (
    <nav className="sticky top-0 z-50 glass-strong border-b border-white/[0.06]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[64px]">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-glow">
              <Clock3 className="w-5 h-5 text-white" />
            </div>
            <div className="leading-none">
              <div className="font-display font-bold text-[17px] tracking-tight text-white">QueueEscape<span className="text-cyan-400"> AI</span></div>
              <div className="text-[11px] tracking-widest text-slate-400 font-medium -mt-0.5">DON'T STAND IN LINE</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? 'bg-white text-navy-900 shadow'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <link.icon className="w-4 h-4" />
                {link.label}
                {link.badge ? (
                  <span className={`ml-1 min-w-[20px] h-5 px-1.5 rounded-full text-xs font-bold flex items-center justify-center ${isActive(link.path) ? 'bg-cyan-500 text-white' : 'bg-cyan-500 text-white'}`}>
                    {link.badge}
                  </span>
                ) : null}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-3 pl-3 border-l border-white/10">
              <img src="https://i.pravatar.cc/100?img=8" alt="avatar" className="w-8 h-8 rounded-full object-cover ring-2 ring-white/10" />
              <div className="hidden lg:block text-left leading-tight">
                <div className="text-sm font-semibold text-white">Aarav Sharma</div>
                <div className="text-xs text-slate-400">aarav@email.com</div>
              </div>
            </div>
            <button onClick={() => navigate('/')} className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
              <LogOut className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-white/5 mt-2">
            <div className="flex flex-col gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium ${isActive(link.path) ? 'bg-white text-navy-900' : 'text-slate-300 bg-white/[0.04] border border-white/[0.06]'}`}
                >
                  <span className="flex items-center gap-3"><link.icon className="w-4 h-4" /> {link.label}</span>
                  {link.badge ? <span className="bg-cyan-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{link.badge}</span> : null}
                </Link>
              ))}
              <div className="flex items-center gap-3 px-2 pt-3 mt-2 border-t border-white/5">
                <img src="https://i.pravatar.cc/100?img=8" alt="avatar" className="w-9 h-9 rounded-full" />
                <div>
                  <div className="text-sm font-semibold text-white">Aarav Sharma</div>
                  <div className="text-xs text-slate-400">aarav@email.com</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
