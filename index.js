import React, { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [lang, setLang] = useState('fa');

  const content = {
    fa: {
      name: 'هادی هورانی',
      title: 'مدیر روابط عمومی، ارتباطات راهبردی و توسعه برند',
      aboutTitle: 'درباره من',
      aboutText: 'متخصص در حوزه ارتباطات راهبردی، توسعه برند و مدیریت روابط عمومی با تمرکز بر خلق ارزش و تقویت جایگاه سازمانی.',
      resume: 'رزومه',
      works: 'پورتفولیو و نمونه کارها',
      articles: 'مقالات',
      contact: 'تماس با من',
      switchLang: 'English',
    },
    en: {
      name: 'Hadi Hourani',
      title: 'Public Relations | Strategic Communications | Brand Development Manager',
      aboutTitle: 'About Me',
      aboutText: 'Specialized in strategic communications, brand development, and public relations, focusing on creating value and strengthening corporate positioning.',
      resume: 'Resume',
      works: 'Portfolio & Works',
      articles: 'Articles',
      contact: 'Contact',
      switchLang: 'فارسی',
    },
  };

  const t = content[lang];

  return (
    <div className={`min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-200 ${lang === 'fa' ? 'rtl' : 'ltr'}`} dir={lang === 'fa' ? 'rtl' : 'ltr'}>
      <Head>
        <title>{t.name} | {t.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Navigation / Header */}
      <header className="max-w-4xl mx-auto px-6 py-8 flex justify-between items-center border-b border-neutral-100">
        <h1 className="text-xl font-bold tracking-tight">{t.name}</h1>
        <button 
          onClick={() => setLang(lang === 'fa' ? 'en' : 'fa')}
          className="text-sm font-medium px-4 py-2 rounded-full border border-neutral-200 hover:bg-neutral-50 transition"
        >
          {t.switchLang}
        </button>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-20">
        
        {/* Hero Section */}
        <section className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900">
            {t.name}
          </h2>
          <p className="text-xl text-neutral-600 font-medium max-w-2xl leading-relaxed">
            {t.title}
          </p>
        </section>

        {/* About Section */}
        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-neutral-900 border-l-4 border-neutral-900 pl-3 rtl:border-r-4 rtl:border-l-0 rtl:pr-3">
            {t.aboutTitle}
          </h3>
          <p className="text-neutral-600 text-lg leading-relaxed max-w-2xl">
            {t.aboutText}
          </p>
        </section>

        {/* Quick Links / Navigation sections */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
          <div className="p-6 border border-neutral-200 rounded-xl hover:border-neutral-900 transition cursor-pointer">
            <h4 className="font-bold text-lg mb-2">{t.resume}</h4>
            <p className="text-sm text-neutral-500">مسیر حرفه‌ای و سوابق کاری...</p>
          </div>
          <div className="p-6 border border-neutral-200 rounded-xl hover:border-neutral-900 transition cursor-pointer">
            <h4 className="font-bold text-lg mb-2">{t.works}</h4>
            <p className="text-sm text-neutral-500">پروژه‌های برندینگ و ارتباطات...</p>
          </div>
          <div className="p-6 border border-neutral-200 rounded-xl hover:border-neutral-900 transition cursor-pointer">
            <h4 className="font-bold text-lg mb-2">{t.articles}</h4>
            <p className="text-sm text-neutral-500">یادداشت‌ها و مقالات تخصصی...</p>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-12 border-t border-neutral-100 text-center text-sm text-neutral-400">
        &copy; {new Date().getFullYear()} {t.name}. All rights reserved.
      </footer>
    </div>
  );
}
