import React from 'react';
import { BookOpen, Target, Eye } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About the Advocacy</h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <BookOpen size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Definition</h3>
            <p className="text-slate-600 leading-relaxed">
              Social media dependency refers to the excessive and compulsive use of social networking platforms, interfering with daily responsibilities and overall well-being.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
              <Target size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To educate individuals about the risks associated with excessive social media use and promote responsible digital behavior across all age groups.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
              <Eye size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To foster a community that values balanced technology use and prioritizes mental, emotional, and social well-being over virtual validation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
