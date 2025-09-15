'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import { Calculator, Receipt, TrendingUp, Shield, CheckCircle, Award, Users, Target, ArrowRight, Building2, BookOpen, Briefcase, Star, Phone, Mail, MapPin, Linkedin } from 'lucide-react';

export default function AboutAnouarKortas() {
  const expertise = [
    {
      icon: Calculator,
      title: "Comptabilité Générale",
      description: "Maîtrise complète des normes comptables tunisiennes et internationales"
    },
    {
      icon: Receipt,
      title: "Optimisation Fiscale",
      description: "Stratégies fiscales avancées et conformité réglementaire"
    },
    {
      icon: TrendingUp,
      title: "Conseil Stratégique",
      description: "Accompagnement décisionnel et planification financière"
    },
    {
      icon: Shield,
      title: "Audit & Contrôle",
      description: "Missions d'audit rigoureuses et commissariat aux comptes"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "20+ Ans d'Expérience",
      description: "Plus de deux décennies au service de l'excellence comptable"
    },
    {
      icon: Users,
      title: "500+ Clients Accompagnés",
      description: "Entreprises de toutes tailles dans divers secteurs d'activité"
    },
    {
      icon: Target,
      title: "98% Satisfaction Client",
      description: "Une réputation bâtie sur la qualité et la confiance"
    },
    {
      icon: Building2,
      title: "Expert Comptable Certifié",
      description: "Certification officielle de l'Ordre des Experts Comptables (OECT)"
    }
  ];

  const values = [
    {
      icon: Star,
      title: "Excellence",
      description: "Recherche permanente de la qualité et de la précision dans chaque mission"
    },
    {
      icon: Users,
      title: "Proximité",
      description: "Relation de confiance et accompagnement personnalisé de chaque client"
    },
    {
      icon: BookOpen,
      title: "Innovation",
      description: "Intégration des dernières technologies pour optimiser nos services"
    },
    {
      icon: Briefcase,
      title: "Intégrité",
      description: "Transparence, éthique professionnelle et respect des engagements"
    }
  ];

  return (
    <>
      <Head>
        <title>À Propos - Anouar Kortas | Cabinet Comptable</title>
        <meta
          name="description"
          content="Découvrez Anouar Kortas, fondateur et expert comptable du Cabinet Comptable Anouar KORTAS, avec plus de 20 ans d'expérience en comptabilité, fiscalité et conseil stratégique."
        />
        <meta
          name="keywords"
          content="Anouar Kortas, expert comptable, comptabilité, fiscalité, conseil stratégique, Tunisie"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="bg-gray-50 min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                À Propos d'Anouar KORTAS
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Fondateur et expert comptable avec une passion pour l'excellence et l'innovation 
                au service de votre réussite financière.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Photo Profile */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full flex justify-center"
              >
                <div className="relative">
                  <Image
                    src="/profil.png"
                    alt="Anouar Kortas - Expert Comptable"
                    width={482}
                    height={740}
                    className="rounded-xl shadow-lg w-full max-w-md h-auto"
                    priority
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                </div>
              </motion.div>

              {/* Contenu Principal */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">
                    Votre Partenaire de Confiance
                  </h2>
<p className="text-gray-600 leading-relaxed mb-6 text-justify">
                    Je suis Anouar Kortas, fondateur du Cabinet Comptable Anouar KORTAS, basé en Tunisie. 
                    Avec plus de 20 ans d'expérience dans le domaine de la comptabilité, de la fiscalité 
                    et du conseil stratégique, je me consacre à offrir des solutions sur mesure pour 
                    accompagner les entreprises vers une gestion financière optimale.
                  </p>
<p className="text-gray-600 leading-relaxed mb-6 text-justify">
                    Depuis 2005, j'ai eu le privilège d'accompagner plus de 500 clients, leur permettant 
                    de naviguer avec succès dans un environnement économique en constante évolution. 
                    Mon approche allie expertise technique et innovation digitale, avec une certification 
                    d'expert comptable délivrée par l'Ordre des Experts Comptables de Tunisie (OECT).
                  </p>
                </div>

                {/* Contact rapide */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Contactez-moi</h3>
                  <div className="space-y-3">
                    <a
                      href="tel:+21626355553"
                      className="flex items-center space-x-3 text-gray-600 hover:text-slate-900 transition-colors group"
                    >
                      <div className="bg-slate-100 group-hover:bg-slate-900 w-10 h-10 rounded-lg flex items-center justify-center transition-colors">
                        <Phone className="w-5 h-5 text-slate-600 group-hover:text-white" />
                      </div>
                      <span>+216 26 355 553</span>
                    </a>
                    <a
                      href="mailto:contact@cabinet-kortas.tn"
                      className="flex items-center space-x-3 text-gray-600 hover:text-slate-900 transition-colors group"
                    >
                      <div className="bg-slate-100 group-hover:bg-slate-900 w-10 h-10 rounded-lg flex items-center justify-center transition-colors">
                        <Mail className="w-5 h-5 text-slate-600 group-hover:text-white" />
                      </div>
                      <span>contact@cabinet-kortas.tn</span>
                    </a>
                    <a
                      href="https://linkedin.com/in/anouarkortas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 text-gray-600 hover:text-slate-900 transition-colors group"
                    >
                      <div className="bg-slate-100 group-hover:bg-slate-900 w-10 h-10 rounded-lg flex items-center justify-center transition-colors">
                        <Linkedin className="w-5 h-5 text-slate-600 group-hover:text-white" />
                      </div>
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Mes Domaines d'Expertise
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Une maîtrise approfondie des métiers comptables pour vous accompagner 
                dans tous vos projets financiers.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 text-center group"
                >
                  <div className="bg-slate-100 group-hover:bg-slate-900 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                    <item.icon className="w-8 h-8 text-slate-700 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Chiffres Clés & Réalisations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Des résultats concrets qui témoignent de notre engagement 
                et de notre expertise reconnue.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-slate-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Mes Valeurs & Engagement
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Les principes qui guident mon action quotidienne pour vous offrir 
                un service d'exception.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-slate-100 group-hover:bg-slate-900 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300">
                      <value.icon className="w-6 h-6 text-slate-700 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-slate-900 text-white py-20"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Travaillons Ensemble
            </h2>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Découvrez comment mon expertise peut transformer la gestion financière 
              de votre entreprise. Consultation gratuite et sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-slate-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 inline-flex items-center justify-center"
              >
                Prendre Rendez-vous
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link
                href="/services"
                className="border border-white/30 hover:border-white text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-white hover:text-slate-900 inline-flex items-center justify-center"
              >
                Découvrir Mes Services
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="bg-slate-900 text-gray-300 py-12 border-t border-slate-700">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-xl font-semibold text-white mb-4">Cabinet Anouar KORTAS</h3>
                <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                  Excellence comptable et innovation au service de votre réussite.
                  Votre partenaire de confiance depuis plus de 20 ans.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="bg-slate-700 hover:bg-slate-600 p-2 rounded-lg transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-slate-700 hover:bg-slate-600 p-2 rounded-lg transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-4 text-sm">Navigation</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="hover:text-white transition-colors">Accueil</Link></li>
                  <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                  <li><Link href="/a-propos" className="hover:text-white transition-colors">À Propos</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-white mb-4 text-sm">Informations</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                  <li><Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</Link></li>
                  <li><Link href="/privacy" className="hover:text-white transition-colors">Confidentialité</Link></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-slate-700 mt-12 pt-8 text-center">
              <p className="text-gray-400 text-sm">© 2025 Cabinet Anouar KORTAS. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}