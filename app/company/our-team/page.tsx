import Section from '@/components/Section';

export default function OurTeam() {
  const teamMembers = [
    { name: 'John Smith', role: 'CEO & Founder', expertise: 'Digital Transformation' },
    { name: 'Sarah Johnson', role: 'CTO', expertise: 'Cloud Architecture' },
    { name: 'Michael Chen', role: 'VP Product', expertise: 'Product Strategy' },
    { name: 'Emily Davis', role: 'VP Sales', expertise: 'Enterprise Solutions' },
    { name: 'Alex Rodriguez', role: 'VP Engineering', expertise: 'Software Development' },
    { name: 'Lisa Anderson', role: 'VP Customer Success', expertise: 'Client Relations' },
  ];

  return (
    <main className="min-h-screen">
      <Section>
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h1 className="text-5xl font-bold text-primary">Our Team</h1>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              Expert professionals dedicated to your success
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Leadership Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="card bg-base-100 shadow hover:shadow-lg transition">
                  <div className="card-body items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-3xl font-bold mb-4">
                      {member.name.charAt(0)}
                    </div>
                    <h3 className="card-title text-lg">{member.name}</h3>
                    <p className="text-base-content/70 font-semibold">{member.role}</p>
                    <p className="text-sm text-base-content/60">{member.expertise}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 bg-base-200 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-primary">Why Join Our Team?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">Cutting-Edge Projects</h3>
                <p className="text-base-content/70">
                  Work on innovative technology projects with leading enterprises
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">Growth Opportunities</h3>
                <p className="text-base-content/70">
                  Continuous learning and professional development programs
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">Collaborative Culture</h3>
                <p className="text-base-content/70">
                  Work with talented professionals in a supportive environment
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-primary mb-2">Competitive Benefits</h3>
                <p className="text-base-content/70">
                  Comprehensive compensation and benefits package
                </p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-primary">Join Our Growing Team</h2>
            <p className="text-base-content/70 max-w-2xl mx-auto">
              We're always looking for talented professionals to join us
            </p>
            <a href="/contact-us" className="btn btn-primary">
              View Open Positions
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
