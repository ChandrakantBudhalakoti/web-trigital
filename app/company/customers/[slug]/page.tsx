import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { createWebPageSchema } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/seo";
import { getCustomerBySlug } from "@/lib/customers-data";
import { buildPageMetadata } from "@/lib/metadata";
import { ChevronLeftIcon, CheckIcon } from "@heroicons/react/24/outline";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const customer = getCustomerBySlug(slug);
  if (!customer)
    return buildPageMetadata({
      title: "Customer | Trigital Tech",
      description: "Customer case study not found.",
      path: `/company/customers/${slug}`,
    });
  return buildPageMetadata({
    title: `${customer.name} - Customer Success | Trigital Tech`,
    description: customer.description,
    keywords: `Trigital customer, ${customer.name}, case study, customer success, ${customer.country}`,
    path: `/company/customers/${slug}`,
  });
}

export default async function CustomerCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const customer = getCustomerBySlug(slug);
  if (!customer) notFound();

  const caseStudy = customer.caseStudy;

  const customerSchema = createWebPageSchema({
    name: `${customer.name} - Customer Success | Trigital Tech`,
    description: customer.description,
    path: `/company/customers/${slug}`,
    breadcrumbs: [
      { name: "Home", url: SITE_URL },
      { name: "Company", url: "/company/about-us" },
      { name: "Customers", url: "/company/customers" },
      { name: customer.name, url: `/company/customers/${slug}` },
    ],
  });

  return (
    <>
      <JsonLd data={customerSchema} />
    <main className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Back link */}
        <Link
          href="/company/customers"
          className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <ChevronLeftIcon className="w-5 h-5" />
          Back to Customers
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* ——— Left sidebar ——— */}
          <aside className="lg:col-span-4 xl:col-span-3">
            <div className="bg-blue-50 dark:bg-slate-800 rounded-2xl p-6 space-y-6 sticky top-6">
              <div>
                <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                  Industry
                </h3>
                <p className="text-gray-800 dark:text-gray-200">
                  {caseStudy?.industry ?? "—"}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-1">
                  Region
                </h3>
                <p className="text-gray-800 dark:text-gray-200">
                  {caseStudy?.region ?? customer.country}
                </p>
              </div>
              {caseStudy && caseStudy.products.length > 0 && (
                <div>
                  <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                    Products
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.products.map((product, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-full text-sm font-medium bg-blue-500 text-white"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {caseStudy && caseStudy.favoriteFeatures.length > 0 && (
                <div>
                  <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                    Favorites Features
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.favoriteFeatures.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-full text-sm font-medium border-2 border-blue-500 text-blue-600 dark:text-blue-400 bg-white dark:bg-slate-800"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>

          {/* ——— Right: main content ——— */}
          <div className="lg:col-span-8 xl:col-span-9">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-6 md:p-10 space-y-10">
              {/* Company header */}
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 flex-shrink-0 rounded-full overflow-hidden border-2 border-gray-200 dark:border-slate-600 flex items-center justify-center bg-gray-50 dark:bg-slate-700">
                  <Image
                    src={customer.logo}
                    alt={`${customer.name} logo`}
                    width={72}
                    height={72}
                    className="object-contain"
                  />
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white uppercase tracking-tight">
                  {customer.name}
                </h1>
              </div>

              {/* The Company */}
              <section>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  The Company
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {caseStudy?.companyFull ?? customer.description}
                </p>
              </section>

              {/* The Solution */}
              {(caseStudy?.solutionBullets?.length ?? 0) > 0 && (
                <section>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    The Solution
                  </h2>
                  <ul className="space-y-3">
                    {caseStudy!.solutionBullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                      >
                        <CheckIcon className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Customer Feedback */}
              {(caseStudy?.feedbackBullets?.length ?? 0) > 0 && (
                <section>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Customer Feedback
                  </h2>
                  <ul className="space-y-3">
                    {caseStudy!.feedbackBullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                      >
                        <CheckIcon className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* If no case study detail, show result */}
              {!caseStudy && (
                <section>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Result
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {customer.result}
                  </p>
                </section>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
