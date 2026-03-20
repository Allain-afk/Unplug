import React, { useState } from 'react';
import { Brain, BookOpen, Users, Activity, CheckCircle2 } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Effects = () => {
  const [activeTab, setActiveTab] = useState('mental');

  const tabs = [
    { id: 'mental', label: 'Mental Health', icon: <Brain size={20} /> },
    { id: 'academic', label: 'Academic & Cognitive', icon: <BookOpen size={20} /> },
    { id: 'social', label: 'Social Interactions', icon: <Users size={20} /> },
    { id: 'physical', label: 'Physical Health', icon: <Activity size={20} /> },
  ];

  const content = {
    mental: [
      "Increased anxiety and stress levels",
      "Depression symptoms and feelings of inadequacy",
      "Decreased self-esteem due to constant comparison"
    ],
    academic: [
      "Reduced concentration and focus",
      "Increased procrastination on assignments",
      "Poor academic performance and lower grades"
    ],
    social: [
      "Reduced face-to-face interactions",
      "Weakened interpersonal communication skills",
      "Isolation despite being digitally connected"
    ],
    physical: [
      "Sleep disturbances and insomnia",
      "Eye strain, digital fatigue, and headaches",
      "Sedentary lifestyle leading to poor posture"
    ]
  };

  return (
    <section id="effects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Effects of Dependency</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 text-lg">Excessive screen time affects almost every aspect of daily life.</p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
          <div className="flex flex-col md:flex-row border-b border-slate-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={twMerge(
                  "flex-1 flex items-center justify-center gap-2 py-4 px-6 text-sm font-medium transition-colors border-b-2",
                  activeTab === tab.id
                    ? "border-blue-600 text-blue-700 bg-white"
                    : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                )}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
          
          <div className="p-8 md:p-12 bg-white min-h-[250px] flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              {tabs.find(t => t.id === activeTab)?.icon}
              {tabs.find(t => t.id === activeTab)?.label} Effects
            </h3>
            <ul className="space-y-4">
              {content[activeTab as keyof typeof content].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700 text-lg">
                  <CheckCircle2 className="text-red-500 mt-1 flex-shrink-0" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
