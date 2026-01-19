import React from 'react';

export default function Progress() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Phase 0: Open by Design
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This phase exists for one purpose: radical transparency.
          </p>
        </div>

        {/* Core Principles */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Progress, shared openly',
                description:
                  'This page will be a live record of our work—decisions made, steps completed, and milestones reached. No polished storytelling. Just honest progress, shared as it happens.',
              },
              {
                title: 'Clear, consistent messaging',
                description:
                  'We will communicate what we are doing, why we are doing it, and what comes next—clearly and repeatedly—so everyone stays aligned, informed, and engaged.',
              },
              {
                title: 'Challenges, not hidden',
                description:
                  'We will openly publish issues, constraints, and roadblocks as they arise. These realities are part of building something meaningful, and sharing them creates opportunities for local insight, collaboration, and solutions.',
              },
              {
                title: 'An invitation to participate',
                description:
                  'By making our process visible, we invite educators, community members, and well-wishers to contribute knowledge, guidance, and support—where it truly helps.',
              },
            ].map((item, index) => (
              <div key={index} className="card">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h2>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing */}
        <section>
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <p className="text-lg text-gray-700 mb-2">
              This phase is not about perfection.
            </p>
            <p className="text-gray-700">
              It is about trust, clarity, and collective momentum.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
