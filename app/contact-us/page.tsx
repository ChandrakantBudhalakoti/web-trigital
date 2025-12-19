import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "Contact Us | Trigital Tech",
  description:
    "Get in touch with Trigital Technologies. We are here to help you with your technology needs.",
};

export default function ContactUs() {
  return (
    <>
      <HeroSection
        title="Get in Touch"
        subtitle="We're here to help you with your digital transformation journey"
        backgroundClass="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900"
      />

      <Section id="contact-content" className="bg-slate-900 py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-10 text-gray-300">
            {/* Address */}
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2 text-white">
                <MapPinIcon className="w-6 h-6 text-primary" />
                Office Address
              </h3>
              <p className="leading-relaxed">
                Plot No 1/C, Sy No 83/1, Raidurgam Panmaktha,
                <br />
                Hyderabad Knowledge City, Serilingamaplly,
                <br />
                Hyderabad, Telangana 500081, India
              </p>
            </div>

            {/* Email */}
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2 text-white">
                <EnvelopeIcon className="w-6 h-6 text-primary" />
                Email
              </h3>
              <p>
                <a
                  href="mailto:contact@trigitaltech.com"
                  className="hover:text-primary transition block"
                >
                  contact@trigitaltech.com
                </a>
                <a
                  href="mailto:sales@trigitaltech.com"
                  className="hover:text-primary transition block"
                >
                  sales@trigitaltech.com
                </a>
              </p>
            </div>

            {/* Phone */}
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2 text-white">
                <PhoneIcon className="w-6 h-6 text-primary" />
                Phone
              </h3>
              <p>
                <a
                  href="tel:+919876543210"
                  className="hover:text-primary block"
                >
                  +91 (555) 123-4567
                </a>
                <a
                  href="tel:+919876543211"
                  className="hover:text-primary block"
                >
                  +91 (555) 123-4568
                </a>
              </p>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2 text-white">
                <ClockIcon className="w-6 h-6 text-primary" />
                Business Hours
              </h3>
              <p className="leading-relaxed">
                Monday - Friday: 9:00 AM - 6:00 PM IST
                <br />
                Saturday: 10:00 AM - 4:00 PM IST
                <br />
                Sunday: Closed
                <br />
                <br />
                <em className="text-primary">24/7 Support Available</em>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/80 border border-white/10 rounded-2xl shadow-2xl p-10 backdrop-blur-md">
            <h2 className="text-2xl font-semibold mb-8 text-white">
              Send us a Message
            </h2>

            <ContactForm />
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section id="map" className="bg-gray-50 dark:bg-slate-900">
        <h2 className="text-3xl font-bold text-center mb-8">Find Us</h2>
        <div className="aspect-video bg-base-300 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3806.9452445851494!2d78.5364554751655!3d17.416138412292092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI0JzU4LjEiTiA3OMKwMzInMjAuNSJF!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 } as React.CSSProperties}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Trigital Technologies Office Location"
          ></iframe>
        </div>
      </Section>
    </>
  );
}
