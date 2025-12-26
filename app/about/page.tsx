"use client"
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Lightbulb, Shield, Users, Award, Check, Globe, PhoneCall, Users2 } from 'lucide-react';

const oniqoAboutPage = () => {
  
  const HeroSection = () => (
    <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-6 md:px-12 text-left">
      <div className="max-w-4xl">
        <div className="text-xs md:text-sm text-gray-600 mb-4 tracking-wider uppercase">À PROPOS D'ONIQO</div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Réinventer l'écosystème du voyage
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          oniqo est un groupe startup qui fédère sept marques commerciales à vocation internationale, construisant un écosystème touristique intégré et innovant pour répondre aux nouveaux défis du voyage.
        </p>
      </div>
    </section>
  );

  const VisionSection = () => (
    <section className="py-16 md:py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 ">
          <div className="relative shadow-2xl bg-gray-300 rounded-3xl overflow-hidden aspect-video lg:aspect-auto">
            <img src="https://public.readdy.ai/ai/img_res/7c227b5ca8136b5412757ef6c217b451.jpg" alt="Our Vision" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre vision</h2>
            <p className="text-gray-600 mb-6 text-base md:text-lg">
              Nous croyons en un écosystème touristique où chaque marque apporte une valeur unique tout en contribuant à une expérience globale cohérente et innovante. Notre vision est de créer un groupe international qui révolutionne la façon dont les voyageurs découvrent, réservent et vivent leurs expériences.
            </p>
            <p className="text-gray-600 mb-8 text-base md:text-lg">
              À travers nos sept marques - Karta.com, Wanderlate.com, Innminute.com, Hoobnb.com, Homiqio.com, Hoooteeel.com et Rooofy.com - nous couvrons l'ensemble du parcours voyageur, de la planification à la réservation, en passant par la gestion et l'expérience sur place.
            </p>
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              <div className='bg-gray-100 p-6 rounded-2xl'>
                <div className="text-3xl md:text-4xl font-bold mb-2">7</div>
                <div className="text-xs md:text-sm text-gray-600">Marques internationales</div>
              </div>
              <div className='bg-gray-100 p-6 rounded-2xl'>
                <div className="text-3xl md:text-4xl font-bold mb-2">2024</div>
                <div className="text-xs md:text-sm text-gray-600">Année de création</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const MissionSection = () => {
    const missions = [
      {
        icon: Lightbulb,
        title: 'Innovation continue',
        description: 'Développer des technologies de pointe pour améliorer l\'expérience voyage',
      },
      {
        icon: Globe,
        title: 'Portée internationale',
        description: 'Étendre notre présence sur l\'ensemble mondial',
      },
      {
        icon: PhoneCall,
        title: 'Expérience client',
        description: 'Placer l\'utilisateur au cœur de nos préoccupations',
      },
      {
        icon: Users2,
        title: 'Collaboration',
        description: 'Favoriser les synergies entre nos marques',
      },
    ];

    return (
      <section className="py-16 md:py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Notre mission</h2>
              <p className="text-gray-600 mb-8 text-base md:text-lg">
                Digitales innovantes, accessibles et adaptées aux besoins des voyageurs modernes.
              </p>
              <div className="space-y-6">
                {missions.map((mission, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#1f2837] rounded-xl flex items-center justify-center">
                      <mission.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1 text-base md:text-lg">{mission.title}</h3>
                      <p className="text-sm text-gray-600">{mission.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative bg-gray-300 rounded-3xl overflow-hidden shadow-2xl aspect-video lg:aspect-square">
              <img src="https://readdy.ai/api/search-image?query=Corporate%20mission%20statement%20visualization%20with%20team%20collaboration%2C%20modern%20business%20environment%20showing%20diverse%20professionals%20working%20together%2C%20contemporary%20office%20with%20mission%20values%20displayed%2C%20clean%20professional%20aesthetic%20with%20natural%20lighting%20and%20innovation%20focus&width=700&height=600&seq=about-mission-values&orientation=landscape" alt="Our Mission" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    );
  };

  const ValuesSection = () => {
    const values = [
      {
        icon: Lightbulb,
        title: 'Innovation',
        description: 'Nous repoussons constamment les limites pour créer des solutions révolutionnaires',
      },
      {
        icon: Shield,
        title: 'Intégrité',
        description: 'Nous agissons avec transparence et honnêteté dans toutes nos actions',
      },
      {
        icon: Users,
        title: 'Collaboration',
        description: 'Nous croyons en la force du travail d\'équipe et des partenariats',
      },
      {
        icon: Award,
        title: 'Excellence',
        description: 'Nous visons l\'excellence dans tout ce que nous entreprenons',
      },
    ];

    return (
      <section className="py-16 md:py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-xs md:text-sm text-gray-600 mb-4 tracking-wider uppercase">NOS VALEURS</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ce qui nous guide
          </h2>
          <p className='text-base md:text-lg text-gray-600 max-w-2xl mx-auto'>Des principes fondamentaux qui orientent nos décisions et nos actions au quotidien</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 md:p-8 text-left hover:shadow-lg hover:-translate-y-2 duration-200 transition-transform border border-gray-100">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#1f2837] rounded-xl mb-4">
                  <value.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const TeamSection = () => {
  const team = [
    {
      name: 'Jean Dupont',
      role: 'CEO & Fondateur',
      img: "https://readdy.ai/api/search-image?query=Professional%20corporate%20executive%20portrait%2C%20confident%20business%20leader%20in%20modern%20office%20setting%2C%20clean%20professional%20headshot%20with%20neutral%20background%2C%20contemporary%20business%20attire%2C%20natural%20lighting&width=400&height=500&seq=team-ceo&orientation=portrait"
    },
    {
      name: 'Marie Laurent',
      role: 'CTO',
      img: "https://readdy.ai/api/search-image?query=Professional%20female%20executive%20portrait%2C%20confident%20business%20operations%20leader%2C%20clean%20corporate%20headshot%20with%20neutral%20background%2C%20contemporary%20professional%20attire%2C%20natural%20lighting&width=400&height=500&seq=team-coo&orientation=portrait"
    },
    {
      name: 'Pierre Martin',
      role: 'CFO',
      img: "https://readdy.ai/api/search-image?query=Professional%20technology%20executive%20portrait%2C%20confident%20tech%20leader%20in%20modern%20setting%2C%20clean%20professional%20headshot%20with%20neutral%20background%2C%20contemporary%20business%20casual%20attire%2C%20natural%20lighting&width=400&height=500&seq=team-cto&orientation=portrait"
    },
    {
      name: 'Sophie Bernard',
      role: 'CMO',
      img: "https://readdy.ai/api/search-image?query=Professional%20female%20marketing%20executive%20portrait%2C%20confident%20marketing%20leader%2C%20clean%20corporate%20headshot%20with%20neutral%20background%2C%20contemporary%20professional%20attire%2C%20natural%20lighting&width=400&height=500&seq=team-cmo&orientation=portrait"
    }
  ];

  return (
    <section className="py-16 md:py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-xs md:text-sm text-gray-600 mb-4 tracking-wider uppercase">NOTRE ÉQUIPE</div>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Leadership</h2>
        <p className="text-base md:text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Une équipe de leaders expérimentés guidant notre vision
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {team.map((member, idx) => (
            <div key={idx} className="group">
              <div className="relative aspect-4/5 rounded-2xl overflow-hidden mb-4 bg-gray-200 shadow-sm transition-shadow group-hover:shadow-md">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-bold text-lg text-center sm:text-left">{member.name}</h3>
              <p className="text-sm text-gray-600 text-center sm:text-left">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


  const TimelineSection = () => {
    const timeline = [
      {
        year: '2024',
        month: 'Q1',
        title: 'Création du groupe oniqo',
        description: 'Lancement officiel du groupe avec une vision claire : créer un écosystème touristique intégré',
      },
      {
        year: '2024',
        month: 'Q2',
        title: 'Développement des marques',
        description: 'Mise en place de l\'infrastructure et développement des six marques du groupe',
      },
      {
        year: '2024',
        month: 'Q3',
        title: 'Lancement des plateformes',
        description: 'Déploiement progressif des plateformes digitales de nos marques',
      },
      {
        year: '2024',
        month: 'Q4',
        title: 'Expansion internationale',
        description: 'Ouverture vers de nouveaux marchés et partenariats stratégiques',
      },
    ];

    return (
      <section className="py-16 md:py-20 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-xs md:text-sm text-gray-600 mb-4 tracking-wider uppercase">NOTRE HISTOIRE</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Le parcours d'oniqo</h2>
          </div>
          <div className="space-y-12 max-w-3xl mx-auto">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-4 md:gap-8">
                <div className="shrink-0 w-16 md:w-24 text-right">
                  <div className="text-lg md:text-2xl font-bold leading-none">{item.year}</div>
                  <div className="text-xs md:text-sm text-gray-600">{item.month}</div>
                </div>
                <div className="relative shrink-0 w-4 flex flex-col items-center">
                  <div className="w-3 md:w-4 h-3 md:h-4 bg-[#1f2837] rounded-full z-10" />
                  {idx < timeline.length - 1 && (
                    <div className="absolute top-0 bottom-0 w-px bg-gray-300 left-1/2 -translate-x-1/2 h-[calc(100%+3rem)]" />
                  )}
                </div>
                <div className="grow pb-12">
                  <h3 className="text-lg md:text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const CTASection = () => (
    <section className="py-16 md:py-20 px-6 md:px-12 bg-[#1f2837] text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">Rejoignez notre aventure</h2>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg md:text-xl">
          Découvrez les opportunités de carrière et de partenariat au sein du groupe Oniqo
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white h-14 text-[#1f2837] hover:bg-gray-100 rounded-full px-8 w-full sm:w-auto">
            Voir les postes ouverts
          </Button>
          <Button variant="outline" className="border-white h-14 text-white bg-transparent hover:bg-white hover:text-[#1f2837] rounded-full px-8 border-2 w-full sm:w-auto transition-colors">
            Nous contacter
          </Button>
        </div>
      </div>
    </section>
  );

 

  return (
    <div className="min-h-screen ">
   
      <HeroSection />
      <VisionSection />
      <MissionSection />
      <ValuesSection />
      <TeamSection />
      <TimelineSection />
      <CTASection />
 
    </div>
  );
};

export default oniqoAboutPage;