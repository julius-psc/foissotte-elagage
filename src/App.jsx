import { useState, useEffect, useRef } from "react";
import {
  Phone,
  MapPin,
  ChevronRight,
  CheckCircle2,
  Leaf,
  ShieldCheck,
  MessageSquare,
  ArrowRight,
  TreePine,
} from "lucide-react";
import "./App.css";

const PHONE_NUMBER = "06 45 32 89 12";
const PHONE_CLEAN = "0645328912";
const WHATSAPP_LINK = "https://wa.me/33645328912";

const IMG = {
  hero:     "/images/hero_premium_1773676804944.png",
  elagage:  "/images/hero.png",
  abattage: "/images/abattage_premium_1773676879064.png",
  taille:   "/images/taille_premium_1773677037197.png",
  chantier: "/images/chantier_premium_1773677461935.png",
  garden:   "/images/hedge.png",
};

function Counter({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let start = 0;
        const ms = 16;
        const steps = duration / ms;
        const step = end / steps;
        const timer = setInterval(() => {
          start += step;
          if (start >= end) { setCount(end); clearInterval(timer); }
          else { setCount(Math.ceil(start)); }
        }, ms);
        observer.disconnect();
        return () => clearInterval(timer);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function App() {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({ description: "", location: "", contact: "" });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formStep < 3) {
      setFormStep((s) => s + 1);
    } else {
      const msg = encodeURIComponent(
        `Bonjour, j'ai besoin d'une intervention : ${formData.description}. Lieu: ${formData.location}. Contact: ${formData.contact}`
      );
      window.open(`${WHATSAPP_LINK}?text=${msg}`, "_blank");
    }
  };

  return (
    <main className="min-h-screen bg-stone-50 text-slate-900 font-sans selection:bg-emerald-800 selection:text-white">

      {/* ── Navbar ── */}
      <nav
        className="fixed w-full z-50 bg-emerald-950/90 backdrop-blur-md border-b border-emerald-900 shadow-sm"
        aria-label="Navigation principale"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <img src="/logo.svg" className="w-11 h-11" alt="" aria-hidden="true" />
            <span className="font-semibold text-xl text-white tracking-tight">M. Foissotte</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-emerald-50 hover:text-emerald-300 transition-colors">Services</a>
            <a href="#devis" className="text-sm font-medium text-emerald-50 hover:text-emerald-300 transition-colors">Devis gratuit</a>
            <a
              href={`tel:${PHONE_CLEAN}`}
              className="bg-emerald-500 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-emerald-400 shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2"
              aria-label={`Appeler le ${PHONE_NUMBER}`}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </nav>

      {/* ── Sticky WhatsApp CTA (mobile) ── */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer noopener"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 bg-emerald-600 text-white rounded-full shadow-xl shadow-emerald-600/30 hover:bg-emerald-500 transition-transform transform hover:scale-105 border border-emerald-500 md:hidden"
        aria-label="Contacter par WhatsApp"
      >
        <MessageSquare className="w-6 h-6" aria-hidden="true" />
      </a>

      {/* ── Hero ── */}
      <section
        className="relative h-screen flex items-center justify-center pt-16 overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 z-0 bg-emerald-950">
          <img
            src={IMG.hero}
            alt="Artisan élagueur grimpeur au travail dans un arbre ensoleillé"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-55 mix-blend-overlay"
            fetchpriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-emerald-950/30" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 mt-10 md:mt-0">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/40 border border-emerald-400/30 text-emerald-100 text-xs font-semibold mb-6 uppercase tracking-widest backdrop-blur-md shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-400" aria-hidden="true" />
            Artisan Grimpeur Certifié
          </div>

          <h1
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6 mt-2 drop-shadow-md"
          >
            Élagage <span className="text-emerald-400">&amp;</span> Abattage{" "}
            <br className="hidden md:block" />
            <span className="text-stone-200">En Toute Sécurité.</span>
          </h1>

          <p className="text-base md:text-xl text-stone-200 font-light max-w-2xl mb-10 leading-relaxed drop-shadow-sm">
            Marcel Foissotte, artisan élagueur grimpeur spécialiste de l&apos;arbre
            et des interventions délicates.{" "}
            <br className="hidden md:block" />
            Élagage, abattage et taille de haies en Normandie et environs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto px-4">
            <a
              href="#devis"
              className="bg-emerald-500 text-white px-8 py-4 rounded-xl text-base font-bold transition-all hover:bg-emerald-400 hover:shadow-xl hover:shadow-emerald-500/20 flex items-center justify-center gap-3 group shadow-lg w-full sm:w-auto"
            >
              Demander un Devis Gratuit
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
            <a
              href={`tel:${PHONE_CLEAN}`}
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl text-base font-medium transition-all hover:bg-white/20 flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Appel Urgent
            </a>
          </div>
        </div>
      </section>

      {/* ── Trust / Stats ── */}
      <section className="bg-stone-50 py-12 relative z-20" aria-label="Chiffres clés">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl shadow-stone-200/50 p-8 md:p-12 -mt-24 relative border border-stone-100">
            <div className="flex flex-col md:flex-row justify-around items-center gap-8 md:gap-4">
              <div className="text-center w-full flex flex-col items-center">
                <div className="text-4xl md:text-5xl font-extrabold text-emerald-800 mb-2">
                  <Counter end={10} suffix="+" />
                </div>
                <div className="text-xs font-bold text-stone-500 uppercase tracking-widest">Ans de Métier</div>
              </div>
              <div className="hidden md:block w-px h-16 bg-stone-200" aria-hidden="true" />
              <div className="text-center w-full flex flex-col items-center">
                <Leaf className="w-10 h-10 text-emerald-500 mb-4" aria-hidden="true" />
                <div className="text-xs font-bold text-stone-500 uppercase tracking-widest">Respect du Végétal</div>
              </div>
              <div className="hidden md:block w-px h-16 bg-stone-200" aria-hidden="true" />
              <div className="text-center w-full flex flex-col items-center">
                <ShieldCheck className="w-10 h-10 text-emerald-500 mb-4" aria-hidden="true" />
                <div className="text-xs font-bold text-stone-500 uppercase tracking-widest">Garantie &amp; Assurance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section id="services" className="py-24 bg-stone-50" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-emerald-600 font-bold tracking-widest text-xs uppercase mb-3 flex justify-center items-center gap-2">
              <Leaf className="w-4 h-4" aria-hidden="true" /> Nos Interventions
            </p>
            <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 font-serif">
              Un Travail d&apos;Orfèvre
            </h2>
            <p className="text-stone-600 text-lg">
              De la taille douce à l&apos;abattage par démontage de sujets dangereux,
              nous maîtrisons toutes les techniques de l&apos;arboriculture moderne.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Service 1 – Élagage */}
            <article className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-300 group">
              <div className="h-52 bg-emerald-950 relative overflow-hidden">
                <img
                  src={IMG.elagage}
                  alt="Grimpeur élagueur en action dans un arbre avec équipement de sécurité"
                  className="absolute inset-0 w-full h-full object-cover object-top opacity-80 group-hover:scale-105 transition-transform duration-700"
                  loading="lazy" decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 to-transparent" />
                <TreePine className="absolute bottom-6 left-6 w-8 h-8 text-emerald-400" aria-hidden="true" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-stone-900 mb-3 font-serif">Élagage &amp; Taille</h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  Taille douce, d&apos;éclaircie ou de sécurisation. Nous adaptons notre intervention
                  à l&apos;essence et à l&apos;état sanitaire de l&apos;arbre.
                </p>
                <ul className="space-y-3">
                  {["Taille sanitaire", "Allègement de charpentières", "Taille de formation"].map((item) => (
                    <li key={item} className="flex items-center text-sm font-medium text-stone-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-3 shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Service 2 – Abattage */}
            <article className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-300 group">
              <div className="h-52 bg-emerald-950 relative overflow-hidden">
                <img
                  src={IMG.abattage}
                  alt="Abattage délicat d'un arbre par démontage avec rétention par câble"
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-85 group-hover:scale-105 transition-transform duration-700"
                  loading="lazy" decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 to-transparent" />
                <ShieldCheck className="absolute bottom-6 left-6 w-8 h-8 text-emerald-400" aria-hidden="true" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-stone-900 mb-3 font-serif">Abattage Délicat</h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  Démontage d&apos;arbres menaçants votre habitation ou réseaux.
                  Maîtrise des techniques de rétention en espace restreint.
                </p>
                <ul className="space-y-3">
                  {["Abattage direct", "Démontage avec rétention", "Essouchage & rognage"].map((item) => (
                    <li key={item} className="flex items-center text-sm font-medium text-stone-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-3 shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            {/* Service 3 – Haies */}
            <article className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-300 group">
              <div className="h-52 bg-emerald-950 relative overflow-hidden">
                <img
                  src={IMG.taille}
                  alt="Taille de haies haute sur échelle par un artisan du végétal"
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-85 group-hover:scale-105 transition-transform duration-700"
                  loading="lazy" decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 to-emerald-950/20" />
                <Leaf className="absolute bottom-6 left-6 w-8 h-8 text-emerald-400" aria-hidden="true" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-stone-900 mb-3 font-serif">Taille de Haies &amp; Entretien</h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  Redonnez une ligne parfaite à votre jardin. Intervention ponctuelle
                  de taille de haies, arbustes et évacuation des déchets.
                </p>
                <ul className="space-y-3">
                  {["Taille de haies toutes hauteurs", "Débroussaillage", "Broyage de branches"].map((item) => (
                    <li key={item} className="flex items-center text-sm font-medium text-stone-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mr-3 shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* ── Why choose us ── */}
      <section
        className="py-20 bg-emerald-950 text-white relative overflow-hidden"
        aria-labelledby="why-heading"
      >
        <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none" aria-hidden="true">
          <TreePine className="w-96 h-96" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-1/2">
              <h2 id="why-heading" className="text-3xl md:text-5xl font-bold font-serif mb-6 leading-tight">
                Intervention rapide <br />
                sur <span className="text-emerald-400">toute la région</span>.
              </h2>
              <p className="text-lg text-emerald-100/70 mb-8 max-w-lg">
                Matériel performant, respect scrupuleux des règles de sécurité et
                un travail soigné du premier coup de scie jusqu&apos;au nettoyage de
                fin de chantier.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-900/50 rounded-2xl flex items-center justify-center border border-emerald-800">
                    <ShieldCheck className="w-5 h-5 text-emerald-400" aria-hidden="true" />
                  </div>
                  <span className="font-semibold">Devis Gratuit</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-900/50 rounded-2xl flex items-center justify-center border border-emerald-800">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" aria-hidden="true" />
                  </div>
                  <span className="font-semibold">Nettoyage Garanti</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <img
                src={IMG.chantier}
                width="420"
                height="520"
                alt="Marcel Foissotte, artisan élagueur, posant fièrement devant un grand chêne"
                className="rounded-3xl shadow-2xl border-4 border-emerald-800 rotate-2 hover:rotate-0 transition-transform duration-500 object-cover object-center"
                loading="lazy" decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact / Quote Form ── */}
      <section id="devis" className="py-24 bg-white text-stone-900" aria-labelledby="devis-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-start">

            {/* Left — contact info */}
            <div className="w-full md:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-6 uppercase tracking-widest">
                Parlez-nous de votre arbre
              </div>
              <h2 id="devis-heading" className="text-4xl md:text-5xl font-bold mb-6 font-serif text-stone-900 leading-tight">
                Obtenez votre <span className="text-emerald-600">Devis Rapide</span>
              </h2>
              <p className="text-stone-500 mb-10 text-lg leading-relaxed">
                Donnez-nous quelques détails sur votre projet d&apos;élagage,
                d&apos;abattage ou d&apos;entretien. Marcel Foissotte vous recontactera
                très rapidement.
              </p>

              <div className="space-y-8 bg-stone-50 p-8 rounded-3xl border border-stone-200">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm border border-stone-100 shrink-0">
                    <Phone className="w-6 h-6 text-emerald-600" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Assistance Urgente</p>
                    <a href={`tel:${PHONE_CLEAN}`} className="font-bold text-2xl text-stone-800 hover:text-emerald-700 transition-colors">
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm border border-stone-100 shrink-0">
                    <MapPin className="w-6 h-6 text-emerald-600" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Zone d&apos;intervention</p>
                    <p className="font-bold text-lg text-stone-800">Normandie &amp; Environs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — multi-step form */}
            <div className="w-full md:w-1/2">
              <form
                onSubmit={handleFormSubmit}
                className="flex flex-col bg-white border border-stone-200 rounded-3xl p-8 md:p-10 shadow-xl shadow-stone-200/50"
                noValidate
              >
                <div className="mb-8 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-stone-400">
                  <span>Étape {formStep} / 3</span>
                  <div className="flex gap-2" role="progressbar" aria-valuenow={formStep} aria-valuemin={1} aria-valuemax={3} aria-label={`Étape ${formStep} sur 3`}>
                    {[1, 2, 3].map((step) => (
                      <div key={step} className={`w-8 h-1.5 rounded-full transition-colors duration-300 ${step <= formStep ? "bg-emerald-500" : "bg-stone-100"}`} />
                    ))}
                  </div>
                </div>

                <div className="min-h-[220px]">
                  {formStep === 1 && (
                    <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-500">
                      <h3 className="text-2xl font-bold text-stone-900 font-serif">Nature des travaux ?</h3>
                      <p className="text-stone-500 text-sm mb-4">Abattage, taille, hauteur estimée...</p>
                      <textarea
                        required rows={5}
                        className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-5 py-4 text-base text-stone-800 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all resize-none shadow-inner"
                        placeholder="Ex: Un chêne d'environ 15m proche de la maison à élaguer..."
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        aria-label="Description des travaux"
                      />
                    </div>
                  )}
                  {formStep === 2 && (
                    <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-500">
                      <h3 className="text-2xl font-bold text-stone-900 font-serif">Où vous situez-vous ?</h3>
                      <p className="text-stone-500 text-sm mb-4">Ville ou code postal pour estimer le déplacement.</p>
                      <input
                        required type="text"
                        className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-5 py-4 text-lg text-stone-800 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-inner"
                        placeholder="Ex: 76000 Rouen"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        aria-label="Ville ou code postal"
                        autoComplete="postal-code"
                      />
                    </div>
                  )}
                  {formStep === 3 && (
                    <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-500">
                      <h3 className="text-2xl font-bold text-stone-900 font-serif">Vos coordonnées</h3>
                      <p className="text-stone-500 text-sm mb-4">Comment pouvons-nous vous joindre ?</p>
                      <input
                        required type="tel"
                        className="w-full bg-stone-50 border border-stone-200 rounded-2xl px-5 py-4 text-lg text-stone-800 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all shadow-inner"
                        placeholder="06 XX XX XX XX"
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                        aria-label="Numéro de téléphone"
                        autoComplete="tel"
                      />
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-8 border-t border-stone-100 flex justify-between items-center">
                  {formStep > 1 ? (
                    <button type="button" onClick={() => setFormStep((s) => s - 1)} className="text-sm font-bold text-stone-400 hover:text-stone-900 transition-colors px-4 py-2">
                      Retour
                    </button>
                  ) : <div />}
                  <button type="submit" className="bg-emerald-600 text-white px-8 py-4 rounded-xl text-base font-bold hover:bg-emerald-500 shadow-lg shadow-emerald-600/30 transition-all flex items-center gap-3 hover:-translate-y-1">
                    {formStep < 3 ? "Étape suivante" : "Demander le devis"}
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="relative overflow-hidden" aria-label="Pied de page">
        {/* Background: sunset garden image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMG.garden}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
            loading="lazy" decoding="async"
          />
          <div className="absolute inset-0 bg-emerald-950/85 backdrop-blur-[2px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 pt-16 pb-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <div className="flex items-center gap-1.5 mb-6">
                <img src="/logo.svg" className="w-12 h-12" alt="" aria-hidden="true" />
                <span className="text-2xl font-semibold text-white tracking-tight">M. Foissotte</span>
              </div>
              <p className="text-emerald-100/60 leading-relaxed max-w-sm mb-8 text-sm">
                Artisan élagueur grimpeur. Expertise et passion de l&apos;arbre au
                service des particuliers et collectivités en Normandie.
              </p>
              <a
                href="#devis"
                className="inline-flex items-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20"
              >
                Devis gratuit <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contact</h4>
              <address className="not-italic space-y-4 text-sm font-medium">
                <p className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                  <a href={`tel:${PHONE_CLEAN}`} className="text-emerald-100/70 hover:text-white transition-colors">
                    {PHONE_NUMBER}
                  </a>
                </p>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 text-emerald-100/70 hover:text-white transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                  WhatsApp Direct
                </a>
                <p className="flex items-start gap-3 text-emerald-100/70">
                  <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" aria-hidden="true" />
                  Normandie &amp; environs
                </p>
              </address>
            </div>

            <div className="md:col-span-4">
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Services</h4>
              <ul className="space-y-3 text-sm flex flex-col items-start font-medium">
                {[
                  "Élagage & Taille Douce",
                  "Abattage & Démontage",
                  "Taille de Haies",
                  "Entretien Parc & Jardin",
                ].map((s) => (
                  <li key={s}>
                    <a href="#services" className="text-emerald-100/70 hover:text-emerald-300 transition-colors flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-emerald-100/40">
            <p>&copy; {new Date().getFullYear()} Mr. Foissotte Marcel &mdash; Artisan Élagueur, Normandie.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
              <a href="#" className="hover:text-white transition-colors">Politique de Cookies</a>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
