import React from 'react';

const Stats: React.FC = () => {
  return (
    <section id="stats" className="py-20 bg-indigo-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
          <div className="p-6">
            <div className="text-5xl font-extrabold mb-2 text-indigo-300">100+</div>
            <div className="text-lg text-indigo-100">Mamnun restoranlar</div>
          </div>
          <div className="p-6 border-t md:border-t-0 md:border-l border-indigo-700/50">
            <div className="text-5xl font-extrabold mb-2 text-indigo-300">30%</div>
            <div className="text-lg text-indigo-100">O'rtacha foyda o'sishi</div>
          </div>
          <div className="p-6 border-t md:border-t-0 md:border-l border-indigo-700/50">
            <div className="text-5xl font-extrabold mb-2 text-indigo-300">24/7</div>
            <div className="text-lg text-indigo-100">Texnik yordam</div>
          </div>
        </div>
        
        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-white/10">
           <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
             "X Pro tizimini o'rnatganimizdan so'ng, xarajatlarimiz 15% ga qisqardi va o'g'irliklarni butunlay yo'q qildik."
           </h3>
           <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-xl font-bold text-white">
                A
              </div>
              <div className="text-left">
                 <div className="font-bold text-white">Azizbek Rahimov</div>
                 <div className="text-indigo-200 text-sm">"Lazzat" restorani asoschisi</div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;