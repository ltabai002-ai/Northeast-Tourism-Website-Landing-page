import { Mountain, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/ltabai logo copy.jpg"
                alt="LTAB Logo"
                className="w-12 h-12 object-contain rounded-lg"
              />
              <span className="text-xl font-bold text-white">Ltab Ai</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Empowering Northeast Tourism Through Technology
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/ltabindia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-teal-600 flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/ltabai.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-pink-600 flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-400 flex-shrink-0 mt-1" />
                <span>Guwahati, Assam, Northeast India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a href="tel:+916000683808" className="hover:text-teal-400 transition-colors duration-300">
                  +91 6000683808
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-teal-400 flex-shrink-0" />
                <a href="mailto:Contactus@blueantdigitech.com" className="hover:text-teal-400 transition-colors duration-300">
                  Contactus@blueantdigitech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 LTAB AI. All rights reserved. Built with passion for Northeast India's tourism industry.
          </p>
        </div>
      </div>
    </footer>
  );
}
