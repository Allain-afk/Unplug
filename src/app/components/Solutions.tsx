import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Solutions = () => {
  const measures = [
    "Set daily screen time limits using built-in phone features or apps.",
    "Disable non-essential notifications to reduce constant interruptions.",
    "Establish designated 'device-free' periods, like during meals or before bed.",
    "Engage actively in offline activities such as sports, reading, or socializing.",
    "Practice mindful usage by asking yourself 'Why am I opening this app?'"
  ];

  return (
    <section id="solutions" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold mb-6 tracking-wide">
              Prevention & Solutions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Taking Back Control of Your Time
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Regaining balance doesn't mean abandoning technology altogether. It means establishing healthy boundaries and being intentional about how and when you connect.
            </p>
            
            <ul className="space-y-5">
              {measures.map((measure, index) => (
                <li key={index} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-emerald-100 text-emerald-600 rounded-full p-1 mt-0.5 flex-shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="text-slate-700 font-medium">{measure}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:w-1/2 w-full">
            <div className="aspect-square bg-gradient-to-tr from-blue-100 to-emerald-50 rounded-3xl p-8 relative flex items-center justify-center border border-slate-200 overflow-hidden">
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm z-0"></div>
              <div className="relative z-10 text-center space-y-6 max-w-sm">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto shadow-xl text-blue-600">
                  <ShieldCheck size={48} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Your Wellbeing First</h3>
                <p className="text-slate-600">Small daily habits build up to significant changes in your digital lifestyle.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
