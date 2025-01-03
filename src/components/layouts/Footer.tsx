'use client';

import Link from 'next/link';
import { MapPin, Mail, Phone, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-secondary-500 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">CorpInsights</h3>
            <p className="text-sm text-white/70">
              Empowering B2B companies with scalable, human-centric tech solutions.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={20} />} />
              <SocialLink href="https://twitter.com" icon={<Twitter size={20} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="/growth-lab">Growth Lab</FooterLink>
              <FooterLink href="/success-stories">Success Stories</FooterLink>
              <FooterLink href="/tools-insights">Tools & Insights</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/case-studies">Case Studies</FooterLink>
              <FooterLink href="/guides">Guides</FooterLink>
              <FooterLink href="/newsletter">Newsletter</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-sm text-white/70">
                <Mail className="mr-2 h-4 w-4" />
                <a href="mailto:hello@corpinsights.com" className="hover:text-white transition-colors">
                  hello@corpinsights.com
                </a>
              </li>
              <li className="flex items-center text-sm text-white/70">
                <Phone className="mr-2 h-4 w-4" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-start text-sm text-white/70">
                <MapPin className="mr-2 h-4 w-4 mt-1" />
                <span>
                  123 Business Ave<br />
                  Suite 100<br />
                  City, State 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-sm text-white/70">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p>© {currentYear} CorpInsights. All rights reserved.</p>
            <div className="flex space-x-6">
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
              <FooterLink href="/sitemap">Sitemap</FooterLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper Components
const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link 
      href={href} 
      className="text-sm text-white/70 hover:text-white transition-colors"
    >
      {children}
    </Link>
  </li>
);

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
  >
    {icon}
  </a>
);

export default Footer;