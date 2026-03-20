import React from 'react';
import { Calendar, MonitorOff, Moon, Compass } from 'lucide-react';

export const Challenge = () => {
  const days = [
    {
      day: "Day 1",
      title: "Awareness",
      description: "Monitor and record your screen time without changing your habits. Understand your baseline.",
      icon: <Calendar size={24} />
    },
    {
      day: "Day 2",
      title: "Reduction",
      description: "Reduce overall usage by a set duration (e.g., 30 minutes or 1 hour less than Day 1).",
      icon: <MonitorOff size={24} />
    },
    {
      day: "Day 3",
      title: "Rest",
      description: "Avoid any social media for at least 2 hours before sleeping to improve sleep quality.",
      icon: <Moon size={24} />
    },
    {
      day: "Day 4",
      title: "Reconnection",
      description: "Engage in offline recreational activities and leave your phone in another room.",
      icon: <Compass size={24} />
    }
  ];

  return (
    <section id="challenge" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Digital Detox Challenge</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 text-lg">A structured, 4-day program to reset your relationship with social media.</p>
        </div>

        <div className="relative">
          {/* Connecting Line for desktop */}
          <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] w-[75%] h-1 bg-slate-200 -translate-y-1/2 z-0 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {days.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-white border-4 border-slate-100 group-hover:border-blue-500 rounded-full flex items-center justify-center text-blue-600 shadow-md transition-all duration-300 mb-6 relative">
                  {step.icon}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-sm border-2 border-white">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.day}: {step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-full font-bold shadow-lg shadow-red-500/30 transition-all text-lg">
            Join the Challenge Today
          </button>
        </div>
      </div>
    </section>
  );
};
