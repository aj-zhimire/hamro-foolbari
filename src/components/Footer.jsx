import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Hamro Foolbari</h3>
            <p className="text-sm mb-4">
              Sajha Foolbari Gyan Kunja is a non-profit school system committed to
              education through doing, civic awareness, and community ownership.
            </p>
            <p className="text-sm text-gray-400">Ramechhap, Nepal</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/mission" className="hover:text-white transition-colors">
                  Mission & Values
                </Link>
              </li>
              <li>
                <Link to="/phase-0" className="hover:text-white transition-colors">
                  Phase 0 Plan
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Principles */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Core Principles</h3>
            <ul className="space-y-2 text-sm">
              <li>✓ Learning by doing</li>
              <li>✓ Local teachers and governance</li>
              <li>✓ Civic education as a parallel track</li>
              <li>✓ Transparency by default</li>
              <li>✓ No religious or political affiliation</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>
            © {currentYear} Hamro Foolbari, Sajha Foolbari Gyan Kunja. All rights reserved.
          </p>
          <p className="mt-2 text-gray-400">
            If it is not documented here, it does not exist.
          </p>
        </div>
      </div>
    </footer>
  );
}
