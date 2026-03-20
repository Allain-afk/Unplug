import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="flex flex-col lg:flex-row">
            
            {/* Contact Info */}
            <div className="lg:w-2/5 bg-blue-700 p-12 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-blue-100 mb-12 text-lg">
                  Join our advocacy, share your story, or ask us any questions about digital wellbeing.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="text-blue-300 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-lg">Email Us</h4>
                      <p className="text-blue-200">hello@unplugadvocacy.org</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="text-blue-300 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-lg">Call Us</h4>
                      <p className="text-blue-200">+63 (912) 345 6789</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="text-blue-300 mt-1" size={24} />
                    <div>
                      <h4 className="font-semibold text-lg">Visit Us</h4>
                      <p className="text-blue-200">6000, Lahug Cebu City, Philippines<br/>University of Southern Philippines Foundation.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-16">
                <h4 className="font-semibold mb-4 text-blue-200">Follow Our Journey</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                    {/* Placeholder for social icons */}
                    <span className="font-bold">fb</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                    <span className="font-bold">ig</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                    <span className="font-bold">tw</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:w-3/5 p-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Send a Message</h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-white text-slate-900"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-white text-slate-900"
                      placeholder="jane@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-white text-slate-900"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-shadow bg-white text-slate-900 resize-none"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-600/20"
                >
                  <Send size={18} /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
