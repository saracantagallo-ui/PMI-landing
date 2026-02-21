/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  CheckCircle2, 
  BarChart3, 
  PenTool, 
  Layout, 
  ArrowRight, 
  MessageSquare,
  ShieldCheck, 
  Zap,
  Plus,
  Minus,
  TrendingDown,
  TrendingUp,
  DollarSign
} from "lucide-react";
import { useState, FormEvent, ChangeEvent } from "react";

const LossGraphic = () => (
  <div className="relative w-full aspect-square max-w-md mx-auto bg-brand-dark-blue rounded-3xl overflow-hidden shadow-2xl border border-white/10 p-8 flex flex-col justify-between">
    <div className="flex justify-between items-start">
      <div>
        <div className="text-brand-light-green/50 text-xs font-mono mb-1 uppercase tracking-widest">Performance Index</div>
        <div className="text-3xl font-display text-white font-bold">€ -42.500</div>
      </div>
      <div className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
        <TrendingDown className="w-3 h-3" />
        -18%
      </div>
    </div>
    
    <div className="flex-1 flex items-end gap-2 py-8">
      {[40, 35, 45, 30, 25, 20, 15, 10].map((h, i) => (
        <motion.div 
          key={i}
          initial={{ height: 0 }}
          animate={{ height: `${h}%` }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="flex-1 bg-white/5 rounded-t-sm"
        />
      ))}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
        <motion.path
          d="M 50 150 Q 150 180 250 280 T 350 350"
          fill="none"
          stroke="#ef4444"
          strokeWidth="6"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.circle
          cx="350"
          cy="350"
          r="8"
          fill="#ef4444"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2 }}
        />
      </svg>
    </div>

    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white/5 p-3 rounded-xl border border-white/5">
        <div className="text-white/40 text-[10px] uppercase font-bold mb-1">Conversion Rate</div>
        <div className="text-white font-display font-bold">0.8%</div>
      </div>
      <div className="bg-white/5 p-3 rounded-xl border border-white/5">
        <div className="text-white/40 text-[10px] uppercase font-bold mb-1">Bounce Rate</div>
        <div className="text-white font-display font-bold">92%</div>
      </div>
    </div>
  </div>
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center">
          <span className="text-2xl font-display font-bold text-brand-dark-blue">
            Landing<span className="text-brand-accent-green"> per PMI</span>
          </span>
        </div>
        <div>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-brand-dark-blue text-white px-6 py-2.5 rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
          >
            Contattaci
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white text-brand-dark-blue">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light-green/20 text-brand-accent-green text-xs font-bold uppercase tracking-wider mb-6 border border-brand-light-green/30">
            <TrendingUp className="w-3 h-3" />
            Specialisti in conversione
          </div>
          <h1 className="text-4xl lg:text-6xl leading-[1.1] mb-6 font-display text-brand-dark-blue">
            Una landing page pensata per far arrivare più richieste alla tua azienda.
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
            Progettiamo pagine chiare e orientate all’azione, costruite sulle esigenze reali delle PMI italiane.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-brand-dark-blue text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-2 group"
            >
              Inizia ora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <LossGraphic />
        </motion.div>
      </div>
    </div>
  </section>
);

const TrustBar = () => (
  <section className="py-12 border-y border-white/5 bg-brand-dark-blue">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-center md:justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <Zap className="w-6 h-6 text-brand-light-green" />
          <span className="font-bold text-white/60 uppercase tracking-widest text-xs">Senza complicazioni</span>
        </div>
        <div className="flex items-center gap-3">
          <BarChart3 className="w-6 h-6 text-brand-light-green" />
          <span className="font-bold text-white/60 uppercase tracking-widest text-xs">Risultati misurabili</span>
        </div>
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-6 h-6 text-brand-light-green" />
          <span className="font-bold text-white/60 uppercase tracking-widest text-xs">Supporto diretto</span>
        </div>
      </div>
    </div>
  </section>
);

