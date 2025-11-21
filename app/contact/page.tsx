'use client';

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <section className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Contact us</h1>
        <p className="text-gray-700 leading-relaxed">
          Interested in collaborating, running a pilot study, or learning more about our
          high-throughput protein microarray platform? Send us a message and our team will
          follow up with you.
        </p>
        <div className="mt-6 rounded-lg border border-gray-200 bg-white p-6 text-sm text-gray-700">
          <p className="font-semibold text-gray-900">Email</p>
          <p className="mt-1">example@hitlab.example.edu</p>
          <p className="mt-4 font-semibold text-gray-900">Address</p>
          <p className="mt-1">Department of Food Safety and Risk Management</p>
          <p>College of Medicine, National Cheng Kung University</p>
          <p>Tainan City 701401, Taiwan</p>
        </div>
      </section>
    </main>
  );
}
