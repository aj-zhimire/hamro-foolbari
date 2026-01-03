import React from 'react';

export default function Transparency() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transparency & Reporting
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            If it is not documented here, it does not exist.
          </p>
        </div>

        {/* Philosophy */}
        <section className="mb-16">
          <div className="bg-primary-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">
              Our Transparency Philosophy
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Transparency is not just a value - it's our operating system. We believe that
              open documentation creates accountability, enables learning, and allows others
              to build on our work.
            </p>
            <p className="text-gray-700 mb-4">
              This repository serves as the complete institutional record of Hamro Foolbari.
              Every decision, policy, budget, lesson learned, and outcome is documented
              openly.
            </p>
            <p className="text-gray-700 font-semibold">
              Our standard: If something is not documented in this repository, it does not
              exist as part of our official record.
            </p>
          </div>
        </section>

        {/* What We Document */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            What We Document
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Governance',
                icon: '🏛️',
                items: [
                  'Board meeting minutes',
                  'Policies and procedures',
                  'Decision rationales',
                  'Governance structure',
                  'Code of ethics'
                ]
              },
              {
                title: 'Finances',
                icon: '💰',
                items: [
                  'Annual budgets',
                  'Actual expenditures',
                  'Funding sources',
                  'Financial audits',
                  'Funding principles'
                ]
              },
              {
                title: 'Curriculum',
                icon: '📚',
                items: [
                  'Curriculum frameworks',
                  'Lesson plans',
                  'Assessment methods',
                  'Learning materials',
                  'Pedagogical approaches'
                ]
              },
              {
                title: 'Operations',
                icon: '⚙️',
                items: [
                  'Staffing plans',
                  'Teacher training',
                  'Facilities management',
                  'Community engagement',
                  'Daily operations'
                ]
              },
              {
                title: 'Outcomes',
                icon: '📊',
                items: [
                  'Student achievement',
                  'Progress metrics',
                  'Evaluation results',
                  'Impact assessments',
                  'Goal tracking'
                ]
              },
              {
                title: 'Lessons Learned',
                icon: '💡',
                items: [
                  'Challenges faced',
                  'Solutions attempted',
                  'What worked',
                  'What didn\'t work',
                  'Course corrections'
                ]
              }
            ].map((category, index) => (
              <div key={index} className="card">
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {category.title}
                </h3>
                <ul className="space-y-1 text-gray-600">
                  {category.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Reporting Standards */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Reporting Standards
          </h2>
          <div className="space-y-6">
            <div className="card border-l-4 border-primary-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Monthly Progress Reports
              </h3>
              <p className="text-gray-600 mb-2">
                During active operations, we publish monthly updates covering:
              </p>
              <ul className="text-gray-600 space-y-1">
                <li>• Key activities and milestones</li>
                <li>• Challenges encountered and responses</li>
                <li>• Financial summary</li>
                <li>• Community engagement activities</li>
                <li>• Upcoming priorities</li>
              </ul>
            </div>

            <div className="card border-l-4 border-primary-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quarterly Financial Reports
              </h3>
              <p className="text-gray-600 mb-2">
                Detailed financial statements published every quarter including:
              </p>
              <ul className="text-gray-600 space-y-1">
                <li>• Income and expenses by category</li>
                <li>• Budget vs. actual comparisons</li>
                <li>• Cash flow status</li>
                <li>• Significant financial decisions</li>
                <li>• Funding source updates</li>
              </ul>
            </div>

            <div className="card border-l-4 border-primary-500">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Annual Comprehensive Report
              </h3>
              <p className="text-gray-600 mb-2">
                Full annual report covering:
              </p>
              <ul className="text-gray-600 space-y-1">
                <li>• Complete financial audit</li>
                <li>• Student outcome data</li>
                <li>• Program evaluation results</li>
                <li>• Governance activities</li>
                <li>• Strategic review and planning</li>
                <li>• Comprehensive lessons learned</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Funding Principles */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6">Funding Principles</h2>
            <p className="text-lg mb-6 opacity-90">
              We maintain strict principles about funding to preserve our independence and
              mission integrity:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">We Accept:</h3>
                <ul className="space-y-2 opacity-90">
                  <li>✓ Unrestricted donations</li>
                  <li>✓ Mission-aligned grants</li>
                  <li>✓ Community contributions</li>
                  <li>✓ Government education funding</li>
                  <li>✓ Transparent partnerships</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">We Reject:</h3>
                <ul className="space-y-2 opacity-90">
                  <li>✗ Political party funding</li>
                  <li>✗ Religious organization funding</li>
                  <li>✗ Funding with strings attached</li>
                  <li>✗ Sources conflicting with values</li>
                  <li>✗ Opaque funding arrangements</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Repository Structure */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Repository Structure
          </h2>
          <div className="bg-gray-50 rounded-2xl p-8">
            <p className="text-gray-700 mb-6">
              Our documentation is organized in a clear structure for easy navigation:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">📁 curriculum/</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Complete curriculum frameworks, pedagogical approaches, and assessment
                  principles
                </p>

                <h4 className="font-semibold text-gray-900 mb-2">📁 governance/</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Board structure, policies, charter, ethics code, and safeguarding
                </p>

                <h4 className="font-semibold text-gray-900 mb-2">📁 operations/</h4>
                <p className="text-gray-600 text-sm">
                  Staffing, teacher training, community engagement, site feasibility
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">📁 planning/</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Concept notes, execution plans, location rationale, feasibility studies
                </p>

                <h4 className="font-semibold text-gray-900 mb-2">📁 transparency/</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Funding principles, lessons learned, reporting standards
                </p>

                <h4 className="font-semibold text-gray-900 mb-2">📁 website/</h4>
                <p className="text-gray-600 text-sm">
                  Public-facing information and status updates
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Access & Accountability */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Access & Accountability
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
              <h3 className="text-xl font-semibold text-primary-900 mb-3">
                Public Access
              </h3>
              <p className="text-gray-600 mb-3">
                All documentation is publicly accessible online. No login required. No
                paywalls. No restrictions.
              </p>
              <p className="text-gray-600">
                Anyone can read, learn from, and build upon our work. This is intentional
                and central to our mission.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-primary-900 mb-3">
                Accountability Mechanism
              </h3>
              <p className="text-gray-600 mb-3">
                Transparent documentation creates accountability to our community,
                students, funders, and the public.
              </p>
              <p className="text-gray-600">
                Questions or concerns? Contact information and feedback channels are
                clearly provided in governance documents.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="bg-primary-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-primary-900 mb-4">
              Explore Our Documentation
            </h2>
            <p className="text-gray-700 mb-6">
              Browse our complete repository to see how we operate, what we've learned,
              and how you might replicate this model.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/your-repo/hamro-foolbari"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View GitHub Repository
              </a>
              <a href="/progress" className="btn-secondary">
                Track Our Progress
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
