import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section className="py-24 bg-blue-700 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
        </svg>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <Quote size={48} className="mx-auto mb-8 text-blue-300 opacity-50" />
        <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-10 text-blue-50">
          "A student reported spending excessive hours on social media, leading to decreased academic performance and lack of motivation. After reducing screen time, significant improvements were observed in productivity, focus, and overall mental well-being."
        </blockquote>
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center font-bold text-xl">
            S
          </div>
          <div className="text-left">
            <div className="font-bold text-lg">Case Example</div>
            <div className="text-blue-200 text-sm">University Student</div>
          </div>
        </div>
      </div>
    </section>
  );
};
