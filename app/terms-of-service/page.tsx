import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';

export const metadata = {
  title: 'Terms of Service | Trigital Tech',
  description:
    'Review Trigital Technologies Terms of Service to understand the terms and conditions governing your use of our services.',
};

export default function TermsOfService() {
  return (
    <>
      <HeroSection
        title="Terms of Service"
        subtitle="Please read these terms carefully before using our services."
        backgroundClass="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900"
      />

      <Section
        id="terms-content"
        className="bg-white dark:bg-slate-800"
      >
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                By accessing and using the services provided by Trigital Technologies Pvt Ltd ("Trigital," "we," "our," or "us"), 
                you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by 
                the above, please do not use this service.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">2. Description of Services</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Trigital provides software development, cloud consulting, AI/ML solutions, digital transformation services, 
                and SaaS products including but not limited to NGB (Next Generation Billing) and NIPIGE platforms. We reserve 
                the right to modify, suspend, or discontinue any aspect of our services at any time.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">3. User Accounts and Registration</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                To access certain features of our services, you may be required to register for an account. When registering, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your information to keep it accurate and current</li>
                <li>Maintain the security of your account credentials</li>
                <li>Accept responsibility for all activities that occur under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">4. Acceptable Use</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                You agree not to use our services to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Violate any applicable laws, regulations, or third-party rights</li>
                <li>Transmit any malicious code, viruses, or harmful materials</li>
                <li>Interfere with or disrupt the integrity or performance of our services</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Use our services for any fraudulent or illegal purposes</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
                <li>Harvest or collect information about other users without their consent</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">5. Intellectual Property Rights</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                All content, features, and functionality of our services, including but not limited to text, graphics, logos, 
                icons, images, software, and source code, are owned by Trigital or its licensors and are protected by 
                international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not 
                reproduce, distribute, modify, create derivative works, publicly display, or otherwise exploit any of our 
                proprietary materials without our prior written consent.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">6. Payment Terms</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                If you purchase any paid services from us:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>You agree to pay all fees associated with your subscription or purchase</li>
                <li>Fees are non-refundable unless otherwise stated in writing</li>
                <li>We reserve the right to change our pricing with prior notice</li>
                <li>Failure to pay may result in suspension or termination of your access</li>
                <li>All fees are exclusive of applicable taxes, which you are responsible for paying</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">7. Service Availability and Modifications</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We strive to ensure our services are available and functioning properly, but we do not guarantee uninterrupted 
                or error-free service. We reserve the right to modify, suspend, or discontinue any part of our services at any 
                time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, 
                or discontinuance of our services.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">8. Warranties and Disclaimers</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Our services are provided "as is" and "as available" without warranties of any kind, either express or implied, 
                including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. 
                We do not warrant that our services will be uninterrupted, secure, or error-free, or that defects will be corrected.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To the fullest extent permitted by applicable law, Trigital shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or 
                indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of our services.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">10. Indemnification</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                You agree to indemnify, defend, and hold harmless Trigital and its officers, directors, employees, and agents 
                from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, 
                arising out of or in any way connected with your access to or use of our services, your violation of these Terms, 
                or your violation of any third-party rights.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">11. Termination</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We may terminate or suspend your access to our services immediately, without prior notice or liability, for any 
                reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the 
                services will immediately cease. All provisions of these Terms that by their nature should survive termination 
                shall survive termination.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">12. Governing Law</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict 
                of law provisions. Any disputes arising out of or relating to these Terms shall be subject to the exclusive 
                jurisdiction of the courts in Hyderabad, Telangana, India.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">13. Changes to Terms</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, 
                we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change 
                will be determined at our sole discretion. By continuing to access or use our services after any revisions become 
                effective, you agree to be bound by the revised terms.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">14. Contact Information</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 dark:bg-slate-700 p-6 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Trigital Technologies Pvt Ltd</strong>
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  Plot No 1/C, Sy No 83/1, Raidurgam Panmaktha,
                  <br />
                  Hyderabad, Telangana 500081, India
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Email:</strong> contact@trigitaltech.com
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <strong>Phone:</strong> +91 (555) 123 123-4567
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

