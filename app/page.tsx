"use client"
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Globe, Building2, FileText, Zap, Users, Calendar, Mail, Users2, LocateIcon, Rocket, Settings } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const StatsCards = () => {
  const stats = [
    {
      number: '7',
      label: 'Marques'
    },
    {
      number: '2024',
      label: 'Année de création'
    },
    {
      number: '∞',
      label: 'Possibilités'
    }
  ];

  return (
    <div className="w-full max-w-4xl  py-8">
      <div className="flex items-center  gap-8">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="text-center">
              <div className="text-4xl text-left font-bold text-[#1f2837] mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
            {index < stats.length - 1 && (
              <div className="h-16 w-px bg-gray-300"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};



const oniqoPage = () => {


  const HeroSection = () => (
    <section className="pt-32 pb-20 px-8">
      <div className=" mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
          <Badge className="mb-4 mt-8 p-4 py-2 text-gray-800 bg-gray-100 text-[14px]">Groupe oniqo</Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 ">
              L'écosystème du voyage réinventé
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Un groupe startup tech de sept marques commerciales à vocation internationale, construisant un écosystème touristique intégré et innovant
            </p>
            <div className="flex gap-4">
              <Button className="bg-[#1f2837] h-14  hover:bg-slate-800 rounded-full px-8">
                Découvrir nos marques →
              </Button>
              <Button variant="outline" className="rounded-full px-8 h-14 border-[#1f2837] border-2">
                Nous contacter
              </Button>
            </div>
            <StatsCards/>
          </div>
          <div className="relative  bg-gray-200 rounded-3xl shadow-xl overflow-hidden">
           <img src={"https://public.readdy.ai/ai/img_res/7f9b9369f7493b01111a1b786e43e96a.jpg"} alt=""  />
            </div>
        </div>
      </div>
    </section>
  );

  const BrandsSection = () => {
     const brands = [
    { name: 'Karta.com',     color: 'from-blue-400/90 to-blue-500/90' },
    { name: 'Wanderlab.com', color: 'from-red-400/90 to-red-500/90' },
    { name: 'Nomadous.com',  color: 'from-green-400/90 to-green-500/90' },
    { name: 'Hootook.com',   color: 'from-purple-400/90 to-purple-500/90' },
    { name: 'Seekzer.com',   color: 'from-yellow-400/90 to-yellow-500/90' },
    { name: 'Nowdream.com',  color: 'from-pink-400/90 to-pink-500/90' },
    { name: 'Roamify.com',   color: 'from-orange-400/90 to-orange-500/90' },
  ];


    return (
     <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-sm text-gray-600 mb-4">NOTRE ÉCOSYSTÈME</div>
        <h2 className="text-5xl font-bold mb-4">Sept marques, une vision</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-xl">
          Chaque marque du groupe oniqo répond à un besoin spécifique du marché touristique mondial
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className={`
                bg-linear-to-br
                ${brand.color} hover:transform hover:-translate-y-2 transition-all duration-300
                rounded-2xl aspect-square flex items-center justify-center
                p-6 text-white font-semibold text-sm
                hover:scale-105 cursor-pointer
              `}
            >
              {brand.name}
            </div>
          ))}
        </div>
      </div>
    </section>
    );
  };

  const StatsSection = () => {
    const stats = [
      { icon: Globe, number: '7', label: 'Marques internationales' },
      { icon: Users2, number: '50+', label: 'Collaborateurs' },
      { icon: LocateIcon, number: '10+', label: 'Pays couverts' },
      { icon: Rocket, number: '100%', label: 'Innovation' },
    ];

    return (
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#1f2837] rounded-xl mb-4">
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const ServicesSection = () => {
    const services = [
      {
        icon: LocateIcon,
        title: 'Mobilité',
        description: 'Solutions de transport et navigation intelligente',
      },
      {
        icon: Building2,
        title: 'Hébergement',
        description: 'Plateforme de réservation et gestion immobilière',
      },
      {
        icon: Calendar,
        title: 'Expériences',
        description: 'Découverte de destinations authentiques',
      },
      {
        icon:Settings,
        title: 'Technologies',
        description: 'Infrastructure digitale et services cloud',
      },
    ];

    return (
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm text-gray-600 mb-4">NOS SOLUTIONS</div>
            <h2 className="text-5xl font-bold mb-4">
             Un écosystème complet  </h2>
                <p className="text-xl text-gray-600 mb-8">
              De la mobilité à l'hébergement, nous couvrons tous les aspects du voyage moderne
          </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#1f2837] rounded-xl mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
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
        <h2 className="text-5xl font-bold mb-8">Rejoignez l'aventure oniqo</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-white h-14 text-[#1f2837] hover:bg-gray-100 rounded-full px-8">
            Espace investisseurs
          </Button>
          <Button variant="outline" className="h-14 border-white bg-[#1f2837] text-white hover:bg-white hover:text-[#1f2837] rounded-full px-8 border-2">
            Voir les opportunités
          </Button>
          <Button variant="outline" className="h-14 border-white bg-[#1f2837] text-white hover:bg-white hover:text-[#1f2837] rounded-full px-8 border-2">
            Nous contacter
          </Button>
        </div>
      </div>
    </section>
  );

const NewsSection = () => {
  const news = [
    {
      category: "Lancement",
      title: "Oniqo Group annonce le lancement de six marques internationales",
      date: "15 Déc 2024",
      image:
        "https://readdy.ai/api/search-image?query=Corporate%20business%20announcement%20with%20modern%20office%20setting%2C%20professional%20press%20conference%20or%20product%20launch%20event%2C%20contemporary%20business%20environment%20with%20presentation%20screens%2C%20clean%20corporate%20aesthetic%20with%20natural%20lighting&width=400&height=300&seq=news-launch-1&orientation=landscape",
    },
    {
      category: "Partenariat",
      title:
        "Partenariat stratégique avec des acteurs majeurs du tourisme",
      date: "10 Déc 2024",
      image:
        "https://readdy.ai/api/search-image?query=Business%20partnership%20handshake%20in%20modern%20corporate%20office%2C%20professional%20meeting%20between%20executives%2C%20contemporary%20business%20setting%20with%20city%20view%2C%20clean%20corporate%20aesthetic%20showing%20collaboration&width=400&height=300&seq=news-partnership-2&orientation=landscape",
    },
    {
      category: "Innovation",
      title:
        "Investissement dans les technologies de voyage de demain",
      date: "5 Déc 2024",
      image:
        "https://readdy.ai/api/search-image?query=Modern%20technology%20innovation%20in%20travel%20industry%2C%20futuristic%20digital%20interfaces%20and%20screens%20showing%20travel%20tech%2C%20contemporary%20innovation%20lab%20with%20advanced%20technology%2C%20clean%20high-tech%20aesthetic&width=400&height=300&seq=news-innovation-3&orientation=landscape",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="text-sm text-gray-600 mb-2">ACTUALITÉS</div>
            <h2 className="text-5xl font-bold">Dernières nouvelles</h2>
          </div>
          <Button variant="link" className="text-[#1f2837]">
            Voir toutes les actualités →
          </Button>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {news.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              {/* IMAGE CONTAINER */}
              <div className="relative h-64 rounded-2xl overflow-hidden">
                {/* Badge */}
                <span className="absolute top-3 left-3 bg-gray-100 text-[#1f2837] text-xs px-3 py-1 rounded-full z-20">
                  {item.category}
                </span>

                {/* Image zoom */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Date */}
              <p className="text-sm text-gray-500 mt-4">{item.date}</p>

              {/* Title */}
              <h3 className="font-medium text-lg mb-1">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



  return (
    <div className="min-h-screen ">
     
      <HeroSection />
      <BrandsSection />
      <StatsSection />
      <ServicesSection />
      <CTASection />
      <NewsSection />
    
    </div>
  );
};

export default oniqoPage;