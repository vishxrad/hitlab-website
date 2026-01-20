'use client';
import { useTranslation, Trans } from 'react-i18next';
import { Target, Users, Search, Database, Mail, MapPin, Phone, Play, Microscope, Dna, Zap, Shield, Bug, Activity, BarChart3, Network, Settings, Globe, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="bg-white">
      
      {/* 1. HERO: Alliance Introduction */}
      <section className="relative py-20 bg-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              {t('about.hero.title')}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              <Trans
                t={t}
                i18nKey="about.hero.subtitle"
                components={{
                  highlight: <span className="text-blue-700 font-semibold" />,
                }}
              />
            </p>

            <div className="mt-8 flex items-center justify-center gap-3 opacity-70 hover:opacity-100 transition-opacity duration-300">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                {t('about.hero.affiliation')}
              </span>
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRFuy2m0WvUfqAwrsAukbF2_-9EDJ4xlApHA&s" 
                alt="NCKU Logo" 
                className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. VIDEO SECTION */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video group">
            <video 
              className="w-full h-full object-cover" 
              controls 
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/api/placeholder/1280/720" 
            >
              <source src="https://mytube.ncku.edu.tw/filedl.php/video/30805/video_HD.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center text-sm text-gray-400 mt-4">
            {t('about.video.caption')}
          </p>
        </div>
      </section>

      {/* 3. OBJECTIVES GRID */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">{t('about.objectives.title')}</h2>
            <p className="mt-4 text-gray-500">{t('about.objectives.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="flex items-start p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-700 mr-4">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t('about.objectives.cards.production.title')}</h3>
                <p className="text-gray-600">{t('about.objectives.cards.production.description')}</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-start p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-700 mr-4">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t('about.objectives.cards.biomarker.title')}</h3>
                <p className="text-gray-600">{t('about.objectives.cards.biomarker.description')}</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-start p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-700 mr-4">
                <Search className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t('about.objectives.cards.custom.title')}</h3>
                <p className="text-gray-600">{t('about.objectives.cards.custom.description')}</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex items-start p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-700 mr-4">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{t('about.objectives.cards.industry.title')}</h3>
                <p className="text-gray-600">{t('about.objectives.cards.industry.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STRATEGIC ADVANTAGE */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">{t('about.advantage.title')}</h2>
            <p className="mt-4 text-gray-600">{t('about.advantage.subtitle')}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-blue-700 mb-4">{t('about.advantage.cards.fit.title')}</h3>
              <p className="text-gray-600">
                {t('about.advantage.cards.fit.description')}
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-blue-700 mb-4">{t('about.advantage.cards.market.title')}</h3>
              <p className="text-gray-600">
                {t('about.advantage.cards.market.description')}
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-blue-700 mb-4">{t('about.advantage.cards.policy.title')}</h3>
              <p className="text-gray-600">
                {t('about.advantage.cards.policy.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. RESEARCH OVERVIEW */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">{t('about.research_overview.title')}</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Explore the interdisciplinary research field at the intersection of proteomics, biosensing, and translational medicine
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {(t('about.research_overview.sections', { returnObjects: true }) as any[]).map((section, index) => {
              const icons = [
                Network, // The Intersection of Disciplines
                Microscope, // Proteomics Beyond Protein Abundance
                Zap, // High-Throughput Biosensing
                Shield, // Antibodyome Profiling
                Bug, // Host–Microbe Interaction
                Activity, // Biomarker Discovery
                Dna, // Integration with Bioinformatics
                Settings, // Translation, Standardization
                Globe, // Position Within Modern Life Sciences
                CheckCircle // Conclusion
              ];
              const IconComponent = icons[index] || Network;
              
              return (
                <div key={index} className={`bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow ${
                  index % 2 === 0 ? 'lg:mt-0' : 'lg:mt-8'
                }`}>
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-100 p-3 rounded-lg text-blue-700 mr-4">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                  </div>
                  <div className="text-gray-700 leading-relaxed">
                    {section.content.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="mb-4 last:mb-0 text-sm">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. LEADERSHIP (Existing) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">{t('about.leadership.title')}</h2>
          
          <div className="grid md:grid-cols-12 gap-8">
            {/* Profile Card */}
            <div className="md:col-span-4 lg:col-span-3">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm sticky top-24">
                <div className="h-32 w-32 bg-gray-200 rounded-full mb-6 flex items-center justify-center text-gray-400 overflow-hidden mx-auto">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="images/professor.png"
                    alt="Dr. Chien-Sheng (Jason) Chen"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900">Dr. Chien-Sheng (Jason) Chen</h3>
                  <p className="text-sm text-blue-600 font-medium mt-1">{t('about.leadership.role')}</p>
                  <p className="text-xs text-gray-500 mt-1">{t('about.leadership.title2')}</p>
                </div>
                <div className="mt-6 space-y-3 text-sm text-gray-600">
                  <p>
                    {t('about.leadership.bio')}
                  </p>
                  <p className="italic text-xs text-gray-400 border-t pt-3">
                    &quot;{t('about.leadership.quote')}&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline / History Chart */}
            <div className="md:col-span-8 lg:col-span-9">
              <div className="relative border-l-2 border-blue-100 ml-3 md:ml-6 space-y-10 pb-4">
                
                {/* Current Roles */}
                <div className="relative pl-8 md:pl-12">
                  <div className="absolute -left-[9px] top-1 h-5 w-5 rounded-full border-4 border-white bg-blue-600 shadow-sm"></div>
                  <h4 className="text-lg font-bold text-gray-900">{t('about.timeline.current')}</h4>
                  <ul className="mt-2 space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400"></span>
                      <span><strong className="font-medium">{t('about.timeline.professor')}</strong>, {t('about.timeline.dept')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400"></span>
                      <span><strong className="font-medium">{t('about.timeline.president')}</strong>, {t('about.timeline.society')}</span>
                    </li>
                  </ul>
                </div>

                {/* Awards */}
                <div className="relative pl-8 md:pl-12">
                  <div className="absolute -left-[9px] top-1 h-5 w-5 rounded-full border-4 border-white bg-indigo-500 shadow-sm"></div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-indigo-500">{t('about.timeline.awards')}</span>
                  <h4 className="text-lg font-bold text-gray-900 mt-1">{t('about.timeline.recognition')}</h4>
                  <ul className="mt-2 space-y-2 text-gray-700">
                    <li><span className="font-medium">2018, 2021, 2022:</span> National Innovation Award, Taiwan</li>
                    <li><span className="font-medium">2013:</span> Academia Sinica Research Award for Junior Research Investigators</li>
                  </ul>
                </div>

                {/* NCU Era */}
                <div className="relative pl-8 md:pl-12">
                  <div className="absolute -left-[9px] top-1 h-5 w-5 rounded-full border-4 border-white bg-gray-300"></div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">2008 &ndash; 2017</span>
                  <h4 className="text-lg font-bold text-gray-900 mt-1">{t('about.timeline.ncu')}</h4>
                  <ul className="mt-2 space-y-1 text-gray-700 list-disc list-inside text-sm">
                    {(t('about.timeline.ncuRoles', { returnObjects: true }) as string[]).map((role, index) => (
                      <li key={index}>{role}</li>
                    ))}
                  </ul>
                </div>

                {/* Postdoc */}
                <div className="relative pl-8 md:pl-12">
                  <div className="absolute -left-[9px] top-1 h-5 w-5 rounded-full border-4 border-white bg-gray-300"></div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">2005 &ndash; 2007</span>
                  <h4 className="text-lg font-bold text-gray-900 mt-1">{t('about.timeline.jhu')}</h4>
                  <p className="text-gray-700 mt-1">
                    {t('about.timeline.postdoc')}
                  </p>
                </div>

                {/* Education */}
                <div className="relative pl-8 md:pl-12">
                  <div className="absolute -left-[9px] top-1 h-5 w-5 rounded-full border-4 border-white bg-gray-300"></div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">{t('about.timeline.education')}</span>
                  <h4 className="text-lg font-bold text-gray-900 mt-1">{t('about.timeline.academicBackground')}</h4>
                  <ul className="mt-2 space-y-2 text-gray-700">
                    <li>
                      <span className="font-medium">{t('about.timeline.phd')}</span> (2001&ndash;2005), Food Science and Technology, <span className="font-medium">{t('about.timeline.cornell')}</span>
                    </li>
                    <li>
                      <span className="font-medium">{t('about.timeline.ms')}</span> (1996&ndash;1998), Food Science and Technology, <span className="font-medium">{t('about.timeline.ntu')}</span>
                    </li>
                    <li>
                      <span className="font-medium">{t('about.timeline.bs')}</span> (1992&ndash;1996), Marine Food Science, <span className="font-medium">{t('about.timeline.ntou')}</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CORE TEAM MEMBERS */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">{t('about.team.title')}</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {(t('about.team.members', { returnObjects: true }) as any[]).map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col">
                <div className="aspect-square bg-gray-100 relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium text-sm mb-3">{member.role}</p>
                  <p className="text-gray-500 text-xs mb-4 flex-1">{member.education}</p>
                  <a href={`mailto:${member.email}`} className="text-sm text-gray-400 hover:text-blue-600 transition-colors flex items-center mt-auto">
                    <Mail className="w-4 h-4 mr-2" />
                    {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CONTACT SECTION (New) */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('about.contact.title')}</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-700 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('about.contact.address.title')}</h3>
                    <p className="text-gray-600 mt-1 whitespace-pre-line">
                      {t('about.contact.address.value')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-700 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('about.contact.phone.title')}</h3>
                    <p className="text-gray-600 mt-1">{t('about.contact.phone.value')}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-700 mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900">{t('about.contact.email.title')}</h3>
                    <p className="text-gray-600 mt-1">{t('about.contact.email.value')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual / Map Placeholder */}
            <div className="h-96 bg-gray-100 rounded-2xl overflow-hidden shadow-inner border border-gray-200 flex items-center justify-center relative">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.8856!2d120.22147!3d23.00285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e77177cb52e8f%3A0x9c94e0ecbfe3835c!2sNational%20Cheng%20Kung%20University%20College%20of%20Medicine!5e0!3m2!1sen!2stw!4v1625000000000!5m2!1sen!2stw"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
