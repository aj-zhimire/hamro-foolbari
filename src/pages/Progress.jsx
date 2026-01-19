import React from 'react';

export default function Progress() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Phase 0: Foundation
          </h1>
          <p className="text-xl text-gray-600">
            A narrow, practical rollout focused on proving the core model.
          </p>
        </div>

        {/* What Phase 0 Covers */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4">What Phase 0 Covers</h2>
            <p className="text-lg opacity-90 mb-6">
              We focus only on the minimum needed to validate the model before launch.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white/10 rounded-lg p-4">
                <p className="font-semibold mb-2">Core outcomes</p>
                <ul className="space-y-1 opacity-90">
                  <li>✓ Local community alignment</li>
                  <li>✓ Lean curriculum outline</li>
                  <li>✓ Baseline governance structure</li>
                  <li>✓ Initial resource map</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="font-semibold mb-2">How we validate</p>
                <ul className="space-y-1 opacity-90">
                  <li>✓ Listening sessions with families</li>
                  <li>✓ Teacher interest and fit</li>
                  <li>✓ Site feasibility checks</li>
                  <li>✓ Transparent documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Current Focus */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Current Focus</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Community + partners',
                description: 'Build local ownership with parents, educators, and civic leaders.',
                icon: '🤝',
              },
              {
                title: 'Phase 0 plan',
                description: 'Finalize a minimum viable scope for the pilot school.',
                icon: '🧭',
              },
              {
                title: 'Resource readiness',
                description: 'Identify space, tools, and funding needed to begin.',
                icon: '🏗️',
              },
            ].map((item, index) => (
              <div key={index} className="card text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Support Needed */}
        <section>
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Support We Need in Phase 0
            </h2>
            <p className="text-gray-700 text-center mb-6">
              We are seeking local advocates, educators, and aligned partners who care about
              a transparent, community-owned model.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Local partners</h3>
                <p className="text-gray-600">
                  Help connect us to families, local leaders, and potential spaces.
                </p>
              </div>
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Education support</h3>
                <p className="text-gray-600">
                  Share curriculum expertise, teacher training ideas, and practical tools.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
