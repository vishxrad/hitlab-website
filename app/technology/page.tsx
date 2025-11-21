'use client';

export default function TechnologyPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-8">
      <header className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Our Technology</h1>
        <p className="text-gray-700 max-w-2xl">
          HitLab combines high-throughput protein microarray wafers with robust assay development
          and data analysis pipelines to profile thousands of proteins in a single experiment.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">High-throughput wafers</h2>
          <p className="text-sm text-gray-700">
            Our current platforms include E. coli, yeast, and human proteome panels, enabling
            broad coverage of antibody–antigen and protein–protein interactions.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">Signal quantification & analysis</h2>
          <p className="text-sm text-gray-700">
            We pair sensitive fluorescence-based readout with analysis pipelines for quality
            control, background correction, and downstream biomarker discovery.
          </p>
        </div>
      </section>

      <section className="rounded-lg border border-dashed border-gray-300 bg-gray-50 p-6 text-sm text-gray-700">
        <p className="font-semibold text-gray-900">Roadmap (dummy content)</p>
        <p className="mt-2">
          Future versions of this page can highlight specific platforms (e.g., AKT/MAPK signaling
          arrays, autoantibody panels), data portals, and integration with clinical studies.
        </p>
      </section>
    </main>
  );
}
