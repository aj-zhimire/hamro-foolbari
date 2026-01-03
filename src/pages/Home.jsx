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
              A non-profit school system starting in Ramechhap, Nepal, designed for
              disciplined, transparent replication across underserved regions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/mission" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Learn About Our Mission
              </Link>
              <Link to="/transparency" className="btn-secondary border-white text-white hover:bg-white/10">
                View Transparency Reports
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Core Principles</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              These principles guide every decision we make and every action we take
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Learning by Doing',
                description: 'Hands-on experiential education that connects learning to real-world applications',
                icon: '🌱'
              },
              {
                title: 'Local Teachers & Governance',
                description: 'Community-led management with local teachers who understand the cultural context',
                icon: '👥'
              },
              {
                title: 'Civic Education',
                description: 'Parallel track building responsible citizens who understand their rights and duties',
                icon: '🏛️'
              },
              {
                title: 'Transparency by Default',
                description: 'Open documentation of everything - if it\'s not documented, it doesn\'t exist',
                icon: '📖'
              },
              {
                title: 'No Affiliation',
                description: 'Strictly neutral - no religious or political affiliation',
                icon: '🤝'
              },
              {
                title: 'Community Ownership',
                description: 'Built by the community, for the community, owned by the community',
                icon: '🏡'
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

      {/* Why This Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Why This Matters</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Nepal's education system faces significant challenges in rural areas.
                  Traditional approaches often fail to engage students or prepare them
                  for real-world challenges.
                </p>
                <p>
                  Hamro Foolbari takes a different approach - one that empowers communities,
                  respects local knowledge, and builds practical skills alongside academic
                  excellence.
                </p>
                <p>
                  Our proof-of-concept in Ramechhap will demonstrate that quality education
                  is possible even in underserved regions, creating a model that can be
                  replicated transparently and effectively.
                </p>
              </div>
              <Link to="/why-ramechhap" className="btn-primary mt-8 inline-block">
                Why We Chose Ramechhap
              </Link>
            </div>
            <div className="bg-primary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary-900 mb-6">Key Focus Areas</h3>
              <ul className="space-y-4">
                {[
                  'Early childhood through grade 8 curriculum',
                  'Civic education integrated throughout',
                  'Learning by doing pedagogy',
                  'Local teacher training programs',
                  'Community engagement strategies',
                  'Child safeguarding policies',
                  'Transparent governance structure'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Record */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            This Repository is Our Institutional Record
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            "If it is not documented here, it does not exist."
          </p>
          <p className="text-gray-400 mb-8">
            We believe in radical transparency. Every decision, every policy, every lesson
            learned is documented openly. This creates accountability and enables others
            to learn from and replicate our model.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/transparency" className="btn-primary">
              View Our Documentation
            </Link>
            <Link to="/governance" className="btn-secondary border-white text-white hover:bg-white/10">
              Governance Structure
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title text-primary-900">Get Involved</h2>
          <p className="text-lg text-gray-700 mb-8">
            Whether you're an educator, community member, or supporter of quality education,
            there are many ways to contribute to Hamro Foolbari.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Learn More</h3>
              <p className="text-gray-600 mb-4">Explore our curriculum, governance, and approach</p>
              <Link to="/curriculum" className="text-primary-600 font-medium hover:text-primary-700">
                View Curriculum →
              </Link>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Track Progress</h3>
              <p className="text-gray-600 mb-4">Follow our journey from planning to implementation</p>
              <Link to="/progress" className="text-primary-600 font-medium hover:text-primary-700">
                View Progress →
              </Link>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold text-primary-900 mb-2">Ask Questions</h3>
              <p className="text-gray-600 mb-4">Use our AI assistant to learn about the project</p>
              <button
                onClick={() => {
                  // Trigger chat widget
                  const event = new CustomEvent('openChat');
                  window.dispatchEvent(event);
                }}
                className="text-primary-600 font-medium hover:text-primary-700"
              >
                Start Chat →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
