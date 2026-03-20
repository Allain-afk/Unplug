import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1764072955156-ffe88e8ca249?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZGV0b3glMjBuYXR1cmUlMjBwZXJzb258ZW58MXx8fHwxNzczOTkyNTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Digital Detox Nature"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold mb-6 tracking-wide uppercase">
          Digital Wellbeing Advocacy
        </span>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-tight">
          Unplug to <span className="text-blue-600">Reconnect</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed">
          Maintaining a healthy balance between online and offline life is crucial. Learn the risks of excessive use and join our community in practicing responsible digital behavior.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="#about" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center">
            Learn More
          </a>
          <a href="#effects" className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 rounded-full font-medium transition-all shadow-sm flex items-center justify-center">
            Understand the Effects
          </a>
          <a href="#challenge" className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-medium transition-all shadow-lg shadow-emerald-600/30 flex items-center justify-center">
            Start a Digital Detox <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};
