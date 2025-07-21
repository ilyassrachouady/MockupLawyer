import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const practiceAreas = [
    'Car Accidents', 'Truck Accidents', 'Motorcycle Accidents',
    'Slip & Fall', 'Wrongful Death', 'Medical Malpractice'
  ];

  const resources = [
    { name: 'About Us', path: '/about' },
    { name: 'Client Testimonials', path: '/testimonials' },
    { name: 'Legal Blog', path: '/blog' },
    { name: 'Case Results', path: '/contact' }, // Placeholder
    { name: 'FAQ', path: '/contact' }, // Placeholder
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: '/privacy' }, // Placeholder
    { name: 'Terms of Service', path: '/terms' }, // Placeholder
    { name: 'Legal Disclaimer', path: '/disclaimer' }, // Placeholder
    { name: 'Sitemap', path: '/sitemap' }, // Placeholder
  ];

  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Call to Action Section */}
        <div className="bg-gold text-navy text-center p-8 rounded-lg -mt-28 mb-16 relative shadow-2xl">
          <h2 className="text-3xl font-bold mb-2">Ready to Discuss Your Case?</h2>
          <p className="mb-6">It's free, confidential, and there's no obligation.</p>
          <Link
            to="/free-consultation"
            className="bg-navy text-white px-10 py-4 rounded-md hover:bg-opacity-90 transition-all font-semibold text-lg"
          >
            Get a Free Consultation
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Florida<span className="text-gold">AccidentLawyer</span></h3>
            <p className="text-gray-300">Fighting for accident victims across Florida. We don't get paid unless YOU WIN.</p>
            <div className="space-y-2">
              <a href="tel:+1-800-LAWYER-FL" className="flex items-center hover:text-gold transition-colors"><Phone size={16} className="mr-2" /> (800) LAWYER-FL</a>
              <a href="mailto:info@floridaaccidentlawyer.com" className="flex items-center hover:text-gold transition-colors"><Mail size={16} className="mr-2" /> info@floridaaccidentlawyer.com</a>
              <p className="flex items-center"><MapPin size={16} className="mr-2" /> 123 Legal Plaza, Miami, FL</p>
            </div>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-gold transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-gold transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-lg font-semibold text-gold mb-4">Practice Areas</h3>
            <ul className="space-y-2">
              {practiceAreas.map(area => (
                <li key={area}><Link to="/practice-areas" className="text-gray-300 hover:text-white transition-colors">{area}</Link></li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-gold mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map(link => (
                <li key={link.name}><Link to={link.path} className="text-gray-300 hover:text-white transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-gold mb-4">Legal Information</h3>
            <ul className="space-y-2">
              {legalLinks.map(link => (
                <li key={link.name}><Link to={link.path} className="text-gray-300 hover:text-white transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Florida Accident Lawyer. All Rights Reserved. | Attorney Advertising.</p>
          <p className="mt-2 max-w-3xl mx-auto">Disclaimer: The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;