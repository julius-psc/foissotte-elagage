import { ArrowLeft } from "lucide-react";

export default function MentionsLegales({ onBack }) {
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
          <span className="text-white font-semibold text-sm">Mentions Légales</span>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <h1 className="text-4xl font-bold font-serif text-stone-900 mb-2">Mentions Légales</h1>
        <p className="text-stone-400 text-sm mb-12">Conformément aux articles 6-III et 19 de la loi n°2004-575 du 21 juin 2004 pour la Confiance dans l'Économie Numérique.</p>

        <div className="space-y-10 text-stone-700 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-stone-900 mb-4 font-serif border-b border-stone-200 pb-3">1. Éditeur du site</h2>
            <ul className="space-y-2 text-sm">
              <li><span className="font-semibold text-stone-800">Raison sociale :</span> Marcel Foissotte – Artisan Élagueur</li>
              <li><span className="font-semibold text-stone-800">Statut :</span> Auto-entrepreneur / Entreprise individuelle</li>
              <li><span className="font-semibold text-stone-800">Siège social :</span> Sotteville-lès-Rouen, Seine-Maritime (76)</li>
              <li><span className="font-semibold text-stone-800">Téléphone :</span> 07 85 76 58 44</li>
              <li><span className="font-semibold text-stone-800">Activité :</span> Élagage, abattage d'arbres et taille de haies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-900 mb-4 font-serif border-b border-stone-200 pb-3">2. Hébergeur du site</h2>
            <ul className="space-y-2 text-sm">
              <li><span className="font-semibold text-stone-800">Société :</span> Vercel Inc.</li>
              <li><span className="font-semibold text-stone-800">Adresse :</span> 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</li>
              <li><span className="font-semibold text-stone-800">Site web :</span> vercel.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-900 mb-4 font-serif border-b border-stone-200 pb-3">3. Propriété intellectuelle</h2>
            <p className="text-sm">
              L'ensemble des contenus présents sur ce site (textes, images, graphismes, logo) est la propriété exclusive de Marcel Foissotte ou fait l'objet d'une autorisation d'utilisation. Toute reproduction, distribution, modification ou utilisation à des fins commerciales est strictement interdite sans autorisation préalable écrite.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-900 mb-4 font-serif border-b border-stone-200 pb-3">4. Responsabilité</h2>
            <p className="text-sm">
              Marcel Foissotte s'efforce de maintenir les informations de ce site à jour et exactes. Cependant, il ne saurait être tenu responsable des erreurs ou omissions dans le contenu, ni des dommages résultant de l'utilisation des informations publiées. Les liens vers des sites tiers sont fournis à titre indicatif ; Marcel Foissotte ne contrôle pas leur contenu et décline toute responsabilité à leur égard.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-900 mb-4 font-serif border-b border-stone-200 pb-3">5. Données personnelles</h2>
            <p className="text-sm">
              Ce site ne collecte aucune donnée personnelle directement (pas de formulaire d'inscription, pas de compte utilisateur). Les demandes de devis transmises via WhatsApp sont traitées directement par l'artisan dans le cadre de la relation commerciale. Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit, contactez-nous au 07 85 76 58 44.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-900 mb-4 font-serif border-b border-stone-200 pb-3">6. Droit applicable</h2>
            <p className="text-sm">
              Le présent site et ses mentions légales sont soumis au droit français. En cas de litige, les tribunaux français seront seuls compétents.
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
