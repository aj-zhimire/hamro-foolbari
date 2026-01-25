import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            <p className="text-primary-100 text-sm uppercase tracking-widest mb-4">
              Current Phase 0 Objective
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Select the first pilot community
            </h1>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
              Select one clearly identified community for the first pilot school,
              supported by a written, evidence-based justification explaining why this
              location is the right starting point.
            </p>
            <div className="max-w-3xl mx-auto text-left bg-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-semibold mb-4">Three action items</h2>
              <ol className="space-y-4 text-primary-50">
                <li className="flex gap-3">
                  <span className="font-semibold">1.</span>
                  <span>Shortlist 3–5 candidate communities using school data, demographics, and local insight.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold">2.</span>
                  <span>Evaluate locations consistently across need, feasibility, readiness, and accessibility.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold">3.</span>
                  <span>Document the final choice with a concise rationale and trade-offs.</span>
                </li>
              </ol>
            </div>
            <div className="mt-10">
              <Link to="/mission" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Read the Mission
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>
    </div>
  );
}
