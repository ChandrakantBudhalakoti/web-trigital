import HeroSection from '@/components/HeroSection';
import Section from '@/components/Section';

export const metadata = {
  title: 'Privacy Policy | Trigital Tech',
  description:
    'Read Trigital Technologies Privacy Policy to understand how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <>
      <HeroSection
        title="Privacy Policy"
        subtitle="Your privacy matters to us. Learn how we protect and handle your data."
        backgroundClass="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900"
      />

      <Section
        id="privacy-content"
        className="bg-white dark:bg-slate-800"
      >
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">1. Introduction</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Trigital Technologies Pvt Ltd ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
                you visit our website or use our services.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">2. Information We Collect</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We may collect information about you in a variety of ways. The information we may collect includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Personal Data:</strong> Name, email address, phone number, company name, and job title</li>
                <li><strong>Usage Data:</strong> Information about how you access and use our website and services</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, and cookies</li>
                <li><strong>Communication Data:</strong> Records of communications with us, including emails and support requests</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Provide, operate, and maintain our services</li>
                <li>Improve, personalize, and expand our website and services</li>
                <li>Understand and analyze how you use our services</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you, including for customer service and marketing purposes</li>
                <li>Send you updates, newsletters, and promotional materials</li>
                <li>Process your requests, transactions, and payments</li>
                <li>Detect, prevent, and address technical issues and security threats</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">4. Information Sharing and Disclosure</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Service Providers:</strong> With trusted third-party service providers who assist us in operating our business</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, sale of assets, or acquisition</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                <li><strong>With Your Consent:</strong> When you have given us explicit consent to share your information</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">5. Data Security</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
                the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">6. Your Rights</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate or incomplete information</li>
                <li>The right to request deletion of your personal information</li>
                <li>The right to object to or restrict the processing of your information</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent at any time</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">7. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our website and hold certain information. 
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if 
                you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">8. Third-Party Links</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Our website may contain links to third-party websites that are not operated by us. We have no control over 
                and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">9. Children's Privacy</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal 
                information from children. If you become aware that a child has provided us with personal information, 
                please contact us immediately.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">10. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
                Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy 
                Policy periodically for any changes.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">11. Contact Us</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
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

