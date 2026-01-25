import React from 'react';

export default function Home() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
            Mission, Vision & Values
          </h1>
          <p className="text-xl text-gray-600">
            The foundation of Hamro Foolbari, Sajha Foolbari Gyan Kunja
          </p>
        </div>

        {/* Mission + Vision */}
        <section className="mb-16">
          <div className="bg-primary-50 rounded-2xl p-8 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To provide quality, community-owned education that empowers students through
              hands-on learning and civic awareness, creating responsible citizens who can
              improve their communities and the world around them.
            </p>
            <div className="mt-8 pt-6 border-t border-primary-100 shadow-[inset_0_8px_12px_-12px_rgba(15,23,42,0.25)]">
              <h2 className="text-3xl font-bold text-primary-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                A network of transparent, replicable community schools across Nepal and beyond,
                where every child receives education that prepares them for real life, builds
                character, and instills a sense of civic responsibility.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Transparency',
                description: 'We document everything openly. If it\'s not documented, it doesn\'t exist. This creates accountability and enables replication.',
                icon: '🔍'
              },
              {
                title: 'Community Ownership',
                description: 'Schools belong to and are governed by their communities. Local voices matter most in decisions about education.',
                icon: '🏘️'
              },
              {
                title: 'Practical Learning',
                description: 'Knowledge without application is incomplete. We emphasize learning by doing and connecting education to real life.',
                icon: '🛠️'
              },
              {
                title: 'Civic Responsibility',
                description: 'Education must build responsible citizens who understand their rights, duties, and role in democratic society.',
                icon: '🗳️'
              },
              {
                title: 'Neutrality',
                description: 'Strictly no religious or political affiliation. Education should be inclusive and serve all community members.',
                icon: '⚖️'
              },
              {
                title: 'Excellence',
                description: 'Quality education for underserved areas. We refuse to accept that rural students deserve anything less than the best.',
                icon: '⭐'
              }
            ].map((value, index) => (
              <div key={index} className="card">
                <div className="text-4xl mb-3">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Approach */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Approach</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-primary-500 pl-6 py-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                1. Start with a Proof of Concept
              </h3>
              <p className="text-gray-600">
                Begin in Ramechhap with a single school that demonstrates our model can work.
                Document everything, learn from challenges, and refine the approach.
              </p>
            </div>
            <div className="border-l-4 border-primary-500 pl-6 py-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                2. Build with the Community
              </h3>
              <p className="text-gray-600">
                Work alongside local teachers, parents, and community leaders. Their knowledge
                and participation are essential for success and sustainability.
              </p>
            </div>
            <div className="border-l-4 border-primary-500 pl-6 py-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                3. Document for Replication
              </h3>
              <p className="text-gray-600">
                Create open, detailed documentation that allows others to learn from our
                experience and replicate the model in their own communities.
              </p>
            </div>
            <div className="border-l-4 border-primary-500 pl-6 py-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                4. Scale with Discipline
              </h3>
              <p className="text-gray-600">
                Expand methodically, never compromising on quality or core principles. Each
                new school must be set up for success with proper support and resources.
              </p>
            </div>
          </div>
        </section>

        {/* Phase 0 Focus */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Phase 0 Focus</h2>
            <p className="text-gray-700 mb-4">
              Our current work is intentionally narrow: validate the foundation before
              any broader rollout.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Community alignment and local governance support</li>
              <li>• Lean curriculum outline tied to learning-by-doing</li>
              <li>• Minimum viable resource and staffing plan</li>
              <li>• Transparent documentation of decisions and policies</li>
            </ul>
          </div>
        </section>

        {/* Commitment */}
        <section>
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h2>
            <p className="text-lg text-gray-700 mb-6">
              We commit to operating with complete transparency, maintaining our independence
              from religious and political influences, and always putting the best interests
              of students and communities first.
            </p>
            <p className="text-gray-600 italic">
              "Education is not the filling of a pail, but the lighting of a fire."
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
