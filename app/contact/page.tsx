"use client"
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Mail, Phone, MapPin, ChevronDown, ChevronUp, Send, Linkedin, X, Facebook, Instagram } from 'lucide-react';

const oniqoContactPage = () => {
  const [openFAQ, setOpenFAQ] = useState<number|null>(null);


 const HeroSection = () => (
  <section
    className="pt-32 pb-16 px-6 text-white relative overflow-hidden"
    style={{
      backgroundColor: '#1f2837',
      backgroundImage: `
        radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px),
        radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)
      `,
      backgroundPosition: '0 0, 20px 20px',
      backgroundSize: '20px 20px',
    }}
  >
    <div className="max-w-4xl mx-auto text-center relative">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
        Contactez-nous
      </h1>
      <p className="text-lg text-gray-300 max-w-3xl mx-auto">
        Notre équipe est à votre écoute pour répondre à toutes vos questions et discuter de vos projets
      </p>
    </div>
  </section>
);


  const ContactSection = () => {
    const [formData, setFormData] = useState({
      prenom: '',
      nom: '',
      email: '',
      telephone: '',
      entreprise: '',
      sujet: '',
      objet: '',
      message: ''
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
      <section className="py-20 px-14">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16">
            <div className='w-full md:w-1/3'>
              <h2 className="text-3xl font-bold mb-4">Informations de contact</h2>
              <p className="text-gray-600 mb-12">
                Nous sommes là pour vous accompagner sur vos besoins et explorer les opportunités de collaboration.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4 flex-col border-gray-200 border p-4 rounded-xl bg-gray-50">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:contact@oniqo.com" className="text-teal-500 hover:text-teal-600">
                      contact@oniqo.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 flex-col border-gray-200 border p-4 rounded-xl bg-gray-50">
                
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Téléphone</div>
                    <a href="tel:+33123456789" className="text-teal-500 hover:text-teal-600">
                      +33 1 23 45 67 89
                    </a>
                  </div>
                </div>

              <div className="flex gap-4 flex-col border-gray-200 border p-4 rounded-xl bg-gray-50">
                
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Siège social</div>
                    <div className="text-gray-600">
                      123 Avenue des Champs-Élysées<br />
                      75008 Paris, France
                    </div>
                  </div>
                </div>

             <div className="flex gap-4 flex-col border-gray-200 border p-4 rounded-xl bg-gray-50">
                
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl">🏢</span>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Horaires</div>
                    <div className="text-gray-600">
                      Lundi - Vendredi<br />
                      9h00 - 18h00 (CET)
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <div className="font-semibold mb-4">Suivez-nous</div>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 bg-[#1f2837] rounded-lg flex items-center justify-center hover:bg-slate-800">
                    <span className="text-white text-xs"><Linkedin/></span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#1f2837] rounded-lg flex items-center justify-center hover:bg-slate-800">
                    <span className="text-white text-xs"><X/></span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#1f2837] rounded-lg flex items-center justify-center hover:bg-slate-800">
                    <span className="text-white text-xs"><Facebook/></span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-[#1f2837] rounded-lg flex items-center justify-center hover:bg-slate-800">
                    <span className="text-white text-xs"><Instagram/></span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 w-full md:w-2/3 border border-gray-200">
              <h3 className="text-2xl font-bold mb-2">Envoyez-nous un message</h3>
              <p className="text-gray-600 mb-6 text-sm">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Prénom <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      placeholder="Votre prénom"
                      className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f2837] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nom <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      className="w-full px-4 py-2 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f2837] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre@email.com"
                      className="w-full px-4 py-2 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f2837] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Téléphone</label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      placeholder="+33 6 12 34 56 78"
                      className="w-full px-4 py-2 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f2837] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Entreprise</label>
                  <input
                    type="text"
                    name="entreprise"
                    value={formData.entreprise}
                    onChange={handleChange}
                    placeholder="Nom de votre entreprise"
                    className="w-full px-4 py-2 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f2837] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Sujet de votre demande <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border  bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f2837] focus:border-transparent"
                  >
                    <option>Sélectionnez un sujet</option>
                    <option>Information générale</option>
                    <option>Partenariat</option>
                    <option>Investissement</option>
                    <option>Support technique</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Objet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="objet"
                    value={formData.objet}
                    onChange={handleChange}
                    placeholder="Objet de votre demande"
                    className="w-full px-4 py-2 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f2837] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Décrivez votre demande en détail..."
                    className="w-full px-4 py-2 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f2837] focus:border-transparent resize-none"
                  ></textarea>
                  <div className="text-xs text-gray-500 mt-1">{formData.message.length}/500 caractères</div>
                </div>

                <Button type="submit" className="w-full bg-teal-700 hover:bg-teal-800 rounded-xl h-14 py-6">
                  Envoyer le message <Send/>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const MapSection = () => (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Notre localisation</h2>
          <p className="text-gray-600">Visitez notre siège social au cœur de Paris</p>
        </div>
        <div className="w-full h-[80vh] bg-gray-300 rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center text-gray-500">
           <iframe 
             src="https://maps.google.com/maps?q=Paris,France&t=&z=13&ie=UTF8&iwloc=&output=embed" 
             width="100%" 
             height="100%" 
             style={{ border: 0 }} 
             allowFullScreen 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
             className=" transition-all duration-500"
            ></iframe>

          </div>
        </div>
      </div>
    </section>
  );

  const FAQSection = () => {
    const faqs = [
      {
        question: "Quels sont les délais de réponse habituels ?",
        answer: "Notre équipe s'engage à répondre à toutes les demandes dans un délai de 24 à 48 heures ouvrées. Pour les demandes urgentes, n'hésitez pas à nous contacter par téléphone."
      },
      {
        question: "Comment puis-je rejoindre le groupe oniqo ?",
        answer: "Nous sommes toujours à la recherche de talents exceptionnels. Consultez notre page Carrières ou envoyez-nous votre candidature spontanée via le formulaire de contact en sélectionnant 'Carrières' comme sujet."
      },
      {
        question: "Proposez-vous des partenariats commerciaux ?",
        answer: "Oui, nous sommes ouverts aux partenariats stratégiques qui peuvent enrichir notre écosystème touristique. Contactez-nous en sélectionnant 'Partenariat commercial' pour discuter des opportunités."
      },
      {
        question: "Comment investir dans le groupe Oniqo ?",
        answer: "Pour toute opportunité d'investissement, veuillez consulter notre page Investisseurs ou nous contacter directement en sélectionnant 'Opportunité d'investissement' dans le formulaire."
      },
      {
        question: "Où puis-je trouver plus d'informations sur vos marques ?",
        answer: "Consultez notre page 'Nos Marques' pour découvrir en détail chacune de nos 6 marques internationales : Karta.com, Wanderlate.com, Innminute.com, Hoobnb.com, Homiqio.com et Hoooteeel.com."
      }
    ];

    return (
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Questions fréquentes</h2>
            <p className="text-gray-600 text-lg">Trouvez rapidement des réponses à vos questions</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-left">{faq.question}</span>
                  {openFAQ === idx ? (
                    <ChevronUp className="w-5 h-5 flex-shrink-0 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 flex-shrink-0 text-gray-500" />
                  )}
                </button>
                {openFAQ === idx && (
                  <div className="px-6 pb-5 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };


  return (
    <div className="min-h-screen bg-white">
    
      <HeroSection />
      <ContactSection />
      <MapSection />
      <FAQSection />
      
    </div>
  );
};

export default oniqoContactPage;