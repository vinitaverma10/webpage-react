import React from 'react';
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact = ({ handleContactClick, phoneNumber }) => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400 text-lg">We're here to help you with all your two-wheeler needs</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <button
            onClick={() => handleContactClick('whatsapp')}
            className="group bg-gradient-to-br from-green-500 to-green-600 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 text-center"
          >
            <MessageCircle className="w-16 h-16 mx-auto mb-4 text-white group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold mb-2 text-white">WhatsApp</h3>
            <p className="text-white text-lg font-semibold">Chat with us</p>
            <p className="text-green-100 text-sm mt-2">Instant Response</p>
          </button>
          
          <button
            onClick={() => handleContactClick('call')}
            className="group bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 text-center"
          >
            <Phone className="w-16 h-16 mx-auto mb-4 text-white group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold mb-2 text-white">Call Us</h3>
            <p className="text-white text-lg font-semibold">{phoneNumber}</p>
            <p className="text-blue-100 text-sm mt-2">Direct Support</p>
          </button>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-8 rounded-2xl shadow-xl text-center">
            <MapPin className="w-16 h-16 mx-auto mb-4 text-white" />
            <h3 className="text-2xl font-bold mb-2 text-white">Location</h3>
            <p className="text-white text-lg">Indore</p>
            <p className="text-purple-100 text-sm mt-2">Madhya Pradesh</p>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-red-600 p-8 rounded-2xl shadow-xl text-center">
            <Clock className="w-16 h-16 mx-auto mb-4 text-white" />
            <h3 className="text-2xl font-bold mb-2 text-white">Hours</h3>
            <p className="text-white">Mon-Sat: 9AM-8PM</p>
            <p className="text-orange-100 text-sm mt-2">Sunday: 10AM-6PM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;