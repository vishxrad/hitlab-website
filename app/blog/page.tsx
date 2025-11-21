'use client';

export default function BlogPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16 space-y-10">
      <header className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">News & Updates</h1>
        <p className="text-gray-700 max-w-2xl">
          Stay up to date with new data releases, platform improvements, and case studies from
          our high-throughput protein microarray projects.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            Launching our human proteome-wide microarray panel
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            We now support more than 21,000 human proteins on a single wafer, enabling
            large-scale antibody and serum profiling in a single experiment.
          </p>
          <p className="mt-3 text-xs text-gray-500">Dummy post · Q1 2025</p>
        </article>

        <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            Case study: Autoantibody signatures in early-stage disease
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            Learn how high-throughput protein microarrays can reveal subtle changes in autoantibody
            profiles before clinical symptoms appear.
          </p>
          <p className="mt-3 text-xs text-gray-500">Dummy post · Q4 2024</p>
        </article>
      </section>
    </main>
  );
}
