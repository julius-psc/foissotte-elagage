import { ArrowLeft } from "lucide-react";

export default function PolitiqueCookies({ onBack }) {
  return (
    <div className="min-h-screen bg-stone-50 text-slate-900 font-sans">
      <nav className="fixed w-full z-50 bg-emerald-950/90 backdrop-blur-md border-b border-emerald-900 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-emerald-100 hover:text-emerald-300 transition-colors text-sm font-medium"
            aria-label="Retour à l'accueil"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Retour
          </button>
          <span className="text-white font-semibold text-sm">Politique de Cookies</span>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <h1 className="text-4xl font-bold font-serif text-stone-900 mb-2">Politique de Cookies</h1>
        <p className="text-stone-400 text-sm mb-12">Dernière mise à jour : juin 2026</p>

        <div className="space-y-10 text-stone-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-stone-900 mb-4 font-serif border-b border-stone-200 pb-3">1. Qu'est-ce qu'un cookie ?</h2>
            <p className="text-sm">
              Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, smartphone ou tablette) lors de la visite d'un site web. Il permet au site de mémoriser des informations sur votre visite, comme votre langue préférée et d'autres paramètres.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-900 mb-4 font-serif border-b border-stone-200 pb-3">2. Les cookies utilisés sur ce site</h2>
            <p className="text-sm mb-4">
              Ce site est un site vitrine statique. Il n'utilise <strong>aucun cookie de traçage, publicitaire ou analytique</strong>. Aucune donnée de navigation n'est collectée à des fins commerciales ou publicitaires.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-emerald-50 text-stone-800">
                    <th className="text-left p-3 border border-stone-200 font-semibold">Nom</th>
                    <th className="text-left p-3 border border-stone-200 font-semibold">Type</th>
                    <th className="text-left p-3 border border-stone-200 font-semibold">Finalité</th>
                    <th className="text-left p-3 border border-stone-200 font-semibold">Durée</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="p-3 border border-stone-200 font-mono text-xs">—</td>
                    <td className="p-3 border border-stone-200">Technique</td>
                    <td className="p-3 border border-stone-200">Aucun cookie technique n'est déposé par ce site.</td>
                    <td className="p-3 border border-stone-200">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-900 mb-4 font-serif border-b border-stone-200 pb-3">3. Services tiers</h2>
            <p className="text-sm mb-4">
              Certains liens présents sur ce site pointent vers des services tiers qui peuvent déposer leurs propres cookies selon leurs politiques :
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" aria-hidden="true" />
                <span><strong>WhatsApp (Meta Platforms)</strong> — utilisé pour les demandes de devis. En cliquant sur un lien WhatsApp, vous quittez ce site et êtes soumis à la politique de confidentialité de Meta.</span>
              </li>
              <li className="flex gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" aria-hidden="true" />
                <span><strong>Vercel (hébergeur)</strong> — l'hébergeur peut collecter des logs techniques (adresse IP, navigateur) à des fins de sécurité, conformément à sa propre politique de confidentialité.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-900 mb-4 font-serif border-b border-stone-200 pb-3">4. Gérer vos préférences</h2>
            <p className="text-sm mb-4">
              Vous pouvez à tout moment configurer votre navigateur pour accepter ou refuser les cookies. Voici comment procéder sur les principaux navigateurs :
            </p>
            <ul className="space-y-2 text-sm">
              {[
                ["Google Chrome", "Paramètres > Confidentialité et sécurité > Cookies"],
                ["Mozilla Firefox", "Options > Vie privée et sécurité > Cookies"],
                ["Safari", "Préférences > Confidentialité > Cookies"],
                ["Microsoft Edge", "Paramètres > Confidentialité, recherche et services"],
              ].map(([browser, path]) => (
                <li key={browser} className="flex gap-3 items-start">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 shrink-0" aria-hidden="true" />
                  <span><strong>{browser} :</strong> {path}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm mt-4 text-stone-500">
              Le refus des cookies n'affectera pas votre expérience sur ce site vitrine.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-900 mb-4 font-serif border-b border-stone-200 pb-3">5. Contact</h2>
            <p className="text-sm">
              Pour toute question relative à cette politique de cookies, vous pouvez nous contacter par téléphone au <strong>07 85 76 58 44</strong>.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-stone-200 text-center">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-xl text-sm font-bold hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-600/20"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Retour à l'accueil
          </button>
        </div>
      </main>
    </div>
  );
}
