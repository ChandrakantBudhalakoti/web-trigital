export const metadata = {
  title: "Big Data Analytics | Trigital Tech",
  description:
    "Extract actionable insights from complex datasets. Data warehouse solutions, business intelligence, real-time analytics, and data visualization services.",
};

export default function BigData() {
  return (
    <main className="min-h-screen px-6 py-20 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Big Data Analytics</h1>
      <div className="space-y-6 text-gray-600 leading-relaxed">
        <p>
          Transform your vast amounts of data into actionable business insights with Trigital's Big Data Analytics services. 
          We help organizations extract meaningful patterns, trends, and intelligence from complex datasets to drive informed 
          decision-making and strategic planning.
        </p>
        <p>
          Our team of data engineers and analysts specializes in building robust data infrastructure, implementing advanced 
          analytics solutions, and creating intuitive visualizations that make data accessible and actionable. Whether you need 
          real-time analytics, historical data analysis, or predictive insights, we have the expertise to deliver.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Our Big Data Services</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Data warehouse design and implementation</li>
            <li>Business intelligence and reporting solutions</li>
            <li>Real-time analytics and streaming data processing</li>
            <li>Data visualization and dashboard development</li>
            <li>Data integration and ETL processes</li>
            <li>Data governance and quality management</li>
            <li>Advanced analytics and statistical modeling</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

