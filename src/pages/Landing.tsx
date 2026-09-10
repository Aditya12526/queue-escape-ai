import { Link } from 'react-router-dom';
import { Clock3, ArrowRight, Sparkles, Users, Timer, ShieldCheck, Zap, Building2, Stethoscope, Landmark, Check, Play, Star, TrendingUp, Smartphone, BellRing } from 'lucide-react';

export const Landing = () => {
  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden">
      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#020617]/60 border-b border-white/[0.06]">
        <div className="max-w-[1280px] mx-auto px-6 h-[72px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-glow">
              <Clock3 className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-display font-bold text-[18px] tracking-tight leading-none">QueueEscape<span className="text-cyan-400"> AI</span></div>
              <div className="text-[10px] tracking-[0.18em] text-slate-400 font-semibold">INTELLIGENT QUEUE</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#how" className="hover:text-white transition-colors">How it works</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#places" className="hover:text-white transition-colors">Places</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/login" className="hidden sm:inline-flex px-5 py-2.5 rounded-full text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors">Log in</Link>
            <Link to="/signup" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-navy-900 text-sm font-semibold hover:bg-cyan-400 transition-colors shadow-lg">
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        {/* Glow blobs */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-40 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px]" />

        <div className="relative max-w-[1280px] mx-auto px-6 pt-12 pb-16 lg:pt-20 lg:pb-24">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            {/* Left */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-medium text-cyan-200 backdrop-blur">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.7)] animate-pulse" />
                Live at 120+ locations • Avg wait reduced by 64%
              </div>

              <h1 className="font-display font-bold tracking-tight mt-6 text-[42px] sm:text-[56px] lg:text-[64px] leading-[0.9]">
                <span className="text-white">Don't stand</span><br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">in line.</span><br />
                <span className="text-white">Know when</span><br />
                <span className="text-slate-400">to arrive.</span>
              </h1>

              <p className="mt-6 text-[17px] leading-relaxed text-slate-300 max-w-[560px]">
                The intelligent queue management for <span className="text-white font-medium">colleges, hospitals & banks</span>. Join digitally, track live, and arrive exactly when it's your turn.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Link to="/signup" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-semibold shadow-glow-strong hover:shadow-glow hover:scale-[1.02] transition-all">
                  <Sparkles className="w-5 h-5" />
                  Start for Free
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <button className="inline-flex items-center gap-3 px-7 py-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium backdrop-blur transition-colors">
                  <span className="w-9 h-9 rounded-full bg-white flex items-center justify-center"><Play className="w-4 h-4 text-navy-900 ml-0.5" /></span>
                  Watch 30s demo
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-6 mt-10 pt-8 border-t border-white/5">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${10+i}`} alt="" className="w-10 h-10 rounded-full border-2 border-[#020617] object-cover" />
                  ))}
                  <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-[#020617] flex items-center justify-center text-xs font-bold text-white">+2k</div>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                    <span className="ml-2 text-sm font-bold text-white">4.9/5</span>
                  </div>
                  <div className="text-xs text-slate-400">Loved by 12,000+ students & patients</div>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> No spam • Free forever • No card needed
                </div>
              </div>
            </div>

            {/* Right - Phone Mock */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[360px] lg:max-w-none">
                {/* Phone frame */}
                <div className="relative rounded-[36px] bg-gradient-to-b from-slate-800 to-slate-900 p-2 shadow-2xl border border-white/10">
                  <div className="rounded-[28px] overflow-hidden bg-[#0A1930] border border-white/10">
                    {/* notch */}
                    <div className="h-6 bg-black flex items-center justify-center">
                      <div className="w-20 h-4 rounded-full bg-[#0A1930] border border-white/5" />
                    </div>
                    {/* phone content */}
                    <div className="p-4 space-y-4 bg-gradient-to-b from-[#0F2342] to-[#0A1930]">
                      {/* header */}
                      <div className="flex items-center justify-between">
                        <div className="text-xs font-bold tracking-widest text-cyan-400">LIVE QUEUE</div>
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                      </div>

                      {/* token card */}
                      <div className="rounded-2xl bg-white p-4 text-navy-900 shadow-xl">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] tracking-widest font-bold text-slate-500">YOUR TOKEN</span>
                          <span className="px-2 py-1 rounded-full bg-amber-100 text-amber-700 text-[11px] font-bold">● SERVING SOON</span>
                        </div>
                        <div className="flex items-baseline gap-3 mt-2">
                          <span className="font-display font-bold text-4xl">#31</span>
                          <span className="text-sm text-slate-500">Admissions Office</span>
                        </div>
                        <div className="grid grid-cols-3 gap-3 mt-4">
                          <div className="rounded-xl bg-slate-900 text-white p-2.5 text-center">
                            <div className="text-[10px] tracking-widest text-slate-400">NOW</div>
                            <div className="font-mono font-bold text-lg">#24</div>
                          </div>
                          <div className="rounded-xl bg-slate-50 border border-slate-200 p-2.5 text-center">
                            <div className="text-[10px] tracking-widest text-slate-500">AHEAD</div>
                            <div className="font-mono font-bold text-lg text-slate-900">7</div>
                          </div>
                          <div className="rounded-xl bg-cyan-500 text-white p-2.5 text-center">
                            <div className="text-[10px] tracking-widest text-cyan-100">WAIT</div>
                            <div className="font-mono font-bold text-lg">28m</div>
                          </div>
                        </div>
                        <div className="mt-3 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                          <div className="h-full w-[68%] bg-gradient-to-r from-cyan-500 to-blue-600" />
                        </div>
                      </div>

                      {/* list */}
                      <div className="space-y-2.5">
                        {[
                          { name: 'OPD Consultation', cur: 42, tot: 68, wait: '24m', color: 'from-emerald-600 to-teal-600', icon: '🏥' },
                          { name: 'Fee Payment', cur: 18, tot: 31, wait: '9m', color: 'from-blue-600 to-cyan-600', icon: '💳' },
                        ].map(item => (
                          <div key={item.name} className="rounded-2xl bg-white/5 border border-white/10 p-3 flex items-center gap-3 backdrop-blur">
                            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-lg shrink-0`}>{item.icon}</div>
                            <div className="flex-1 min-w-0">
                              <div className="text-sm font-semibold text-white leading-none">{item.name}</div>
                              <div className="text-xs text-slate-400 mt-1">Now #{item.cur} • {item.wait} wait</div>
                            </div>
                            <div className="px-3 py-1.5 rounded-full bg-white text-navy-900 text-xs font-bold">Join</div>
                          </div>
                        ))}
                      </div>

                      <div className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 p-3.5 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center"><BellRing className="w-5 h-5 text-white" /></div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-white">You're next in 3!</div>
                          <div className="text-xs text-cyan-100">Head to Counter 2 now</div>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center"><ArrowRight className="w-4 h-4 text-blue-600" /></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating cards */}
                <div className="absolute -left-6 top-16 hidden lg:flex items-center gap-3 px-4 py-3 rounded-2xl bg-white shadow-xl border border-slate-100 animate-float">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center"><TrendingUp className="w-5 h-5 text-white" /></div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Wait reduced</div>
                    <div className="font-bold text-slate-900 leading-none">-64%</div>
                  </div>
                </div>
                <div className="absolute -right-6 bottom-20 hidden lg:flex items-center gap-3 px-4 py-3 rounded-2xl bg-[#0F2342] border border-white/10 shadow-xl backdrop-blur animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center"><Users className="w-5 h-5 text-white" /></div>
                  <div>
                    <div className="text-xs text-slate-400">People in queue</div>
                    <div className="font-bold text-white leading-none">247 live</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos */}
      <section className="border-y border-white/[0.06] bg-white/[0.02] backdrop-blur">
        <div className="max-w-[1280px] mx-auto px-6 py-6 flex flex-wrap items-center justify-between gap-6 text-slate-500">
          <span className="text-xs tracking-widest font-bold">TRUSTED BY</span>
          <div className="flex flex-wrap items-center gap-8 lg:gap-12 text-sm font-semibold">
            <span className="flex items-center gap-2"><Building2 className="w-5 h-5" /> Delhi University</span>
            <span className="flex items-center gap-2"><Stethoscope className="w-5 h-5" /> City Care Hospital</span>
            <span className="flex items-center gap-2"><Landmark className="w-5 h-5" /> State Bank</span>
            <span className="flex items-center gap-2"><Building2 className="w-5 h-5" /> IIT • AIIMS • SBI</span>
          </div>
          <span className="text-xs text-slate-400">120+ institutions</span>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="max-w-[1280px] mx-auto px-6 py-16 lg:py-24">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold tracking-widest">
            <Zap className="w-3.5 h-3.5" /> HOW IT WORKS
          </div>
          <h2 className="font-display font-bold text-3xl lg:text-[42px] leading-tight mt-4 text-white">Three taps. Zero waiting.</h2>
          <p className="mt-3 text-slate-400">From joining to being served — everything happens on your phone. No paper, no crowd, no anxiety.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { step: '01', title: 'Browse & Join', desc: 'See live status of every queue — how many ahead, current token, exact wait time. Tap Join to get your digital token instantly.', icon: Smartphone, color: 'from-violet-600 to-indigo-600' },
            { step: '02', title: 'Track Live', desc: 'Watch your token move in real time. Get smart nudges when you’re 5 and 2 tokens away. No need to hover near the counter.', icon: Timer, color: 'from-cyan-600 to-blue-600' },
            { step: '03', title: 'Arrive & Done', desc: 'Walk in exactly when it’s your turn. Show your token, get served. Leave a rating — help the next person plan better.', icon: ShieldCheck, color: 'from-emerald-600 to-teal-600' },
          ].map(card => (
            <div key={card.step} className="group relative rounded-[24px] bg-[#0F2342]/50 backdrop-blur border border-white/[0.06] p-6 lg:p-8 hover:bg-[#0F2342]/80 hover:border-white/15 hover:-translate-y-1 transition-all duration-300">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg`}>
                <card.icon className="w-6 h-6 text-white" />
              </div>
              <div className="absolute top-6 right-8 font-display font-bold text-5xl text-white/[0.04] group-hover:text-white/[0.07] transition-colors">{card.step}</div>
              <h3 className="font-display font-semibold text-xl text-white mt-6">{card.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400 mt-3">{card.desc}</p>
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-cyan-400">
                <span className="w-6 h-px bg-cyan-400/50" /> Step {card.step}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Places */}
      <section id="places" className="bg-[#0A1930]/50 border-y border-white/[0.06] backdrop-blur">
        <div className="max-w-[1280px] mx-auto px-6 py-16 lg:py-20">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-white">Built for every queue</h2>
              <p className="mt-2 text-slate-400 max-w-xl">Whether it's admission season, OPD rush, or Monday at the bank — QueueEscape turns chaos into calm.</p>
            </div>
            <Link to="/dashboard" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-navy-900 font-semibold text-sm hover:bg-cyan-400 transition-colors">
              Explore Live Queues <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'College Admin', desc: 'Admissions, fees, documents, examination — all counters live. Students study instead of standing.', icon: Building2, stats: '18 counters • 4.2k students/day', gradient: 'from-violet-600 via-indigo-600 to-blue-600' },
              { title: 'Hospitals', desc: 'OPD, pharmacy, lab, billing. Patients rest, not wait. Families track from the waiting lounge or home.', icon: Stethoscope, stats: '24 counters • 2.8k patients/day', gradient: 'from-emerald-600 via-teal-600 to-cyan-600' },
              { title: 'Banks', desc: 'Cash, passbook, account services. Peak-hour chaos sorted. Take a token, grab a coffee, come back on time.', icon: Landmark, stats: '32 counters • 5.1k customers/day', gradient: 'from-amber-600 via-orange-600 to-red-600' },
            ].map(place => (
              <div key={place.title} className="relative overflow-hidden rounded-[24px] border border-white/10 p-[1px]">
                <div className={`absolute inset-0 bg-gradient-to-br ${place.gradient} opacity-60`} />
                <div className="relative rounded-[23px] bg-[#020617] p-6 lg:p-8 h-full">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${place.gradient} flex items-center justify-center`}>
                    <place.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-white mt-5">{place.title}</h3>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">{place.desc}</p>
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs font-mono text-slate-500">{place.stats}</span>
                    <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center"><ArrowRight className="w-4 h-4 text-navy-900" /></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-[1280px] mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-bold tracking-widest">
              <Sparkles className="w-3.5 h-3.5" /> WHY QUEUEESCAPE
            </div>
            <h2 className="font-display font-bold text-3xl lg:text-4xl leading-tight mt-4 text-white">More than a token.<br />It's <span className="text-cyan-400">time returned.</span></h2>
            <div className="mt-8 space-y-4">
              {[
                { title: 'Live AI Predictions', desc: 'Estimated wait adjusts with real crowd flow, counters open, and service speed. Not a static number.' },
                { title: 'Smart Notifications', desc: 'Get notified at 5, 3, and 1 token away. Never miss your turn, never wait unnecessarily.' },
                { title: 'Admin Control Room', desc: 'One-click Next / Skip / Add Counter. Staff moves queues faster without the shouting.' },
              ].map(f => (
                <div key={f.title} className="flex gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.06] transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{f.title}</div>
                    <div className="text-sm text-slate-400 mt-1 leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[28px] overflow-hidden bg-gradient-to-br from-[#0F2342] to-[#0A1930] border border-white/10 p-6 lg:p-8 mesh-gradient">
              <div className="flex items-center justify-between">
                <div className="font-semibold text-white">Today's Impact</div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/20 text-emerald-300 text-xs font-bold">LIVE</div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { label: 'Time Saved', value: '1,842h', sub: 'today', trend: '+12%' },
                  { label: 'People Served', value: '3,291', sub: 'queues', trend: '+8%' },
                  { label: 'Avg Wait', value: '11m', sub: 'was 34m', trend: '-64%' },
                  { label: 'Satisfaction', value: '4.9★', sub: 'rating', trend: '2k reviews' },
                ].map(s => (
                  <div key={s.label} className="rounded-2xl bg-black/20 border border-white/5 p-4">
                    <div className="text-xs tracking-widest text-slate-400 font-semibold">{s.label.toUpperCase()}</div>
                    <div className="font-display font-bold text-2xl text-white mt-1">{s.value} <span className="text-sm font-normal text-slate-400">{s.sub}</span></div>
                    <div className="mt-2 inline-flex px-2 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-bold">{s.trend}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-white p-4 flex items-center gap-4">
                <img src="https://i.pravatar.cc/100?img=5" alt="" className="w-12 h-12 rounded-full object-cover" />
                <div className="flex-1">
                  <div className="text-sm font-semibold text-slate-900">"I joined from the library. Reached exactly on time. No standing!"</div>
                  <div className="text-xs text-slate-500 mt-1">Priya • B.Tech 2nd Year • Joined Admissions Queue</div>
                </div>
                <div className="flex text-amber-400">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-amber-400" />)}
                </div>
              </div>
            </div>

            {/* decoration */}
            <div className="absolute -z-10 -top-6 -right-6 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="absolute -z-10 -bottom-6 -left-6 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1280px] mx-auto px-6 pb-16">
        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 p-[1px]">
          <div className="rounded-[31px] bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 p-8 lg:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="font-display font-bold text-3xl lg:text-4xl text-white leading-tight">Ready to escape<br />the queue?</h3>
                <p className="mt-3 text-blue-50 max-w-xl">Join 12,000+ people who never stand in line anymore. Free for students & patients. Setup for institutions in 1 day.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full lg:w-auto">
                <Link to="/signup" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-blue-700 font-bold shadow-xl hover:bg-slate-50 transition-colors">
                  Create Free Account <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/dashboard" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-black/15 backdrop-blur border border-white/20 text-white font-semibold hover:bg-black/25 transition-colors">
                  View Live Demo
                </Link>
              </div>
            </div>
            <div className="relative mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center gap-6 text-sm text-blue-50">
              <span className="flex items-center gap-2"><Check className="w-4 h-4" /> No credit card</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4" /> Mock data • No backend needed</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4" /> Works on any phone</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.06] bg-[#020617]">
        <div className="max-w-[1280px] mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                <Clock3 className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-display font-bold text-white leading-none">QueueEscape AI</div>
                <div className="text-xs text-slate-400">© 2026 QueueEscape AI • Version 1 • Mock Frontend</div>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Help</a>
              <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> All systems operational
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
