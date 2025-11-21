'use client';

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <section className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">About HitLab</h1>
        <p className="text-gray-700 leading-relaxed">
          HitLab is a multidisciplinary team of scientists, engineers, and clinicians focused on
          high-throughput protein microarray technology. We bridge fundamental proteomics research
          and real-world clinical applications in drug development and precision medicine.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Our work spans assay development, biomarker discovery, and translational collaborations
          with academic medical centers and industry partners. We combine robust wet-lab pipelines
          with modern data analysis and visualization to help researchers make confident decisions
          from complex proteome-wide data.
        </p>
      </section>
    </main>
  );
}
