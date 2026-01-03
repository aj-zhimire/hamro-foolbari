import React from 'react';

export default function Curriculum() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Curriculum Framework
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our curriculum integrates academic excellence with practical skills and civic education
          </p>
        </div>

        {/* Pedagogy */}
        <section className="mb-16">
          <div className="bg-primary-50 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-primary-900 mb-6">
              Learning by Doing: Our Pedagogical Foundation
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Traditional rote memorization fails to engage students or prepare them for real
              challenges. Our pedagogy emphasizes experiential, hands-on learning where students
              actively construct knowledge through doing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white rounded-lg p-6">
                <div className="text-3xl mb-3">🔬</div>
                <h3 className="font-semibold text-gray-900 mb-2">Experiential</h3>
                <p className="text-gray-600">Learn through direct experience and reflection</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <div className="text-3xl mb-3">👨‍🌾</div>
                <h3 className="font-semibold text-gray-900 mb-2">Project-Based</h3>
                <p className="text-gray-600">Real-world projects like the school garden</p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="font-semibold text-gray-900 mb-2">Collaborative</h3>
                <p className="text-gray-600">Work together, learn from each other</p>
              </div>
            </div>
          </div>
        </section>

        {/* Grade Levels */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Curriculum by Grade Level
          </h2>
          
          <div className="space-y-8">
            {/* Early Childhood */}
            <div className="card border-l-4 border-primary-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Early Childhood Education
              </h3>
              <p className="text-gray-600 mb-4">
                Foundation years focusing on play-based learning, social-emotional development,
                and basic literacy/numeracy through exploration and discovery.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Focus Areas:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>✓ Social-emotional learning</li>
                    <li>✓ Language development (Nepali & English)</li>
                    <li>✓ Early numeracy concepts</li>
                    <li>✓ Motor skills development</li>
                    <li>✓ Creative expression</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Learning Approach:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>✓ Play-based activities</li>
                    <li>✓ Storytelling and songs</li>
                    <li>✓ Nature exploration</li>
                    <li>✓ Hands-on manipulation</li>
                    <li>✓ Group activities</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Grades 1-3 */}
            <div className="card border-l-4 border-primary-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Grades 1-3: Building Foundations
              </h3>
              <p className="text-gray-600 mb-4">
                Core academic skills in literacy, numeracy, and science integrated with practical
                projects and introduction to civic concepts.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Academic Core:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>✓ Reading & writing (Nepali & English)</li>
                    <li>✓ Mathematics fundamentals</li>
                    <li>✓ Basic science concepts</li>
                    <li>✓ Social studies introduction</li>
                    <li>✓ Arts and physical education</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Practical Learning:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>✓ School garden projects</li>
                    <li>✓ Classroom responsibilities</li>
                    <li>✓ Community helper studies</li>
                    <li>✓ Basic civic education</li>
                    <li>✓ Environmental awareness</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Grades 4-8 */}
            <div className="card border-l-4 border-primary-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Grades 4-8: Deepening Understanding
              </h3>
              <p className="text-gray-600 mb-4">
                Advanced academics combined with substantial civic education track and
                community-connected projects.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Academic Advancement:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>✓ Advanced literacy & composition</li>
                    <li>✓ Mathematics & problem-solving</li>
                    <li>✓ Science & experimentation</li>
                    <li>✓ Nepali history & geography</li>
                    <li>✓ Critical thinking skills</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Civic Education Track:</h4>
                  <ul className="space-y-1 text-gray-600">
                    <li>✓ Rights and responsibilities</li>
                    <li>✓ Democratic processes</li>
                    <li>✓ Local governance understanding</li>
                    <li>✓ Community service projects</li>
                    <li>✓ Ethical reasoning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Civic Education */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6">Civic Education: A Parallel Track</h2>
            <p className="text-lg mb-6 opacity-90">
              Civic education is not an add-on but a core component woven throughout all grade
              levels. Students learn about their role as citizens from day one.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">What Students Learn:</h3>
                <ul className="space-y-2 opacity-90">
                  <li>• Constitutional rights and duties</li>
                  <li>• How local government works</li>
                  <li>• Democratic participation</li>
                  <li>• Community problem-solving</li>
                  <li>• Ethical decision-making</li>
                  <li>• Social responsibility</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">How They Learn:</h3>
                <ul className="space-y-2 opacity-90">
                  <li>• Mock elections and debates</li>
                  <li>• Community service projects</li>
                  <li>• Student council participation</li>
                  <li>• Local issue investigations</li>
                  <li>• Guest speakers from government</li>
                  <li>• Field trips to civic institutions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Assessment */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Assessment Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-xl font-semibold text-primary-900 mb-3">
                Formative Focus
              </h3>
              <p className="text-gray-600">
                Ongoing assessment for learning, not just of learning. Regular feedback helps
                students improve continuously.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-primary-900 mb-3">
                Multiple Methods
              </h3>
              <p className="text-gray-600">
                Projects, presentations, written work, practical demonstrations - assess the
                whole student, not just test-taking ability.
              </p>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold text-primary-900 mb-3">
                Real-World Connection
              </h3>
              <p className="text-gray-600">
                Assessment tasks connect to real-world applications. Students demonstrate
                understanding through practical application.
              </p>
            </div>
          </div>
        </section>

        {/* Documentation */}
        <section>
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Detailed Curriculum Documentation
            </h2>
            <p className="text-gray-600 mb-6">
              Complete curriculum frameworks, lesson examples, and assessment rubrics are
              available in our repository for transparency and replication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/curriculum/framework"
                className="btn-primary"
              >
                View Framework Details
              </a>
              <a
                href="/curriculum/grades"
                className="btn-secondary"
              >
                Grade-by-Grade Guides
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
