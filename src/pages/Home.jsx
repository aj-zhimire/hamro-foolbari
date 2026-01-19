import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hamro Foolbari, Sajha Foolbari Gyan Kunja
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Education through doing, civic awareness, and community ownership
            </p>
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto">
              We are in Phase 0, building the proof-of-concept for a community-owned
              school in Ramechhap, Nepal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/mission" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Mission & Values
              </Link>
              <Link to="/phase-0" className="btn-secondary border-white text-white hover:bg-white/10">
                Phase 0 Plan
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Goal, Mission, Ideas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Goal, Mission, Ideas</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              The essentials we want people to understand in the first five minutes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Goal',
                description: 'Launch a proof-of-concept community school that demonstrates quality education can thrive in underserved regions.',
                icon: '🎯'
              },
              {
                title: 'Mission',
                description: 'Empower students through hands-on learning and civic awareness, rooted in local ownership and accountability.',
                icon: '🌱'
              },
              {
                title: 'Ideas',
                description: 'Learning by doing, civic responsibility, local teachers, and transparency by default.',
                icon: '💡'
              }
            ].map((principle, index) => (
              <div key={index} className="card text-center">
                <div className="text-5xl mb-4">{principle.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{principle.title}</h3>
                <p className="text-gray-600">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Do It */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">How We Do It</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              A lean, disciplined path from concept to a working pilot.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Community-first planning',
                description: 'Start with local educators, parents, and leaders to define needs and ownership.',
              },
              {
                title: 'Learning-by-doing design',
                description: 'Build a practical curriculum that connects academics to real-world projects.',
              },
              {
                title: 'Transparent documentation',
                description: 'Document every policy, decision, and lesson so the model is replicable.',
              },
              {
                title: 'Phase 0 proof-of-concept',
                description: 'Focus on one site, one team, and a minimum viable school launch plan.',
              },
            ].map((item, index) => (
              <div key={index} className="card">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phase 0 Focus */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Phase 0 Focus</h2>
          <p className="text-xl text-gray-300 mb-10">
            This rollout is intentionally narrow. We are only validating the foundation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              {
                title: 'Community alignment',
                detail: 'Confirm local partners, governance support, and teacher interest.',
              },
              {
                title: 'Minimum viable plan',
                detail: 'Define a lean scope for a single site and an initial cohort.',
              },
              {
                title: 'Transparent record',
                detail: 'Document policies, curriculum outline, and resource needs.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/phase-0" className="btn-primary">
              Read the Phase 0 Plan
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
