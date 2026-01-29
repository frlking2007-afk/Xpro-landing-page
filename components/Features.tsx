import React from 'react';
import { ShoppingCart, BarChart3, Users, LayoutDashboard, Smartphone, ShieldCheck } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    title: "Tezkor Kassa",
    description: "Ofitsiantlar uchun qulay interfeys. Buyurtmalarni soniyalar ichida qabul qiling va oshxonaga yuboring.",
    icon: <ShoppingCart className="w-6 h-6 text-white" />,
  },
  {
    title: "Mukammal Hisobot",
    description: "Kunlik, haftalik va oylik savdo tahlili. Eng ko'p sotilayotgan taomlar va foyda monitoringi.",
    icon: <BarChart3 className="w-6 h-6 text-white" />,
  },
  {
    title: "Ombor Nazorati",
    description: "Mahsulotlarning kirim-chiqimi va qoldig'ini avtomatik hisoblash. Kam qolgan mahsulotlar haqida ogohlantirish.",
    icon: <LayoutDashboard className="w-6 h-6 text-white" />,
  },
  {
    title: "Xodimlar Boshqaruvi",
    description: "Ish vaqti, ish haqi va bonuslarni hisoblash. Har bir xodimning samaradorligini kuzatib boring.",
    icon: <Users className="w-6 h-6 text-white" />,
  },
  {
    title: "Mobil Ilova",
    description: "Biznesingizni telefoningiz orqali istalgan joydan boshqaring. Telegram orqali bildirishnomalar oling.",
    icon: <Smartphone className="w-6 h-6 text-white" />,
  },
  {
    title: "Xavfsizlik",
    description: "Ma'lumotlaringiz himoyalangan va bulutli texnologiyalar yordamida doimiy arxivlanib boriladi.",
    icon: <ShieldCheck className="w-6 h-6 text-white" />,
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Imkoniyatlar</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Biznesingiz uchun barcha kerakli vositalar
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            X Pro yordamida ortiqcha qog'ozbozlikdan xalos bo'ling va vaqtingizni biznesni rivojlantirishga sarflang.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="absolute top-8 left-8 w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg transform -translate-y-2">
                {feature.icon}
              </div>
              <div className="mt-12">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;