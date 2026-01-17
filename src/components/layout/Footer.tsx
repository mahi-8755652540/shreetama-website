import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const footerLinks = {
  shop: [
    { name: 'Copper Bottles', path: '/shop' },
    { name: 'Copper Glasses', path: '/shop' },
    { name: 'Gift Sets', path: '/shop' },
    { name: 'New Arrivals', path: '/shop' },
  ],
  company: [
    { name: 'About Us', path: '/about' },
    { name: 'Benefits of Copper', path: '/benefits' },
    { name: 'Contact', path: '/contact' },
  ],
  support: [
    { name: 'Shipping Info', path: '/contact' },
    { name: 'Returns & Exchange', path: '/contact' },
    { name: 'Care Instructions', path: '/benefits' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-serif font-bold text-copper-light">
                Shreetama
              </span>
            </Link>
            <p className="text-cream/70 text-sm leading-relaxed mb-6">
              Premium copper drinkware rooted in Ayurveda and traditional Indian craftsmanship. 
              Experience the ancient wisdom of copper-infused water.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-copper transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-copper transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-copper transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-copper-light">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-cream/70 hover:text-copper-light transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-copper-light">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-cream/70 hover:text-copper-light transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-copper-light">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-copper-light mt-0.5" />
                <span className="text-sm text-cream/70">info.shreetama@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-copper-light mt-0.5" />
                <span className="text-sm text-cream/70">+91 9871548224</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-copper-light mt-0.5" />
                <span className="text-sm text-cream/70">
                  Gurgaon Haryana<br />India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cream/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-cream/50">
              © 2024 Shreetama. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-cream/50">
              <span>🇮🇳 Made in India</span>
              <span>•</span>
              <span>100% Pure Copper</span>
              <span>•</span>
              <span>Eco-Friendly</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
