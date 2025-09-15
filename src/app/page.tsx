'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import HeroCarousel from './components/HeroCarousel';
import Navbar from './components/Navbar';
import OwnerAnouarKortas from './components/def';

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <HeroCarousel />
      <OwnerAnouarKortas />

      {/* Section statistiques - Version professionnelle */}
      <section className="bg-slate-50 py-16 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-800 mb-4">
              Votre partenaire comptable de confiance
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Des chiffres qui témoignent de notre expertise et de notre engagement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                value: '20+',
                label: "Années d'expertise",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                value: '500+',
                label: 'Clients accompagnés',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
              {
                value: '100%',
                label: 'Conformité réglementaire',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                value: '24h',
                label: 'Délai de réponse',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="text-center"
              >
                <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-50 text-blue-600 mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-semibold text-gray-800 mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 text-sm font-medium">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section services - Version professionnelle */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-gray-800 mb-6">
              Nos domaines d'expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Des solutions comptables et fiscales adaptées à vos besoins spécifiques, 
              pour vous accompagner dans le développement de votre entreprise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Comptabilité générale',
                description: 'Tenue de comptabilité, établissement des comptes annuels, déclarations fiscales et sociales. Accompagnement personnalisé pour la gestion quotidienne de vos obligations comptables.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                  </svg>
                ),
              },
              {
                title: 'Optimisation fiscale',
                description: 'Conseil fiscal personnalisé, optimisation de votre charge fiscale dans le respect de la législation. Anticipation des évolutions réglementaires et accompagnement lors des contrôles.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                ),
              },
              {
                title: 'Conseil en gestion',
                description: 'Analyse de votre performance, tableaux de bord personnalisés, aide à la décision stratégique. Accompagnement dans vos projets de développement et amélioration de votre rentabilité.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
              },
              {
                title: 'Audit et expertise',
                description: 'Missions d\'audit légal et contractuel, commissariat aux comptes, évaluations d\'entreprises. Expertise comptable pour accompagner vos opérations complexes et vos projets stratégiques.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.3 },
                }}
                className="group bg-white rounded-lg p-8 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 group-hover:bg-blue-100 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <Link 
                      href="/services" 
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300"
                    >
                      En savoir plus
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section valeur ajoutée */}
      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              <div>
                <h2 className="text-4xl font-light text-gray-800 mb-6">
                  Une approche moderne de la comptabilité
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Notre cabinet allie tradition et innovation pour vous proposer des services 
                  comptables efficaces et adaptés aux enjeux actuels de votre entreprise.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Digitalisation des processus',
                      description: 'Dématérialisation complète pour plus d\'efficacité'
                    },
                    {
                      title: 'Suivi en temps réel',
                      description: 'Tableaux de bord et reporting personnalisés'
                    },
                    {
                      title: 'Sécurité garantie',
                      description: 'Protection optimale de vos données sensibles'
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                        <svg className="w-3 h-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">Tableau de bord client</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Chiffre d'affaires</span>
                        <span className="text-green-600 font-semibold">+12.5%</span>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Trésorerie</span>
                        <span className="text-blue-600 font-semibold">45,230 dT</span>
                      </div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Prochaine échéance</span>
                        <span className="text-orange-600 font-semibold">15 Janvier</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section appel à l'action */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-slate-800 text-white py-20"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-light mb-6">
            Commençons notre collaboration
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Bénéficiez d'un premier rendez-vous gratuit pour faire le point sur vos besoins 
            et découvrir nos solutions personnalisées.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center justify-center"
            >
              Consultation gratuite
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="border border-gray-400 hover:border-white text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-white hover:text-slate-800"
            >
              Découvrir nos tarifs
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Footer professionnel */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Cabinet Comptable Anouar KORTAS
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Expert-comptable diplômé, nous accompagnons les entreprises tunisiennes 
                dans leur développement depuis plus de 20 ans avec professionnalisme et proximité.
              </p>
              <div className="flex space-x-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.23 0H1.77C.8 0 0 .8 0 1.78v20.44C0 23.2.8 24 1.77 24h20.46c.98 0 1.77-.8 1.77-1.78V1.78C24 .8 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.77c-1.14 0-2.06-.92-2.06-2.06s.92-2.06 2.06-2.06 2.06.92 2.06 2.06-.92 2.06-2.06 2.06zm15.11 12.68h-3.56v-5.93c0-1.41-.03-3.22-1.96-3.22-1.96 0-2.26 1.53-2.26 3.11v6.04H9.1V9h3.42v1.56h.05c.48-.91 1.65-1.87 3.4-1.87 3.64 0 4.31 2.4 4.31 5.52v6.24z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Nos services</h4>
              <ul className="space-y-2">
                {[
                  'Comptabilité générale',
                  'Optimisation fiscale',
                  'Conseil en gestion',
                  'Audit et expertise'
                ].map((item, index) => (
                  <li key={index}>
                    <Link href="/services" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Informations</h4>
              <ul className="space-y-2">
                {[
                  { label: 'Nous contacter', href: '/contact' },
                  { label: 'Questions fréquentes', href: '/faq' },
                  { label: 'Mentions légales', href: '/mentions-legales' },
                  { label: 'Confidentialité', href: '/privacy' },
                ].map((item, index) => (
                  <li key={index}>
                    <Link href={item.href} className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="text-gray-500">
              © 2025 Cabinet Comptable Anouar KORTAS. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}