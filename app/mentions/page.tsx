"use client"
import React from 'react';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LegalMentionsPage = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 ">
      <div className=" mx-auto ">
        {/* Header */}
        <div className="mb-12 w-screen bg-gray-50 p-20">
          <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Informations légales
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-[#1e2736] mb-6">
            Mentions légales
          </h1>
          <p className="text-gray-500">
            En vigueur au 01/01/2026
          </p>
        </div>

        {/* Intro */}
        <div className="bg-gray-50 px-20 rounded-2xl p-8 mb-16 border border-gray-100">
          <p className="text-gray-600 leading-relaxed mb-4">
            Conformément aux dispositions des <strong>Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004</strong> pour la Confiance dans l'économie numérique, dite L.C.E.N., il est porté à la connaissance des utilisateurs et visiteurs, ci-après l'<strong>"Utilisateur"</strong>, du site <strong>www.oniqo.co</strong>, ci-après le <strong>"Site"</strong>, les présentes mentions légales.
          </p>
          <p className="text-gray-600 leading-relaxed">
            La connexion et la navigation sur le Site par l'Utilisateur implique l'acceptation intégrale et sans réserve des présentes mentions légales. Ces dernières sont accessibles sur le Site à la rubrique « Mentions légales ».
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-16 px-20">
          {/* Section 1 */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 bg-[#1e2736] text-white rounded-lg flex items-center justify-center font-bold text-xl">
                1
              </div>
              <h2 className="text-3xl font-bold text-[#1e2736] uppercase">L'Éditeur</h2>
            </div>
            <div className="text-gray-600 space-y-4">
              <p>
                L'édition du Site est assurée par <strong>Oniqo SAS</strong> au capital de <strong>1 000 000 euros</strong>, immatriculée au Registre du Commerce et des Sociétés de Nantes dont le siège social est situé au :
              </p>
              <div className="bg-gray-50 rounded-xl p-6 space-y-3 border border-gray-100">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#1e2736]" />
                  <span>2 Place Jean V, 44000 Nantes, France</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#1e2736]" />
                  <a href="mailto:contact@oniqo.co" className="hover:text-[#1e2736] underline">contact@oniqo.co</a>
                </div>
              </div>
              <p className="italic text-sm">ci-après "l'Éditeur"</p>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 bg-[#1e2736] text-white rounded-lg flex items-center justify-center font-bold text-xl">
                2
              </div>
              <h2 className="text-3xl font-bold text-[#1e2736] uppercase">L'Hébergeur</h2>
            </div>
            <div className="text-gray-600 space-y-4">
              <p>L'hébergement du Site est assuré par :</p>
              <div className="bg-gray-50 rounded-xl p-6 space-y-3 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="font-bold">o2switch</div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#1e2736]" />
                  <span>Chemin des Pardiaux, 63000 Clermont-Ferrand, France</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#1e2736]" />
                  <span>04 44 44 60 40</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 bg-[#1e2736] text-white rounded-lg flex items-center justify-center font-bold text-xl">
                3
              </div>
              <h2 className="text-3xl font-bold text-[#1e2736] uppercase">Accès au site</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découlant d'une nécessité de maintenance. En cas de modification, interruption ou suspension du Site, l'Éditeur ne saurait être tenu responsable.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 bg-[#1e2736] text-white rounded-lg flex items-center justify-center font-bold text-xl">
                4
              </div>
              <h2 className="text-3xl font-bold text-[#1e2736] uppercase">Collecte des données</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Le site est exempté de déclaration à la <strong>Commission Nationale Informatique et Libertés (CNIL)</strong> dans la mesure où il ne collecte aucune donnée concernant les utilisateurs.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 bg-[#1e2736] text-white rounded-lg flex items-center justify-center font-bold text-xl">
                5
              </div>
              <h2 className="text-3xl font-bold text-[#1e2736] uppercase">Propriété intellectuelle</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du Site, sans autorisation de l'Éditeur est prohibée et pourra entraîner des actions et poursuites judiciaires telles que notamment prévues par le <strong>Code de la propriété intellectuelle</strong> et le <strong>Code civil</strong>.
            </p>
          </section>
        </div>

        {/* FAQ CTA */}
        <div className="m-20 mb-4  bg-[#1e2736] rounded-3xl p-10 text-white text-left relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Une question sur nos mentions légales ?</h2>
            <p className="text-slate-300 mb-8 ">
              Notre équipe est à votre disposition pour répondre à toutes vos questions concernant les aspects légaux de notre site.
            </p>
            <Button className="bg-white text-[#1e2736] hover:bg-slate-100 rounded-full px-8 py-4 h-auto font-bold w-56">
              Nous contacter <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-slate-500/10 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  );
};

export default LegalMentionsPage;
