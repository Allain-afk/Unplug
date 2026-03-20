import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <a href="#home" className="text-2xl font-bold text-white tracking-tight mb-4 inline-block">
              Unplug<span className="text-emerald-500">.</span>
            </a>
            <p className="text-slate-400 max-w-sm mb-6">
              An advocacy campaign dedicated to raising awareness about social media dependency and promoting digital wellbeing in our modern, connected world.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#causes" className="hover:text-white transition-colors">Causes</a></li>
              <li><a href="#effects" className="hover:text-white transition-colors">Effects</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Unplug Advocacy Campaign. All rights reserved.</p>
          <div className="mt-4 md:mt-0 text-right">
            <span className="mr-2">Organized by:</span>
            <span className="font-semibold text-white">Digital Wellness Group</span>
            <div className="text-slate-400 mt-1">Credits: Alexis David & MG Cueva</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
