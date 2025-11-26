'use client';
import React from 'react';
import { Activity, Search, Dna, Shield, Target, ArrowUpRight, Atom, Zap, Microscope, FlaskConical } from 'lucide-react';
import { motion } from 'framer-motion';

const ProteinArrayApp = () => {
  const applications = [
    {
      id: 'interactions',
      title: 'Multi-Omics Interaction Profiling',
      icon: <Atom className="w-6 h-6" />,
      description: 'Deciphering complex biological networks through simultaneous analysis of Protein-Protein, Protein-Nucleic Acid (DNA/RNA/miRNA), and Protein-Lipid interactions.',
      stats: ['PI(3,5)P2 Lipids', 'Promoter/miRNA Binding', 'Protease ClpY Kinetics'],
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 'immune',
      title: 'Immune Response Decoding',
      icon: <Shield className="w-6 h-6" />,
      description: 'High-throughput profiling of autoantibodies and immune markers for conditions like SLE, IBD, Kawasaki Disease, and bacterial infections.',
      stats: ['Autoantibody', 'Bacterial Detection', 'Knock-out Mouse Profiling'],
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 'small-molecule',
      title: 'Small Molecule & Peptide Screening',
      icon: <FlaskConical className="w-6 h-6" />,
      description: 'Investigating binding specificity for antibiotics, antimicrobial peptides (AMPs), and oxidized peptides.',
      stats: ['Antibiotic Interactions', 'AMP Binding', 'Oxidized Peptide Analysis'],
      image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 'cellular',
      title: 'Cellular Recognition',
      icon: <Microscope className="w-6 h-6" />,
      description: 'Analyzing protein interactions with specific cell types including neurons, neutrophils, and epithelial cells.',
      stats: ['Cell Surface Markers', 'Neuron Recognition', 'Epithelial Interactions'],
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1000'
    },
    {
      id: 'enzymatic',
      title: 'PTM & Enzymatic Assays',
      icon: <Zap className="w-6 h-6" />,
      description: 'Monitoring post-translational modifications (PTMs) such as sulfation and kinase activities in real-time.',
      stats: ['Sulfation Assays', 'Enzymatic Turnover', 'Kinase Profiling'],
      image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1000'
    }
  ];

  return (
    <div className="w-full font-sans my-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
        {applications.map((app, index) => (
          <motion.div
            key={app.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer ${
              index === 0 ? 'md:col-span-2' : 'md:col-span-1'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/10 backdrop-blur-md rounded-xl text-white border border-white/20 shadow-inner">
                    {app.icon}
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{app.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2 group-hover:line-clamp-none transition-all">
                  {app.description}
                </p>

                {/* Stats / Tags */}
                <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {app.stats.map((stat, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs font-medium text-white bg-blue-500/20 backdrop-blur-md rounded-full border border-blue-400/30"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProteinArrayApp;