"use client"
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Navigation, Calendar, Users, Home, MapPin, Building2, BarChart, Shield, Zap, Server, Globe, ArrowRight } from 'lucide-react';

interface Feature {
  icon: React.ElementType;
  text: string;
}

interface SolutionCardProps {
  badge: string;
  title: string;
  description: string;
  features: Feature[];
  bgColor: string;
  reverse: boolean;
  image: string;
  buttonGradient?: string;
}

const oniqoSolutionsPage = () => {

  const HeroSection = () => (
    <section className="pt-32 pb-20 px-6">
      <div className=" text-left">
        <div className="text-sm text-gray-600 mb-4">NOS SOLUTIONS</div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Solutions complètes pour l'écosystème du voyage
        </h1>
        <p className="text-lg text-gray-600 w-1/2">
          De la mobilité à l'hébergement, en passant par les expériences et la gestion, nous couvrons tous les aspects du voyage moderne avec des solutions technologiques innovantes.
        </p>
      </div>
    </section>
  );

  const SolutionCard = ({ badge, title, description, features, bgColor, reverse, image, buttonGradient }: SolutionCardProps) => {
    const content = (
      <>
        <div className={reverse ? 'order-2' : 'order-1'}>
          <span className="inline-block bg-blue-100 text-blue-700 text-xs px-4 py-2 rounded-full mb-4 font-semibold">
            {badge}
          </span>
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 mb-8">{description}</p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-gray-100 rounded-xl">
                <div className="shrink-0 w-10 h-10 bg-[#1f2837] rounded-xl flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-sm font-medium">{feature.text}</div>
              </div>
            ))}
          </div>
          <Button className={`${buttonGradient || 'bg-[#1f2837]'} h-14 hover:opacity-90 rounded-full px-8`}>
            En savoir plus →
          </Button>
        </div>
        <div className={`relative h-96 ${bgColor} rounded-3xl overflow-hidden p-8 ${reverse ? 'order-1' : 'order-2'}`}>
          <img src={image} alt="" />
        </div>
      </>
    );

    return (
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {content}
          </div>
        </div>
      </section>
    );
  };

  const TechSection = () => {
    const techs = [
      {
        icon: Server,
        title: 'Cloud Infrastructure',
        description: 'Architecture cloud scalable et hautement disponible',
      },
      {
        icon: Zap,
        title: 'Mobile First',
        description: 'Applications natives iOS et Android',
      },
      {
        icon: Shield,
        title: 'Sécurité',
        description: 'Chiffrement et protection des données utilisateurs',
      },
      {
        icon: BarChart,
        title: 'Performance',
        description: 'Temps de réponse optimisés',
      },
    ];

    return (
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-sm text-gray-600 mb-4">TECHNOLOGIES</div>
          <h2 className="text-5xl font-bold mb-4">Infrastructure technologique</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            Des technologies de pointe pour garantir performance, sécurité et évolutivité
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techs.map((tech, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 text-left hover:shadow-lg transform hover:-translate-y-2 duration-200 transition-transform">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#1f2837] rounded-xl mb-4">
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{tech.title}</h3>
                <p className="text-gray-600 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const CTASection = () => (
    <section className="py-20 px-6 bg-[#1f2837] text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-4">Intéressé par nos solutions ?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
          Contactez-nous pour découvrir comment nos solutions peuvent transformer votre activité
        </p>
        <Button className="bg-white h-14  text-[#1f2837] hover:bg-gray-100 rounded-full w-56">
          Nous contacter <ArrowRight/>
        </Button>
      </div>
    </section>
  );

  
  return (
    <div className="min-h-screen ">
    
      <HeroSection />
      
      <SolutionCard
        badge="Mobilité"
        title="Solutions de mobilité intelligente"
        description="Offrez à vos clients tous les modes de transport pour une expérience de déplacement fluide et optimisée. Navigation en temps réel, réservation unifiée et optimisation d'itinéraires."
        features={[
          { icon: Navigation, text: 'Navigation intelligente' },
          { icon: Globe, text: 'Optimisation d\'itinéraires' },
          { icon: MapPin, text: 'Transport multimodal' },
          { icon: Calendar, text: 'Temps réel' },
        ]}
        bgColor="bg-gradient-to-br from-blue-200 to-blue-300"
        reverse={false}
        buttonGradient="bg-linear-to-r from-blue-500 to-blue-700"
        image="https://public.readdy.ai/ai/img_res/e948f960227845042b975d7c14a3c3b1.jpg"
      />

      <SolutionCard
        badge="Hébergement"
        title="Plateformes d'hébergement complètes"
        description="Proposez en un seul lieu, vos plateformes couvrent tous les types d'hébergement. Réservation instantanée, locations alternatives et hôtels premium pour répondre à tous les besoins."
        features={[
          { icon: Home, text: 'Hôtels premium' },
          { icon: Building2, text: 'Locations urbaines' },
          { icon: MapPin, text: 'Réservation rapide' },
          { icon: Shield, text: 'Paiement sécurisé' },
        ]}
        bgColor="bg-gradient-to-br from-green-200 to-green-300"
        reverse={true}
        buttonGradient="bg-linear-to-r from-green-500 to-green-700"
        image="https://readdy.ai/api/search-image?query=Modern%20accommodation%20booking%20platform%20showing%20diverse%20lodging%20options%20from%20hotels%20to%20vacation%20rentals%2C%20clean%20interface%20with%20property%20listings%20and%20search%20functionality%2C%20contemporary%20hospitality%20technology%20with%20booking%20calendar%20and%20availability%2C%20professional%20design%20with%20green%20accents%20and%20white%20background&width=700&height=600&seq=solutions-accommodation&orientation=landscape "
      />

      <SolutionCard
        badge="Expériences"
        title="Découverte et expériences authentiques"
        description="Connectez les voyageurs avec des destinations uniques et des expériences locales authentiques. Guides locaux, activités immersives et voyages responsables."
        features={[
          { icon: Users, text: 'Destinations uniques' },
          { icon: MapPin, text: 'Guides experts' },
          { icon: Calendar, text: 'Voyage responsable' },
          { icon: Globe, text: 'Expériences locales' },
        ]}
        bgColor="bg-gradient-to-br from-orange-200 to-orange-300"
        reverse={false}
        buttonGradient="bg-linear-to-r from-orange-500 to-orange-700"
        image="https://readdy.ai/api/search-image?query=Authentic%20travel%20experiences%20platform%20showing%20unique%20destinations%20and%20local%20cultural%20activities%2C%20warm%20color%20palette%2C%20travel%20discovery%20interface%20with%20immersive%20experiences%20and%20expert%20guides%2C%20contemporary%20tourism%20platform%20design%2C%20professional%20aesthetic%20with%20coral%20accents%20and%20white%20background&width=700&height=600&seq=solutions-experiences&orientation=landscape"
      />

      <SolutionCard
        badge="Gestion"
        title="Outils de gestion immobilière"
        description="Solutions digitales complètes pour propriétaires et gestionnaires. Automatisation, analyse avancée et intégration multi-plateformes pour optimiser la rentabilité."
        features={[
          { icon: BarChart, text: 'Tableau de bord' },
          { icon: Building2, text: 'Analytics avancés' },
          { icon: Zap, text: 'Automatisation' },
          { icon: Users, text: 'Multi-plateformes' },
        ]}
        bgColor="bg-gradient-to-br from-yellow-200 to-yellow-300"
        reverse={true}
        buttonGradient="bg-linear-to-r from-yellow-500 to-yellow-700"
        image="https://readdy.ai/api/search-image?query=Property%20management%20software%20dashboard%20showing%20analytics%20calendar%20and%20booking%20management%20tools%2C%20modern%20interface%20with%20charts%20and%20data%20visualization%2C%20professional%20real%20estate%20tech%20platform%20with%20automation%20features%2C%20clean%20design%20with%20yellow%20accents%20and%20white%20background&width=700&height=600&seq=solutions-management&orientation=landscape"
      />

      <TechSection />
      <CTASection />
    
    </div>
  );
};

export default oniqoSolutionsPage;