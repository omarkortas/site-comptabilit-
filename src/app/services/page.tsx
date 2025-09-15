'use client';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calculator, Receipt, TrendingUp, Shield, CheckCircle, Clock, Users, Star, ArrowRight, Building2, FileText, Target } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Calculator,
      title: "Comptabilité Générale",
      description: "Tenue de comptes complète, saisie digitalisée, bilans et reportings personnalisés pour une gestion financière claire et conforme.",
      features: [
        "Tenue de livres comptables",
        "Établissement des états financiers",
        "Déclarations fiscales et sociales",
        "Tableau de bord mensuel"
      ],
      color: "slate"
    },
    {
      icon: Receipt,
      title: "Optimisation Fiscale",
      description: "Stratégies fiscales sur-mesure, déclarations conformes et conseils pour optimiser votre charge fiscale légalement.",
      features: [
        "Audit fiscal personnalisé",
        "Planification fiscale annuelle", 
        "Déclarations TVA et IS",
        "Veille réglementaire"
      ],
      color: "slate"
    },
    {
      icon: TrendingUp,
      title: "Conseil Stratégique",
      description: "Accompagnement personnalisé pour vos projets, business plans et stratégies d'optimisation de la rentabilité.",
      features: [
        "Analyse financière approfondie",
        "Prévisionnels et budgets",
        "Conseil en gestion",
        "Support décisionnel"
      ],
      color: "slate"
    },
    {
      icon: Shield,
      title: "Audit & Contrôle",
      description: "Missions d'audit rigoureuses, commissariat aux comptes et contrôles pour garantir la fiabilité de vos finances.",
      features: [
        "Audit des comptes annuels",
        "Commissariat aux comptes",
        "Due diligence",
        "Contrôle interne"
      ],
      color: "slate"
    }
  ];

  const advantages = [
    {
      icon: Building2,
      title: "Expertise Certifiée",
      description: "Plus de 20 ans d'expérience et une équipe d'experts-comptables diplômés et certifiés par l'Ordre."
    },
    {
      icon: Clock,
      title: "Réactivité Garantie",
      description: "Réponses sous 24h et accompagnement personnalisé pour toutes vos urgences comptables."
    },
    {
      icon: Users,
      title: "Accompagnement Dédié",
      description: "Un interlocuteur unique qui connaît votre entreprise et s'adapte à vos besoins spécifiques."
    },
    {
      icon: FileText,
      title: "Digitalisation Complète",
      description: "Outils numériques avancés pour une gestion dématérialisée et des tableaux de bord en temps réel."
    },
    {
      icon: Target,
      title: "Solutions Sur-Mesure",
      description: "Services adaptés à votre secteur d'activité et à la taille de votre entreprise."
    },
    {
      icon: Star,
      title: "Excellence Reconnue",
      description: "98% de clients satisfaits et une réputation établie dans le tissu économique tunisien."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <Navbar />

      
      {/* Services Grid Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Nos Domaines d'Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Des solutions adaptées à vos besoins, de la comptabilité quotidienne 
              aux conseils stratégiques les plus complexes.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-slate-200"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-slate-100 group-hover:bg-slate-900 w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300">
                    <service.icon className="w-6 h-6 text-slate-700 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-slate-600 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  href="/contact" 
                  className="inline-flex items-center text-slate-700 hover:text-slate-900 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                >
                  Demander un devis
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Pourquoi Choisir Notre Cabinet ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Notre expertise, notre proximité et notre approche personnalisée font 
              la différence pour votre réussite.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="bg-slate-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <advantage.icon className="w-6 h-6 text-slate-700" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Comment Nous Travaillons
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un processus simple et transparent pour une collaboration efficace
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-slate-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Analyse de vos besoins
              </h3>
              <p className="text-gray-600 text-sm">
                Audit initial et évaluation de votre situation comptable
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="bg-slate-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Proposition personnalisée
              </h3>
              <p className="text-gray-600 text-sm">
                Élaboration d'une solution adaptée à votre entreprise
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="bg-slate-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Mise en œuvre
              </h3>
              <p className="text-gray-600 text-sm">
                Déploiement des services avec formation de vos équipes
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center"
            >
              <div className="bg-slate-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Suivi continu
              </h3>
              <p className="text-gray-600 text-sm">
                Accompagnement régulier et optimisation permanente
              </p>
            </motion.div>
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
            Prêt à Optimiser Votre Gestion Financière ?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrez 
            comment nos services peuvent transformer votre entreprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-slate-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              Consultation Gratuite
            </Link>
            <Link
              href="/a-propos"
              className="border border-white/30 hover:border-white text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-white hover:text-slate-900"
            >
              En Savoir Plus
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
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services" className="hover:text-white transition-colors">Comptabilité</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Fiscalité</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Conseil</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Audit</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm">Informations</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
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
  );
}