const Problem = () => (
  <section className="py-24 bg-brand-light-gray">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl lg:text-5xl text-brand-dark-blue mb-8">
            Il tuo sito attuale non sta lavorando per te?
          </h2>
          <div className="space-y-6 mb-12">
            {[
              "Sito vetrina che non converte visitatori in clienti",
              "Poche richieste e zero dati su cui basare le decisioni",
              "Uno strumento che non produce contatti qualificati"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-1 bg-red-100 p-1 rounded-full">
                  <Minus className="w-4 h-4 text-red-600" />
                </div>
                <p className="text-lg text-slate-600 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="p-10 bg-brand-dark-blue rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <DollarSign className="w-32 h-32" />
          </div>
          <p className="text-2xl font-display font-medium leading-snug relative z-10">
            "Il problema non è il sito. Il problema è che non è costruito per vendere."
          </p>
          <div className="mt-8 flex items-center gap-4 text-brand-light-green font-bold uppercase tracking-widest text-xs">
            <div className="w-12 h-1 bg-brand-light-green rounded-full" />
            La dura realtà
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Solution = () => (
  <section className="py-24 bg-brand-light-green">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-3xl lg:text-5xl text-brand-dark-blue mb-6">
        Ti aiutiamo a spiegare meglio cosa fai.
      </h2>
      <p className="text-xl text-brand-dark-blue/80 max-w-3xl mx-auto leading-relaxed font-medium">
        Trasformiamo il tuo sito in una landing page che guida l’utente a contattarti, eliminando il superfluo e puntando dritto al risultato.
      </p>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      title: "Strategy & Copywriting",
      desc: "Analizziamo il tuo mercato per creare messaggi chiari che risuonano con i tuoi clienti ideali.",
      icon: <PenTool className="w-8 h-8" />
    },
    {
      title: "Professional Design",
      desc: "Interfacce moderne e pulite che trasmettono fiducia e professionalità al primo sguardo.",
      icon: <Layout className="w-8 h-8" />
    },
    {
      title: "Performance Tracking",
      desc: "Monitoriamo ogni clic per sapere esattamente cosa funziona e ottimizzare costantemente.",
      icon: <BarChart3 className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-24 bg-brand-dark-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand-light-green/50 hover:bg-white/10 transition-all group">
              <div className="w-16 h-16 bg-brand-light-green/10 rounded-2xl flex items-center justify-center text-brand-light-green mb-6 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-2xl text-white mb-4">{s.title}</h3>
              <p className="text-slate-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-light-green/20 text-brand-accent-green text-xs font-bold uppercase tracking-wider mb-6 border border-brand-light-green/30">
            Chi Siamo
          </div>
          <h2 className="text-3xl lg:text-5xl text-brand-dark-blue mb-8 font-display leading-tight">
            Esperti nel mercato italiano, <br />
            <span className="text-brand-accent-green">partner delle PMI.</span>
          </h2>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              Siamo un'agenzia specializzata nella creazione di landing page ad alta conversione, nata con un obiettivo chiaro: aiutare le piccole e medie imprese italiane a trasformare il traffico web in opportunità reali di business.
            </p>
            <p>
              Conosciamo profondamente le dinamiche del mercato locale e sappiamo che per una PMI ogni contatto conta. Non ci limitiamo a "fare siti", ma costruiamo strumenti di vendita digitali ottimizzati per il pubblico italiano, combinando design moderno, psicologia del consumatore e tracciamento dei dati.
            </p>
            <p className="font-medium text-brand-dark-blue">
              La nostra missione è abbattere le barriere tecniche e fornire soluzioni concrete che portino risultati misurabili fin dal primo giorno.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-8">
            <div>
              <div className="text-4xl font-display font-bold text-brand-dark-blue mb-1">100%</div>
              <div className="text-sm text-slate-400 uppercase font-bold tracking-widest">Focus PMI Italiane</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-brand-dark-blue mb-1">+500</div>
              <div className="text-sm text-slate-400 uppercase font-bold tracking-widest">Landing Create</div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100">
            <img
              src="https://picsum.photos/seed/italy-team/1200/1000"
              alt="Il nostro team al lavoro"
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-light-green/10 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-dark-blue/5 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-brand-light-gray overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <h2 className="text-3xl lg:text-4xl mb-16 text-center text-brand-dark-blue">Cosa dicono le PMI che ci hanno scelto</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            quote: "Finalmente abbiamo una pagina che spiega davvero il nostro valore. Le richieste sono raddoppiate in tre mesi.",
            author: "Marco Rossi",
            role: "Titolare, Officine Meccaniche Rossi"
          },
          {
            quote: "Professionalità e concretezza. Hanno capito subito le nostre esigenze senza perderci in chiacchiere tecniche.",
            author: "Laura Bianchi",
            role: "CEO, Studio Architettura Bianchi"
          },
          {
            quote: "Un investimento che si è ripagato da solo in pochissimo tempo. Il supporto è sempre stato diretto e veloce.",
            author: "Giuseppe Verdi",
            role: "Fondatore, BioFood Italia"
          }
        ].map((t, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => <CheckCircle2 key={i} className="w-4 h-4 text-brand-accent-green fill-brand-accent-green" />)}
            </div>
            <p className="text-lg italic mb-8 text-slate-600">"{t.quote}"</p>
            <div>
              <p className="font-bold text-lg text-brand-dark-blue">{t.author}</p>
              <p className="text-sm text-slate-400 font-medium">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);
  
  const faqs = [
    {
      q: "Quanto tempo ci vuole per avere la mia landing page?",
      a: "Solitamente consegniamo il progetto completo in 15-20 giorni lavorativi, inclusa la fase di strategia e copywriting."
    },
    {
      q: "Devo avere già un sito web?",
      a: "No, possiamo creare la tua landing page anche se non hai ancora un sito. Se ne hai uno, la landing lavorerà in parallelo per massimizzare le conversioni."
    },
    {
      q: "Come misurate i risultati?",
      a: "Installiamo strumenti di tracciamento avanzati (Google Analytics, Hotjar) per monitorare ogni azione dell'utente e fornirti report chiari."
    },
    {
      q: "Qual è il costo del servizio?",
      a: "Ogni progetto è unico. Dopo una prima consulenza gratuita, ti forniremo un preventivo trasparente basato sulle tue reali necessità."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl text-brand-dark-blue mb-12 text-center">Domande Frequenti</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="border border-slate-100 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-brand-light-gray transition-colors"
              >
                <span className="font-bold text-brand-dark-blue">{f.q}</span>
                {open === i ? <Minus className="w-5 h-5 text-brand-accent-green" /> : <Plus className="w-5 h-5 text-slate-300" />}
              </button>
              {open === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="p-6 pt-0 text-slate-500 leading-relaxed border-t border-slate-50"
                >
                  {f.a}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    request: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-brand-dark-blue relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-light-green rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-light-green rounded-full blur-[120px]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl text-white mb-6 font-display">
              Pronto a trasformare il tuo marketing?
            </h2>
            <p className="text-xl text-slate-400 mb-8 max-w-lg">
              Compila il modulo per ricevere una consulenza gratuita. Analizzeremo il tuo progetto e ti proporremo la strategia migliore per la tua PMI.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-brand-light-green">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-white/80 font-medium">Risposta entro 24 ore</span>
              </div>
              <div className="flex items-center gap-3 text-brand-light-green">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-white/80 font-medium">Consulenza tecnica gratuita</span>
              </div>
              <div className="flex items-center gap-3 text-brand-light-green">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-white/80 font-medium">Nessun obbligo di acquisto</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-2xl relative z-10">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-brand-light-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-brand-accent-green" />
                </div>
                <h3 className="text-2xl font-bold text-brand-dark-blue mb-2">Richiesta inviata!</h3>
                <p className="text-slate-500">Ti contatteremo al più presto per fissare la tua consulenza.</p>
                <button 
                  onClick={() => {
                    setStatus('idle');
                    setFormData({ fullName: '', company: '', email: '', phone: '', request: '' });
                  }}
                  className="mt-8 text-brand-accent-green font-bold hover:underline"
                >
                  Invia un'altra richiesta
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {status === 'error' && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium border border-red-100">
                    Si è verificato un errore. Riprova più tardi o contattaci via chat.
                  </div>
                )}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-dark-blue/40 uppercase tracking-widest ml-1">Nome Completo</label>
                    <input 
                      required
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      type="text" 
                      placeholder="Mario Rossi"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-brand-dark-blue focus:ring-2 focus:ring-brand-light-green outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-dark-blue/40 uppercase tracking-widest ml-1">Azienda o P.IVA</label>
                    <input 
                      required
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      type="text" 
                      placeholder="Azienda S.r.l."
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-brand-dark-blue focus:ring-2 focus:ring-brand-light-green outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-dark-blue/40 uppercase tracking-widest ml-1">Email</label>
                    <input 
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email" 
                      placeholder="mario@azienda.it"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-brand-dark-blue focus:ring-2 focus:ring-brand-light-green outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-brand-dark-blue/40 uppercase tracking-widest ml-1">Telefono</label>
                    <input 
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel" 
                      placeholder="+39 333 1234567"
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-brand-dark-blue focus:ring-2 focus:ring-brand-light-green outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-dark-blue/40 uppercase tracking-widest ml-1">La tua richiesta</label>
                  <textarea 
                    required
                    name="request"
                    value={formData.request}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Parlaci del tuo progetto..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3.5 text-brand-dark-blue focus:ring-2 focus:ring-brand-light-green outline-none transition-all placeholder:text-slate-400 resize-none"
                  ></textarea>
                </div>
                <button 
                  disabled={status === 'submitting'}
                  className="w-full bg-brand-dark-blue text-white py-4 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Invia Richiesta
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
                <p className="text-[10px] text-slate-400 text-center leading-relaxed">
                  Inviando il modulo accetti la nostra Privacy Policy. I tuoi dati verranno trattati esclusivamente per rispondere alla tua richiesta.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 bg-white border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-2xl font-display font-bold text-brand-dark-blue">
          Landing<span className="text-brand-accent-green"> per PMI</span>
        </div>
        <div className="text-slate-500 text-sm font-medium">
          © {new Date().getFullYear()} Landing per PMI. Tutti i diritti riservati. P.IVA 01234567890
        </div>
        <div className="flex gap-6 text-sm font-bold text-brand-dark-blue/60">
          <a href="#" className="hover:text-brand-accent-green transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-accent-green transition-colors">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: 'Ciao! Sono l\'assistente virtuale di Landing per PMI. Come posso aiutarti oggi?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const { GoogleGenAI } = await import("@google/genai");
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      
      const response = await ai.models.generateContent({
        model: "gemini-3.1-pro-preview",
        contents: [
          { role: 'user', parts: [{ text: `Sei l'assistente virtuale di "Landing per PMI", un'agenzia italiana che crea landing page ad alta conversione per piccole e medie imprese. Rispondi in modo professionale, cordiale e orientato alla vendita. Ecco la domanda dell'utente: ${userMessage}` }] }
        ],
        config: {
          systemInstruction: "Sei un esperto di marketing digitale e landing page. Il tuo obiettivo è aiutare i visitatori a capire il valore di una landing page professionale e incoraggiarli a contattare l'agenzia.",
        }
      });

      const modelResponse = response.text || "Scusa, si è verificato un errore. Riprova più tardi.";
      setMessages(prev => [...prev, { role: 'model', text: modelResponse }]);
    } catch (error) {
      console.error("ChatBot Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Si è verificato un errore di connessione. Riprova." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden"
        >
          <div className="p-4 bg-brand-dark-blue text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand-light-green rounded-full flex items-center justify-center text-brand-dark-blue">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-sm">Assistente PMI</div>
                <div className="text-[10px] text-brand-light-green flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-brand-light-green rounded-full animate-pulse" />
                  Online
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-lg transition-colors">
              <Minus className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-brand-dark-blue text-white rounded-tr-none' 
                    : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Scrivi un messaggio..."
              className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-brand-light-green outline-none"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-brand-dark-blue text-white p-2 rounded-xl hover:bg-slate-800 transition-colors disabled:opacity-50"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-brand-dark-blue text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform relative group"
      >
        <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-brand-light-green rounded-full border-2 border-white" />
        )}
      </button>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-brand-light-gray selection:bg-brand-light-green selection:text-brand-dark-blue">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <Solution />
        <Services />
        <AboutUs />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}
