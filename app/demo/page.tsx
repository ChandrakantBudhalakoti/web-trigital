import HeroSection from "@/components/HeroSection";
import Section from "@/components/Section";
import DemoForm from "./DemoForm";

export const metadata = {
  title: "Schedule a Demo | Trigital Tech",
  description:
    "Schedule a personalized demo of our products and solutions. See how Trigital can transform your business.",
};

export default function DemoPage() {
  return (
    <>
      <HeroSection
        title="Schedule a Demo"
        subtitle="See our solutions in action and discover how we can help your business"
        backgroundClass="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900"
      />

      <Section id="demo-form" className="bg-blue-100 py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Let’s discuss <br /> About your Project
          </h2>

          <DemoForm />
        </div>
      </Section>
    </>
  );
}
