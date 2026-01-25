import React from 'react';

export default function Progress() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Phase 0 -&gt; Roadmap Creation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select one clearly identified community for the first pilot school,
            supported by a written, evidence-based justification explaining why this
            location is the right starting point.
          </p>
        </div>

        {/* Core Principles */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What We Must Do to Achieve This
            </h2>
            <ol className="space-y-5 text-gray-700">
              <li className="flex gap-3">
                <span className="font-semibold text-gray-900">1.</span>
                <div>
                  <p className="font-semibold text-gray-900">
                    Shortlist candidate communities
                  </p>
                  <p>
                    Use school data, basic demographics, and local insight to
                    identify 3–5 viable locations.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-gray-900">2.</span>
                <div>
                  <p className="font-semibold text-gray-900">
                    Evaluate locations consistently
                  </p>
                  <p>
                    Apply a common comparison framework to assess need,
                    feasibility, community readiness, and accessibility.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-gray-900">3.</span>
                <div>
                  <p className="font-semibold text-gray-900">
                    Document the final choice
                  </p>
                  <p>
                    Produce a concise written rationale explaining the selection
                    and trade-offs.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* Meeting Minutes */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Meeting Minutes
            </h2>
            <p className="text-gray-700 mb-6">
              Official records from Phase 0 coordination and planning meetings.
            </p>
            <a
              href={`${import.meta.env.BASE_URL}data/Phase_0_Meeting_Minutes_Clean_2026-01-26.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
            >
              View Phase 0 Meeting Minutes (Jan 26, 2026)
            </a>
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
