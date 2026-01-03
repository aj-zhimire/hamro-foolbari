import React from 'react';

export default function Governance() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Governance Structure
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Community-led governance with transparent decision-making and clear accountability
          </p>
        </div>

        {/* Overview */}
        <section className="mb-16">
          <div className="bg-primary-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">
              Governance Philosophy
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              The school is owned and governed by the community it serves. While we provide
              frameworks and support, ultimate authority rests with local stakeholders who
              understand their community's needs best.
            </p>
            <p className="text-gray-700">
              This approach ensures sustainability, cultural appropriateness, and genuine
              community investment in the school's success.
            </p>
          </div>
        </section>

        {/* Board Structure */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Board Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-semibold text-primary-900 mb-4">
                Local School Board
              </h3>
              <p className="text-gray-600 mb-4">
                Each school has its own board composed of community members, parents, and
                local government representatives.
              </p>
              <h4 className="font-semibold text-gray-900 mb-2">Responsibilities:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Hire and evaluate principal</li>
                <li>✓ Approve annual budget</li>
                <li>✓ Set local policies</li>
                <li>✓ Ensure child safeguarding</li>
                <li>✓ Community engagement</li>
                <li>✓ Monitor school performance</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-primary-900 mb-4">
                Network Support Board
              </h3>
              <p className="text-gray-600 mb-4">
                Provides resources, expertise, and maintains quality standards across all
                schools in the network.
              </p>
              <h4 className="font-semibold text-gray-900 mb-2">Responsibilities:</h4>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Curriculum framework development</li>
                <li>✓ Teacher training programs</li>
                <li>✓ Quality assurance</li>
                <li>✓ Documentation and transparency</li>
                <li>✓ Resource mobilization</li>
                <li>✓ Network expansion support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Charter */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">School Charter</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary-500 pl-6 py-4 bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                1. Mission Adherence
              </h3>
              <p className="text-gray-600">
                All schools must commit to the core principles: learning by doing, local
                governance, civic education, transparency, and neutrality.
              </p>
            </div>
            <div className="border-l-4 border-primary-500 pl-6 py-4 bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                2. Quality Standards
              </h3>
              <p className="text-gray-600">
                Schools must meet minimum standards for facilities, teacher qualifications,
                curriculum delivery, and student outcomes.
              </p>
            </div>
            <div className="border-l-4 border-primary-500 pl-6 py-4 bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                3. Transparency Requirements
              </h3>
              <p className="text-gray-600">
                Public documentation of budgets, decisions, policies, and outcomes. Regular
                reporting to community and network.
              </p>
            </div>
            <div className="border-l-4 border-primary-500 pl-6 py-4 bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                4. Child Safeguarding
              </h3>
              <p className="text-gray-600">
                Comprehensive child protection policies, background checks, training, and
                clear reporting procedures for any concerns.
              </p>
            </div>
          </div>
        </section>

        {/* Code of Ethics */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6">Code of Ethics</h2>
            <p className="text-lg mb-6 opacity-90">
              All staff, board members, and volunteers must adhere to our code of ethics:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Professional Conduct:</h3>
                <ul className="space-y-2 opacity-90">
                  <li>• Put student welfare first always</li>
                  <li>• Maintain professional boundaries</li>
                  <li>• Respect cultural differences</li>
                  <li>• Act with integrity and honesty</li>
                  <li>• Avoid conflicts of interest</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Organizational Values:</h3>
                <ul className="space-y-2 opacity-90">
                  <li>• Uphold transparency principles</li>
                  <li>• Maintain political neutrality</li>
                  <li>• Respect community autonomy</li>
                  <li>• Protect confidential information</li>
                  <li>• Report ethical violations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Child Safeguarding */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Child Safeguarding Policy
          </h2>
          <div className="card bg-red-50 border-l-4 border-red-500">
            <h3 className="text-xl font-semibold text-red-900 mb-4">
              Zero Tolerance for Abuse
            </h3>
            <p className="text-gray-700 mb-4">
              We have zero tolerance for any form of child abuse, neglect, exploitation, or
              harm. Every member of our community is responsible for child protection.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Prevention:</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>✓ Background checks for all staff</li>
                  <li>✓ Child protection training</li>
                  <li>✓ Clear behavior codes</li>
                  <li>✓ Supervision protocols</li>
                  <li>✓ Safe recruitment practices</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Response:</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>✓ Clear reporting procedures</li>
                  <li>✓ Immediate investigation</li>
                  <li>✓ Support for affected children</li>
                  <li>✓ Cooperation with authorities</li>
                  <li>✓ Transparent documentation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Decision Making */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Decision-Making Process
          </h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Proposal & Documentation
                </h3>
                <p className="text-gray-600">
                  All significant decisions start with written proposals including rationale,
                  alternatives considered, and expected impact.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Community Input
                </h3>
                <p className="text-gray-600">
                  Stakeholders have opportunity to provide feedback, raise concerns, and
                  suggest modifications before decisions are finalized.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Board Decision
                </h3>
                <p className="text-gray-600">
                  Appropriate board (local or network) makes final decision through voting,
                  with meeting minutes publicly documented.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                4
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Implementation & Review
                </h3>
                <p className="text-gray-600">
                  Decisions are implemented with clear accountability. Regular review ensures
                  outcomes match intentions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation */}
        <section>
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Full Governance Documentation
            </h2>
            <p className="text-gray-600 mb-6">
              Complete board bylaws, policies, meeting minutes, and governance documents are
              publicly available in our repository.
            </p>
            <a href="/governance" className="btn-primary">
              View All Governance Documents
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
