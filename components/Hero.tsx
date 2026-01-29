import React from 'react';
import { ArrowRight, CheckCircle2, Clock, Menu, TrendingUp, TrendingDown, Calculator, Wallet, CreditCard } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
              </span>
              Yangi avlod tizimi
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Restoran biznesingizni <span className="text-indigo-600">aqlli boshqaring</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              X Pro — bu savdo, ombor va xodimlar nazoratini avtomatlashtiruvchi zamonaviy platforma. Barchasi bitta qulay tizimda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://xpro-kassa.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg transition-all shadow-lg hover:shadow-xl"
              >
                Demoni ko'rish
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </a>
              <a 
                href="#features" 
                className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 md:text-lg transition-all"
              >
                Batafsil ma'lumot
              </a>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> 14 kunlik bepul sinov
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> O'rnatish bepul
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> 24/7 qo'llab-quvvatlash
              </div>
            </div>
          </div>

          <div className="relative mx-auto lg:mr-0 w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-2xl shadow-2xl bg-gray-900 border-4 border-gray-800 overflow-hidden aspect-[4/3] transform rotate-1 hover:rotate-0 transition-transform duration-500">
               
               {/* Dashboard Content - Recreating Image 2 in Dark Mode */}
               <div className="absolute inset-0 bg-gray-900 flex flex-col p-4 sm:p-6 select-none cursor-default">
                  
                  {/* Header */}
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-white font-semibold text-lg">Dashboard</h3>
                    <Menu className="text-gray-400 w-5 h-5" />
                  </div>

                  {/* Smena Status Bar */}
                  <div className="bg-gray-800 rounded-xl p-3 flex items-center justify-between mb-4 shadow-sm border border-gray-700/50">
                     <div className="flex items-center gap-2 text-sm text-gray-300">
                        <Clock className="w-4 h-4 text-green-400" />
                        <span className="truncate hidden sm:inline">Smena - 29/01/2026 10:55</span>
                        <span className="truncate sm:hidden">29/01/2026</span>
                     </div>
                     <div className="px-3 py-1 bg-red-500/10 text-red-400 text-xs font-medium rounded-lg border border-red-500/20 cursor-pointer hover:bg-red-500/20 transition-colors">
                        Yopish
                     </div>
                  </div>

                  {/* Tabs/Filters */}
                  <div className="flex gap-2 overflow-hidden mb-4 pb-1">
                     <div className="bg-indigo-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 shadow-lg shadow-indigo-500/20 whitespace-nowrap">
                        <Wallet className="w-3 h-3" /> Kassa
                     </div>
                     <div className="bg-gray-800 text-gray-400 border border-gray-700 px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 whitespace-nowrap">
                        <CreditCard className="w-3 h-3" /> Click
                     </div>
                     <div className="bg-gray-800 text-gray-400 border border-gray-700 px-3 py-1.5 rounded-lg text-xs font-medium hidden sm:flex items-center gap-1.5 whitespace-nowrap">
                        <CreditCard className="w-3 h-3" /> Uzcard
                     </div>
                      <div className="bg-gray-800 text-gray-400 border border-gray-700 px-3 py-1.5 rounded-lg text-xs font-medium hidden sm:flex items-center gap-1.5 whitespace-nowrap">
                        <TrendingDown className="w-3 h-3" /> Xarajat
                     </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1 content-start">
                     {/* Kassa Summasi */}
                     <div className="bg-gray-800 p-4 rounded-xl border border-gray-700/50 shadow-sm relative overflow-hidden group hover:border-indigo-500/30 transition-colors">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-green-500/5 rounded-full -mr-8 -mt-8 blur-xl"></div>
                        <div className="flex justify-between items-start mb-2">
                           <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Kassa Summasi</span>
                           <div className="w-6 h-6 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
                              <TrendingUp className="w-3.5 h-3.5" />
                           </div>
                        </div>
                        <div className="flex items-baseline gap-1">
                           <span className="text-lg sm:text-xl font-bold text-green-400">18,371,000</span>
                           <span className="text-xs text-gray-500">so'm</span>
                        </div>
                     </div>

                     {/* Umumiy Chiqim */}
                     <div className="bg-gray-800 p-4 rounded-xl border border-gray-700/50 shadow-sm relative overflow-hidden group hover:border-red-500/30 transition-colors">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-red-500/5 rounded-full -mr-8 -mt-8 blur-xl"></div>
                        <div className="flex justify-between items-start mb-2">
                           <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Umumiy Chiqim</span>
                           <div className="w-6 h-6 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400">
                              <TrendingDown className="w-3.5 h-3.5" />
                           </div>
                        </div>
                         <div className="flex items-baseline gap-1">
                           <span className="text-lg sm:text-xl font-bold text-red-400">11,769,000</span>
                           <span className="text-xs text-gray-500">so'm</span>
                        </div>
                     </div>

                     {/* Balans */}
                     <div className="bg-gray-800 p-4 rounded-xl border border-gray-700/50 shadow-sm sm:col-span-2 relative overflow-hidden group hover:border-blue-500/30 transition-colors">
                         <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-full -mr-10 -mt-10 blur-xl"></div>
                        <div className="flex justify-between items-start mb-2">
                           <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold">Balans</span>
                           <div className="w-6 h-6 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                              <Calculator className="w-3.5 h-3.5" />
                           </div>
                        </div>
                        <div className="flex items-baseline gap-1">
                           <span className="text-2xl font-bold text-white">6,602,000</span>
                           <span className="text-sm text-gray-500">so'm</span>
                        </div>
                     </div>
                  </div>

               </div>
               
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;