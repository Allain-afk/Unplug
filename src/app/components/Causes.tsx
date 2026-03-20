import React from 'react';
import { Smartphone, Bell, Users, RefreshCw } from 'lucide-react';

export const Causes = () => {
  const causes = [
    {
      icon: <Smartphone size={24} />,
      title: "Instant Gratification",
      description: "Dopamine-driven engagement cycles reward constant checking and scrolling."
    },
    {
      icon: <Bell size={24} />,
      title: "Fear of Missing Out (FOMO)",
      description: "Anxiety that an exciting or interesting event may currently be happening elsewhere."
    },
    {
      icon: <Users size={24} />,
      title: "Social Validation",
      description: "Peer influence and the desire for likes, comments, and digital approval."
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Algorithmic Design",
      description: "Endless scrolling and personalized content reinforcement designed to maximize attention."
    }
  ];

  return (
    <section id="causes" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Causes of Dependency</h2>
          <div className="h-1 w-20 bg-emerald-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 text-lg">Understanding the psychological and technological drivers behind social media overuse.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {causes.map((cause, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-full flex items-center justify-center mb-6">
                {cause.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{cause.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{cause.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
