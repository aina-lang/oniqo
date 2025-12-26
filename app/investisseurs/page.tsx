"use client"
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, TrendingUp, Globe, Lightbulb, Users, DollarSign, Zap, FileText, Calendar, ArrowRight } from 'lucide-react';

const oniqoInvestorsPage = () => {
 
  const HeroSection = () => (
    <section className="pt-32 pb-20 px-6">
      <div className=" text-left max-w-3xl ">
        <div className="text-sm text-gray-600 mb-4">RELATIONS INVESTISSEURS</div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Investir dans l'avenir du voyage
        </h1>
        <p className="text-xl text-gray-600 ">
          Découvrez les opportunités d'investissement dans le groupe oniqo et participez à la construction de l'écosystème touristique de demain.
        </p>
      </div>
    </section>
  );

  const OpportunitySection = () => (
    <section className="py-20 px-6 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Une opportunité unique</h2>
            <p className="text-gray-600 mb-6">
              Marques complémentaires et une vision claire, nous construisons un écosystème touristique intégré à portée internationale.
            </p>
            <p className="text-gray-600 mb-8">
              Notre approche multi-marques nous permet de capter de la valeur sur l'ensemble de la chaîne du voyage, de la planification à l'expérience sur place, en passant par la réservation et la gestion.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-gray-100 rounded-2xl p-6">
                <div className="text-5xl font-bold mb-2">7</div>
                <div className="text-sm text-gray-600">Marques en portefeuille</div>
              </div>
              <div className="bg-gray-100 rounded-2xl p-6">
                <div className="text-5xl font-bold mb-2">2024</div>
                <div className="text-sm text-gray-600">Année de création</div>
              </div>
            </div>
          </div>
          <div className="relative h-96 bg-gradient-to-br from-slate-800 to-[#1f2837] rounded-3xl overflow-hidden p-8">
           <img src="https://public.readdy.ai/ai/img_res/36a14a3e27d98f621d4098ab6ae59dab.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );

  const MarketSection = () => {
    const stats = [
      { value: '1.5T$', label: 'Marché mondial du tourisme', description: 'Un secteur en croissance constante avec une digitalisation accélérée' },
      { value: '15%', label: 'Croissance annuelle', description: 'Taux de croissance du marché des technologies de voyage' },
      { value: '70%', label: 'Réservations digitales', description: 'Part des réservations effectuées via les plateformes digitales' },
    ];

    return (
      <section className="py-20 px-6 ">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-sm text-gray-600 mb-4">MARCHÉ</div>
          <h2 className="text-5xl font-bold mb-4">Un marché en forte croissance</h2>
          <p className="text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
            Le secteur du tourisme connaît une transformation digitale majeure avec des opportunités considérables
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className='bg-white rounded-2xl p-6 transition-all hover:shadow-lg transform hover:-translate-y-2'>
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-3">{stat.label}</div>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const WhyInvestSection = () => {
    const reasons = [
      {
        icon: TrendingUp,
        title: 'Portefeuille diversifié',
        description: 'Sept marques complémentaires couvrant l\'ensemble de l\'écosystème touristique, réduisant les risques et maximisant les opportunités de croissance.',
      },
      {
        icon: Globe,
        title: 'Portée internationale',
        description: 'Présence sur plusieurs marchés internationaux avec une stratégie d\'expansion claire et des partenariats stratégiques solides.',
      },
      {
        icon: Lightbulb,
        title: 'Innovation technologique',
        description: 'Une approche technologique moderne et créative, avec des équipes dédiées à l\'amélioration continue et au développement produit.',
      },
      {
        icon: Users,
        title: 'Équipe expérimentée',
        description: 'Leadership avec une expertise reconnue dans le tourisme, la technologie et le développement d\'entreprises à succès.',
      },
      {
        icon: DollarSign,
        title: 'Modèle économique éprouvé',
        description: 'Sources de revenus diversifiées avec une rentabilité en croissance constante et un potentiel de croissance significatif à court et moyen terme.',
      },
      {
        icon: Zap,
        title: 'Synergies entre marques',
        description: 'Intégration verticale permettant des économies d\'échelle aves des marques peuvent créer une expérience client supérieure et réduire les pertes.',
      },
    ];

    return (
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Pourquoi investir dans ONIQO</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {reasons.map((reason, idx) => (
              <div key={idx} className='bg-gray-50 rounded-2xl p-6 transition-all hover:shadow-lg transform hover:-translate-y-2'>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#1f2837] rounded-xl mb-4">
                  <reason.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                <p className="text-gray-600 text-sm">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const TransparencySection = () => {
    const resources = [
      {
        icon: FileText,
        title: 'Rapports financiers',
        description: 'Accédez à nos rapports trimestriels et annuels',
        link: 'Accéder',
      },
      {
        icon: Users,
        title: 'Présentations investisseurs',
        description: 'Téléchargez nos présentations et webinaires',
        link: 'Accéder',
      },
      {
        icon: Calendar,
        title: 'Calendrier financier',
        description: 'Dates clés et événements à venir',
        link: 'Accéder',
      },
    ];

    return (
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm text-gray-600 mb-4">INFORMATIONS FINANCIÈRES</div>
            <h2 className="text-5xl font-bold mb-4">Transparence et communication</h2>
            <p className="text-gray-600 max-w-2xl text-lg mx-auto">
              Nous nous engageons à maintenir une communication transparente avec nos investisseurs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, idx) => (
              <div key={idx} className="bg-white hover:shadow-lg transform hover:-translate-y-2 rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#1f2837] rounded-xl mb-4">
                  <resource.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                <p className="text-gray-600 text-sm mb-6">{resource.description}</p>
                <a href="#" className="text-[#1f2837] font-semibold text-sm inline-flex items-center hover:gap-2 transition-all">
                  {resource.link} <ArrowRight className="w-4 h-4 ml-1" />
                </a>
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
        <h2 className="text-4xl font-bold mb-4">Intéressé par un investissement ?</h2>
        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
          Contactez notre équipe relations investisseurs pour en savoir plus sur les opportunités d'investissement
        </p>
        <Button className="bg-white h-14 text-[#1f2837] hover:bg-gray-100 rounded-full w-56">
          Nous contacter <ArrowRight/>
        </Button>
      </div>
    </section>
  );

 

  return (
    <div className="min-h-screen ">
     
      <HeroSection />
      <OpportunitySection />
      <MarketSection />
      <WhyInvestSection />
      <TransparencySection />
      <CTASection />
  
    </div>
  );
};

export default oniqoInvestorsPage;