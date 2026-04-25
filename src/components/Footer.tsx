import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Globe,
  Instagram,
  Mail,
  MapPin,
  PhoneCall,
} from "lucide-react";
import logo from './images/logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Products", path: "/products" },
    // { label: "Service", path: "/services" },
    { label: "Gallery", path: "/gallery" },
    // { label: "Testimonials", path: "/testimonials" },
    { label: "Contacts", path: "/contact" },
  ];

  const productItems = [
    { label: "Wall Plaster", path: "/products" },
    { label: "Wall Putty", path: "/products" },
    { label: "Wall Primer", path: "/products" },
    { label: "Dr. Proof", path: "/products" },
    { label: "Gypsum Plaster", path: "/products" },
    { label: "Water Treater", path: "/products" },
  ];

  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Logo & About Section */}
          <div>
            <Link
              to="/"
              onClick={scrollToTop}
              className="flex items-center space-x-2 mb-6 hover:opacity-80 transition-opacity duration-300"
            >
              {/* Increased Logo Size from h-12 to h-20 */}
              <img src={logo} alt="Krisey Logo" className="w-auto h-20 object-contain" />
            </Link>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Innovative wall solutions crafted with sustainability, durability,
              and customer satisfaction at the core.
            </p>

            <div className="flex space-x-3">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="bg-white border border-gray-200 p-2.5 rounded-full text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 shadow-sm"
                title="Visit our Facebook page"
              >
                <Facebook size={18} />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="bg-white border border-gray-200 p-2.5 rounded-full text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 shadow-sm"
                title="Follow us on Instagram"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="bg-white border border-gray-200 p-2.5 rounded-full text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 shadow-sm"
                title="Visit our website"
              >
                <Globe size={18} />
              </a>

              <a
                href="#"
                className="bg-white border border-gray-200 p-2.5 rounded-full text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 shadow-sm"
                title="Send email to info"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Quick Links
              <div className="h-1 w-12 bg-red-600 rounded-full mt-2"></div>
            </h3>
            <ul className="space-y-3">
              {navItems.map((item, index) => (
                <li key={`footer-nav-${index}`}>
                  <Link
                    to={item.path}
                    onClick={scrollToTop}
                    className="text-gray-600 font-medium hover:text-red-600 hover:pl-2 transition-all duration-300 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Section */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Our Products
              <div className="h-1 w-12 bg-red-600 rounded-full mt-2"></div>
            </h3>
            <ul className="space-y-3">
              {productItems.map((item, index) => (
                <li key={`footer-product-${index}`}>
                  <Link
                    to={item.path}
                    onClick={scrollToTop}
                    className="text-gray-600 font-medium hover:text-red-600 hover:pl-2 transition-all duration-300 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section (Dummy Data) */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">
              Contact Information
              <div className="h-1 w-12 bg-red-600 rounded-full mt-2"></div>
            </h3>

            <div className="space-y-5 text-sm">
              <div className="flex items-start">
                <div className="bg-red-50 p-2 rounded-lg shrink-0 mr-3">
                  <MapPin size={18} className="text-red-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-semibold mb-1">Addresses:</p>
                  <p className="text-gray-600 leading-relaxed mb-2">
                    123 Industrial Estate, Phase II, Sector A,
                    Metro City - 123456
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    456 Tech Park Boulevard, North Wing, METRO CITY-123457
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-50 p-2 rounded-lg shrink-0 mr-3">
                  <PhoneCall size={18} className="text-red-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-semibold mb-1">Contact:</p>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-600 block hover:text-red-600 transition-colors mb-1"
                  >
                    Mob: +123 456 7890
                  </a>
                  <a
                    href="tel:1800000000"
                    className="text-gray-600 block hover:text-red-600 transition-colors"
                  >
                    Tollfree: 1800 000 0000
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-red-50 p-2 rounded-lg shrink-0 mr-3">
                  <Mail size={18} className="text-red-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-semibold mb-1">Email:</p>
                  <a
                    href="mailto:contact@example.com"
                    className="text-gray-600 block hover:text-red-600 transition-colors mb-1"
                  >
                    contact@example.com
                  </a>
                  <a
                    href="mailto:support@example.com"
                    className="text-gray-600 block hover:text-red-600 transition-colors"
                  >
                    support@example.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0 font-medium">
            &copy; {currentYear} Krisey. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm font-medium">
            <Link
              to="/privacy"
              onClick={scrollToTop}
              className="text-gray-500 hover:text-red-600 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              onClick={scrollToTop}
              className="text-gray-500 hover:text-red-600 transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;