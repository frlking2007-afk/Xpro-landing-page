import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">X</span>
              </div>
              <span className="font-bold text-xl text-white">Pro</span>
            </div>
            <p className="text-sm text-gray-400">
              Restoran biznesini avtomatlashtirishning ishonchli hamkori. Sizning muvaffaqiyatingiz - bizning maqsadimiz.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Bog'lanish</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm hover:text-white transition-colors cursor-pointer">
                <Phone size={16} />
                <span>+998 90 123 45 67</span>
              </div>
              <div className="flex items-center gap-2 text-sm hover:text-white transition-colors cursor-pointer">
                <Mail size={16} />
                <span>info@xpro-kassa.uz</span>
              </div>
              <div className="flex items-center gap-2 text-sm hover:text-white transition-colors cursor-pointer">
                <MapPin size={16} />
                <span>Toshkent sh., Chilonzor tumani</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Ijtimoiy tarmoqlar</h4>
            <div className="flex gap-4">
               {/* Social placeholders */}
               <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">TG</a>
               <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">IG</a>
               <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors">FB</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} X Pro. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>
  );
};

export default Footer;