import React from 'react';

export default function Progress() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Project Progress
          </h1>
          <p className="text-xl text-gray-600">
            Transparent tracking of our journey from concept to implementation
          </p>
        </div>

        {/* Current Status */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4">Current Phase: Phase 0 - Planning</h2>
            <p className="text-lg opacity-90 mb-6">
              We are currently in the foundational planning phase, building the framework
              and documentation necessary for a successful launch.
            </p>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-sm font-semibold mb-2">Last Updated: January 2026</p>
              <p className="text-sm opacity-90">
                Repository established, core documentation created, community consultations
                ongoing.
              </p>
            </div>
          </div>
        </section>

        {/* Phase Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Phases</h2>
          
          <div className="space-y-6">
            {/* Phase 0 */}
            <div className="card border-l-4 border-primary-500 bg-primary-50">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="text-2xl font-bold text-primary-900">
                      Phase 0: Planning & Documentation
                    </h3>
                    <span className="ml-4 px-3 py-1 bg-primary-600 text-white text-sm font-semibold rounded-full">
                      In Progress
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Building the institutional foundation and creating comprehensive
                    documentation for transparency and replication.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Completed:</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>✓ Repository established</li>
                        <li>✓ Mission and values defined</li>
                        <li>✓ Curriculum framework drafted</li>
                        <li>✓ Governance structure designed</li>
                        <li>✓ Core policies documented</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">In Progress:</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li>→ Community consultations</li>
                        <li>→ Site feasibility studies</li>
                        <li>→ Teacher identification</li>
                        <li>→ Resource planning</li>
                        <li>→ Partnership development</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 1 */}
            <div className="card border-l-4 border-gray-300">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Phase 1: Proof of Concept School Launch
                    </h3>
                    <span className="ml-4 px-3 py-1 bg-gray-300 text-gray-700 text-sm font-semibold rounded-full">
                      Planned
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Establish the first school in Ramechhap with early childhood through
                    grade 3 initially.
                  </p>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Milestones:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>○ Finalize site and facilities</li>
                    <li>○ Complete teacher recruitment and training</li>
                    <li>○ Establish local school board</li>
                    <li>○ Enroll first cohort of students</li>
                    <li>○ Begin instruction with documentation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="card border-l-4 border-gray-300">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Phase 2: Expansion & Refinement
                    </h3>
                    <span className="ml-4 px-3 py-1 bg-gray-300 text-gray-700 text-sm font-semibold rounded-full">
                      Planned
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Add upper grades, refine curriculum based on experience, and prepare
                    replication materials.
                  </p>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Milestones:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>○ Expand to grades 4-8</li>
                    <li>○ Complete first assessment cycle</li>
                    <li>○ Document lessons learned</li>
                    <li>○ Refine curriculum and pedagogy</li>
                    <li>○ Create replication toolkit</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="card border-l-4 border-gray-300">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Phase 3: Replication
                    </h3>
                    <span className="ml-4 px-3 py-1 bg-gray-300 text-gray-700 text-sm font-semibold rounded-full">
                      Future
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Support additional communities to establish schools using the proven
                    model.
                  </p>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Milestones:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>○ Identify replication sites</li>
                    <li>○ Support 2-3 additional schools</li>
                    <li>○ Establish network support systems</li>
                    <li>○ Share learnings widely</li>
                    <li>○ Enable independent replication</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Progress Metrics We Track
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card text-center">
              <div className="text-4xl mb-3">📝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Documentation
              </h3>
              <p className="text-gray-600">
                Completeness of policies, curriculum, and operational documents
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Community Engagement
              </h3>
              <p className="text-gray-600">
                Level of community participation and ownership
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-3">👨‍🏫</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Teacher Readiness
              </h3>
              <p className="text-gray-600">
                Teacher recruitment, training, and preparedness
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-3">🏗️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Infrastructure
              </h3>
              <p className="text-gray-600">
                Facilities, materials, and resources readiness
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Funding
              </h3>
              <p className="text-gray-600">
                Resource mobilization and financial sustainability
              </p>
            </div>
            <div className="card text-center">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Learning Outcomes
              </h3>
              <p className="text-gray-600">
                Student achievement and development (post-launch)
              </p>
            </div>
          </div>
        </section>

        {/* Status Updates */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Updates</h2>
          <div className="space-y-4">
            <div className="card border-l-4 border-primary-500">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  Status Update #1
                </h3>
                <span className="text-sm text-gray-500">January 2026</span>
              </div>
              <p className="text-gray-600 mb-3">
                Repository established with comprehensive documentation framework. Core
                curriculum, governance, and operational documents created and published.
              </p>
              <a href="/status/status-update-01.html" className="text-primary-600 hover:text-primary-700 font-medium">
                Read full update →
              </a>
            </div>
          </div>
          <p className="text-center text-gray-500 mt-8 italic">
            Regular status updates will be published here as the project progresses
          </p>
        </section>

        {/* Transparency Commitment */}
        <section>
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Commitment to Transparency
            </h2>
            <p className="text-gray-700 text-center mb-6">
              We document all progress, challenges, and learnings openly. This includes
              successes, failures, and course corrections. Transparency enables
              accountability and helps others learn from our experience.
            </p>
            <div className="flex justify-center">
              <a href="/transparency" className="btn-primary">
                View All Transparency Reports
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
