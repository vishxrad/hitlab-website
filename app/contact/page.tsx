'use client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">{t('contact.title')}</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Info Cards */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 space-y-8">
              
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{t('contact.info.address.label')}</h3>
                  <p className="text-slate-600">{t('contact.info.address.building')}</p>
                  <p className="text-slate-600">{t('contact.info.address.department')}</p>
                  <p className="text-slate-600">{t('contact.info.address.street')}</p>
                  <p className="text-slate-600">{t('contact.info.address.city')}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{t('contact.info.email.label')}</h3>
                  <a href={`mailto:${t('contact.info.email.value')}`} className="text-blue-600 hover:text-blue-700 font-medium">
                    {t('contact.info.email.value')}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{t('contact.info.hours.label')}</h3>
                  <p className="text-slate-600">{t('contact.info.hours.value')}</p>
                </div>
              </div>

            </div>

            {/* Map Embed */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden h-[400px] relative">
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

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">{t('contact.form.title')}</h2>
            
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-64 text-center space-y-4 animate-in fade-in duration-500">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{t('contact.form.success')}</h3>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1">
                      {t('contact.form.firstName')}
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1">
                      {t('contact.form.lastName')}
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                      {t('contact.form.email')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                      {t('contact.form.phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="institution" className="block text-sm font-medium text-slate-700 mb-1">
                      {t('contact.form.institution')}
                    </label>
                    <input
                      type="text"
                      id="institution"
                      required
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-slate-700 mb-1">
                      {t('contact.form.inquiryType.label')}
                    </label>
                    <select
                      id="inquiryType"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="general">{t('contact.form.inquiryType.options.general')}</option>
                      <option value="quote">{t('contact.form.inquiryType.options.quote')}</option>
                      <option value="support">{t('contact.form.inquiryType.options.support')}</option>
                      <option value="collaboration">{t('contact.form.inquiryType.options.collaboration')}</option>
                      <option value="student">{t('contact.form.inquiryType.options.student')}</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="jobTitle" className="block text-sm font-medium text-slate-700 mb-1">
                      {t('contact.form.jobTitle')}
                    </label>
                    <input
                      type="text"
                      id="jobTitle"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                      {t('contact.form.subject')}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                  {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}
