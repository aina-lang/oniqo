"use client"
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Check, ArrowRight, User } from 'lucide-react';

interface BrandCardProps {
  badge: string;
  title: string;
  description: string;
  features: string[];
  bgColor: string;
  buttonText: string;
  buttonColor: string;
  image?: string;
  buttonGradient?: string;
}

const oniqoBrandsPage = () => {
  
  const HeroSection = () => (
    <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-6 md:px-12">
      <div className="max-w-4xl text-left">
        <div className="text-xs md:text-sm text-gray-600 mb-4 tracking-wider uppercase">NOS MARQUES</div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Sept marques, un écosystème
        </h1>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl">
          Découvrez les marques qui composent le groupe oniqo et révolutionnent l'industrie du voyage à l'échelle internationale.
        </p>
      </div>
    </section>
  );

  const BrandCard = ({ badge, title, description, features, bgColor, buttonText, buttonColor, image, buttonGradient }: BrandCardProps) => (
    <section className="py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`relative aspect-square lg:h-[78vh] lg:max-w-xl mx-auto w-full ${bgColor} rounded-3xl overflow-hidden shadow-xl`}>
            {image && (
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            )}
            {!image && <div className="w-full h-full bg-white/20 rounded-2xl animate-pulse" />}
          </div>
          <div>
            <span className={`inline-block ${buttonColor} text-white text-[10px] md:text-xs px-4 py-1.5 md:py-2 rounded-full mb-4 font-semibold tracking-wide shadow-sm`}>
              {badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 mb-6 text-base md:text-lg leading-relaxed">{description}</p>
            <ul className="space-y-3 mb-8">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className={`shrink-0 w-5 h-5 ${buttonColor} rounded-full flex items-center justify-center mt-1`}>
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className={`${buttonGradient || buttonColor} h-14 hover:opacity-90 rounded-full px-8 w-full sm:w-auto transition-transform active:scale-95`}>
              {buttonText} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );

  const BrandCardReverse = ({ badge, title, description, features, bgColor, buttonText, buttonColor, image, buttonGradient }: BrandCardProps) => (
    <section className="py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className={`inline-block ${buttonColor} text-white text-[10px] md:text-xs px-4 py-1.5 md:py-2 rounded-full mb-4 font-semibold tracking-wide shadow-sm`}>
              {badge}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 mb-6 text-base md:text-lg leading-relaxed">{description}</p>
            <ul className="space-y-3 mb-8">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className={`shrink-0 w-5 h-5 ${buttonColor} rounded-full flex items-center justify-center mt-1`}>
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                </li>
              ))}
            </ul>
            <Button className={`${buttonGradient || buttonColor} h-14 hover:opacity-90 rounded-full px-8 w-full sm:w-auto transition-transform active:scale-95`}>
              {buttonText} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          <div className={`relative aspect-square lg:h-[78vh] lg:max-w-xl mx-auto w-full ${bgColor} rounded-3xl overflow-hidden shadow-xl order-1 lg:order-2`}>
            {image && (
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            )}
            {!image && <div className="w-full h-full bg-white/20 rounded-2xl animate-pulse" />}
          </div>
        </div>
      </div>
    </section>
  );

  const IntegrationSection = () => (
    <section className="py-16 md:py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-xs md:text-sm text-gray-600 mb-4 tracking-wider uppercase">SYNÉRGIES</div>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Un écosystème intégré</h2>
        <p className="text-gray-600 mb-12 text-base md:text-lg max-w-2xl mx-auto">
          Nos marques travaillent ensemble pour offrir une expérience voyage complète et cohérente
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
             icon: Check,
             title: "Intégration technologique",
             description: "Nos plateformes partagent une infrastructure commune pour une expérience utilisateur fluide" 
            },
            {
             icon: Check,
             title: "Données partagées",
             description: "Les insights clients sont partagés pour personnaliser l'expérience sur toutes nos marques" 
            },
            {
             icon: Check,
             title: "Expertise commune",
             description: "Nos équipes collaborent pour innover et améliorer continuellement nos services" 
            },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 text-left transform hover:-translate-y-2 transition-all duration-200 hover:shadow-lg">
              <div className="h-10 w-10 md:h-12 md:w-12 mb-6 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg">
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  
  return (
    <div className="min-h-screen ">
      <HeroSection />
      
      <BrandCardReverse
        badge="Karla.com"
        title="Navigation intelligente"
        description="Planifiez vos itinéraires de manière et de navigation intelligente. Notre plateforme intègre tous les modes de transport pour offrir une expérience fluide."
        features={[
          'Navigation multicritères en temps réel',
          'Intégration de tous les transports',
          'Optimisation des parcours',
          'Réservation simplifiée'
        ]}
        bgColor="bg-gradient-to-br from-blue-300 to-blue-400"
        buttonText="Découvrir Karla.com"
        buttonColor="bg-blue-500"
        buttonGradient="bg-linear-to-r from-blue-400 to-blue-600"
        image="https://public.readdy.ai/ai/img_res/3c20d9eb522bcc01dfea497c352f2d17.jpg"
      />

      <BrandCard
        badge="Wanderlate.com"
        title="Expériences authentiques"
        description="Vivez des moments inoubliables. Découvrez des expériences uniques et connectez-vous avec des locaux pour vivre un voyage engagé."
        features={[
          'Expériences locales uniques',
          'Guides certifiés',
          'Expériences locales immersives',
          'Réservation instantanée'
        ]}
        bgColor="bg-gradient-to-br from-red-300 to-red-400"
        buttonText="Découvrir Wanderlate.com"
        buttonColor="bg-red-500"
        buttonGradient="bg-linear-to-r from-red-400 to-red-600"
        image="https://readdy.ai/api/search-image?query=Authentic%20travel%20experiences%20platform%20showing%20unique%20destinations%20and%20local%20culture%2C%20warm%20coral%20color%20palette%2C%20travel%20discovery%20interface%20with%20exotic%20locations%20and%20cultural%20experiences%2C%20modern%20tourism%20platform%20design%20showcasing%20hidden%20gems%20and%20authentic%20adventures%2C%20simple%20clean%20background&width=700&height=600&seq=wanderlate-brand-detail&orientation=landscape"
      />

      <BrandCardReverse
        badge="InnMinute.com"
        title="Réservation instantanée"
        description="Simplifiez votre réservation d'hébergement avec une plateforme intuitive et des milliers de propriétés vérifiées."
        features={[
          'Réservation en moins de 60 secondes',
          'Paiement sécurisé',
          'Prix transparents et compétitifs',
          'Annulation immédiate'
        ]}
        bgColor="bg-gradient-to-br from-green-300 to-green-400"
        buttonText="Découvrir InnMinute.com"
        buttonColor="bg-green-500"
        buttonGradient="bg-linear-to-r from-green-400 to-green-600"
        image="https://readdy.ai/api/search-image?query=Fast%20hotel%20booking%20platform%20with%20instant%20reservation%20system%2C%20mint%20green%20color%20scheme%2C%20modern%20accommodation%20search%20interface%20showing%20quick%20booking%20process%20and%20available%20hotels%2C%20clean%20digital%20platform%20with%20property%20listings%20and%20real-time%20availability%2C%20simple%20white%20background&width=700&height=600&seq=innminute-brand-detail&orientation=landscape"
      />

      <BrandCard
        badge="Hoobnb.com"
        title="Hébergement alternatif"
        description="Trouvez des hébergements uniques. Cabanes dans les arbres, yourtes, maisons flottantes, d'hébergement alternatifs pour des séjours inoubliables."
        features={[
          'Expériences hors du commun',
          'Logements vérifiés et notés',
          'Variété de lieux et destinations',
          'Réservation sécurisée'
        ]}
        bgColor="bg-gradient-to-br from-purple-300 to-purple-400"
        buttonText="Découvrir Hoobnb.com"
        buttonColor="bg-purple-500"
        buttonGradient="bg-linear-to-r from-purple-400 to-purple-600"
        image="https://readdy.ai/api/search-image?query=Alternative%20accommodation%20platform%20showing%20unique%20vacation%20rentals%20and%20special%20properties%2C%20purple%20pastel%20color%20palette%2C%20modern%20home%20sharing%20interface%20with%20diverse%20and%20unusual%20lodging%20options%2C%20contemporary%20property%20marketplace%20design%2C%20simple%20clean%20background&width=700&height=600&seq=hoobnb-brand-detail&orientation=landscape"
      />

      <BrandCardReverse
        badge="Homiqio.com"
        title="Gestion immobilière digitale"
        description="Gérez vos propriétés avec intelligence. Notre solution digitale simplifie la gestion, la réservation et la communication avec les locataires."
        features={[
          'Gestion centralisée des propriétés',
          'Automatisation des réservations',
          'Analyses et reporting',
          'Support client prioritaire'
        ]}
        bgColor="bg-gradient-to-br from-yellow-300 to-yellow-400"
        buttonText="Découvrir Homiqio.com"
        buttonColor="bg-yellow-500"
        buttonGradient="bg-linear-to-r from-yellow-400 to-yellow-600"
        image="https://readdy.ai/api/search-image?query=Property%20management%20dashboard%20with%20digital%20tools%20for%20real%20estate%20managers%2C%20yellow%20color%20scheme%2C%20modern%20property%20tech%20interface%20showing%20analytics%20calendar%20and%20booking%20management%2C%20professional%20real%20estate%20management%20platform%2C%20simple%20white%20background&width=700&height=600&seq=homiqio-brand-detail&orientation=landscape"
      />

      <BrandCard
        badge="Hoooteeel.com"
        title="Hôtellerie premium"
        description="Réservez les meilleurs établissements. Accédez à une sélection d'hôtels d'exception à travers le monde avec des tarifs négociés."
        features={[
          'Sélection d\'hôtels de luxe',
          'Tarifs préférentiels exclusifs',
          'Service conciergerie 24/7',
          'Programme de fidélité premium'
        ]}
        bgColor="bg-gradient-to-br from-pink-300 to-pink-400"
        buttonText="Découvrir Hoooteeel.com"
        buttonColor="bg-pink-500"
        buttonGradient="bg-linear-to-r from-pink-400 to-pink-600"
        image="https://readdy.ai/api/search-image?query=Luxury%20hotel%20booking%20platform%20showing%20premium%20accommodations%20and%20high-end%20properties%2C%20pink%20rose%20color%20palette%2C%20elegant%20hospitality%20interface%20with%20luxury%20hotel%20listings%20and%20exclusive%20services%2C%20sophisticated%20travel%20booking%20design%2C%20simple%20clean%20background&width=700&height=600&seq=hoooteeel-brand-detail&orientation=landscape"
      />

      <BrandCardReverse
        badge="Rooofy.com"
        title="Hébergement flexible"
        description="Louez pour quelques semaines ou plusieurs mois. Solutions d'hébergement flexibles et adaptables pour les nomades digitaux."
        features={[
          'Flexibilité totale des réservations',
          'Location à court et long terme',
          'Espaces de travail équipés',
          'Communauté de nomades digitaux'
        ]}
        bgColor="bg-gradient-to-br from-orange-300 to-orange-400"
        buttonText="Découvrir Rooofy.com"
        buttonColor="bg-orange-500"
        buttonGradient="bg-linear-to-r from-orange-400 to-orange-600"
        image="https://readdy.ai/api/search-image?query=Flexible%20accommodation%20booking%20platform%20showing%20diverse%20lodging%20options%20for%20modern%20travelers%2C%20vibrant%20orange%20color%20scheme%2C%20contemporary%20housing%20marketplace%20interface%20with%20short-term%20and%20long-term%20rental%20properties%2C%20innovative%20hospitality%20technology%20platform%20design%2C%20simple%20clean%20white%20background&width=700&height=600&seq=rooofy-brand-detail&orientation=landscape"
      />

      <IntegrationSection />

    </div>
  );
};

export default oniqoBrandsPage;