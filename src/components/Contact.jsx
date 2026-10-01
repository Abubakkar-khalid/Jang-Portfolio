import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#fafafa]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row min-h-[700px]">
        
        {/* Contact Information */}
        <div className="w-full lg:w-1/3 bg-navy-900 text-black p-12 lg:p-16 flex flex-col justify-center">
          <h2 className="text-brand-500 font-bold uppercase tracking-[0.2em] text-sm mb-4">Contact</h2>
          <h3 className="text-4xl font-black font-serif text-black mb-12">Get In Touch</h3>
          
          <div className="space-y-10">
            <div className="group">
              <div className="flex items-center gap-4 mb-2">
                <Phone className="w-5 h-5 text-brand-500" />
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Phone</p>
              </div>
              <p className="text-2xl font-serif text-black">+92 333 5287336</p>
            </div>

            <div className="group">
              <div className="flex items-center gap-4 mb-2">
                <Mail className="w-5 h-5 text-brand-500" />
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Email</p>
              </div>
              <p className="text-lg font-serif text-black">irads007@gmail.com</p>
            </div>

            <div className="group">
              <div className="flex items-center gap-4 mb-2">
                <MapPin className="w-5 h-5 text-brand-500" />
                <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Office Location</p>
              </div>
              <p className="text-lg font-serif text-black leading-relaxed">Jang Office 9 Ground floor Laraib Plaza G-9 Markaz Islamabad, Pakistan </p>
            </div>
          </div>
        </div>

        {/* Full Map */}
        <div className="w-full lg:w-2/3 h-[500px] lg:h-auto">
          <iframe 
            src="https://maps.google.com/maps?q=Jang%20Office,%20Laraib%20Plaza,%20G-9%20Markaz,%20Islamabad&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          ></iframe>
        </div>

      </div>
    </section>
  );
}
