import { Button } from "../ui/button";
import Link from "next/link";
import { Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

export const Footer = () => (
  <footer className="bg-[#0f1419] text-white py-20 px-6 pt-16">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row mb-16 gap-12 md:gap-0">
        
        {/* --- Col 1 --- */}
        <div className="space-y-6 w-full md:w-200">
          <Link
            href="/"
            className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent hover:opacity-90 transition-opacity"
          >
            Oniqo
          </Link>

          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Groupe technologique rassemblant plusieurs marques internationales,
            construisant un écosystème touristique intégré, moderne et innovant.
          </p>

          <div className="flex gap-4">
            {[Linkedin, Twitter, Instagram, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center 
                           hover:bg-white/10 transition-colors border border-white/5"
              >
                <Icon className="w-5 h-5 text-gray-300" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 flex-1">
            {/* --- Col 2 --- */}
        <div>
           <h3 className="font-bold mb-6 text-sm   text-white uppercase tracking-wider">
           Entreprise
          </h3>
          <ul className="space-y-3 text-sm text-gray-400">
            {["À propos","Nos marques","Solutions","Investisseurs","Carrières","Actualités"].map((item,i)=>(
              <li key={i}>
                <Link href="#" className="hover:text-white transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* --- Col 3 --- */}
        <div>
          <h3 className="font-bold mb-6 text-sm   text-white uppercase tracking-wider">
            Nos marques
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
            {[
        "Karta.com",
        "Wanderlate.com",
        "Innminute.com",
        "Hoobnb.com",
        "Homiqio.com",
        "Hoooteeel.com",
        "Rooofy.com"    
        ].map((m,i)=>(
              <li key={i}>
                <a href="#" className="hover:text-white transition-colors">{m}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* --- Col 4 --- */}
        <div>
          <h3 className="font-bold mb-6 text-sm   text-white uppercase tracking-wider">
            Newsletter
          </h3>
          <p className="text-sm text-gray-400 mb-6 leading-relaxed">
            Restez informé de nos actualités
          </p>

          <div className="space-y-3">
            <input
              type="email"
              placeholder="Votre email"
              className="w-full px-4 py-3 rounded-xl bg-white/5 
                         border border-white/10 text-sm text-white placeholder:text-gray-500
                         focus:outline-none focus:ring-2 focus:ring-white/20 transition-all shadow-inner"
            />

            <Button
              className="w-full bg-white hover:bg-white/90 
                        text-[#1f2837] rounded-xl h-12 font-bold 
                         shadow-lg shadow-black/20 border border-white/10"
            >
              S'inscrire
            </Button>
          </div>
        </div>
        </div>
      </div>

      {/* --- Bottom --- */}
      <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
        <div>© 2024 Oniqo Group. Tous droits réservés.</div>
        <div className="flex gap-8">
          <Link href="/mentions" className="hover:text-white transition-colors">Mentions légales</Link>
          <Link href="/mentions" className="hover:text-white transition-colors">Confidentialité</Link>
          <Link href="/mentions" className="hover:text-white transition-colors">Cookies</Link>
          <Link href="/mentions" className="hover:text-white transition-colors font-medium">Powered by Readdy</Link>
        </div>
      </div>
    </div>
  </footer>
);
