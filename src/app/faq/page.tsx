'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Calculator, Receipt, TrendingUp, Shield, Phone, Mail, ArrowRight, Clock, Users, CheckCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqCategories = [
    {
      title: "Services Comptables",
      icon: Calculator,
      faqs: [
        {
          question: 'Quels types de services comptables proposez-vous ?',
          answer: 'Nous offrons une gamme complète de services incluant la comptabilité générale digitalisée, l\'optimisation fiscale, le conseil stratégique et l\'audit. Chaque service est adapté à vos besoins spécifiques, que vous soyez une startup, PME ou grande entreprise. Notre approche personnalisée garantit une solution sur-mesure pour votre secteur d\'activité.',
        },
        {
          question: 'Proposez-vous la tenue de comptabilité pour toutes les formes juridiques ?',
          answer: 'Oui, nous accompagnons tous types d\'entreprises : SARL, SA, SNC, entreprises individuelles, professions libérales, associations et même les entrepreneurs en phase de création. Nous adaptons nos services aux spécificités juridiques et sectorielles de chaque client.',
        },
        {
          question: 'Comment se déroule la prise en charge d\'un nouveau client ?',
          answer: 'Notre processus débute par un audit initial gratuit de votre situation comptable, suivi d\'une proposition personnalisée. Nous organisons ensuite le transfert de vos données, la formation de vos équipes et la mise en place d\'outils adaptés. Un interlocuteur dédié vous accompagne tout au long du processus.',
        }
      ]
    },
    {
      title: "Fiscalité & Optimisation",
      icon: Receipt,
      faqs: [
        {
          question: 'Comment garantissez-vous la conformité fiscale ?',
          answer: 'Notre équipe d\'experts suit quotidiennement les évolutions réglementaires tunisiennes et internationales. Nous effectuons des audits fiscaux réguliers, maintenons une veille juridique permanente et utilisons des logiciels certifiés pour assurer la conformité de toutes vos déclarations fiscales et sociales.',
        },
        {
          question: 'Quelles sont vos stratégies d\'optimisation fiscale ?',
          answer: 'Nous développons des stratégies légales d\'optimisation adaptées à votre situation : choix du régime fiscal optimal, optimisation des amortissements, gestion des provisions, planification des investissements et conseils en matière de restructuration. Toutes nos recommandations respectent scrupuleusement la législation en vigueur.',
        },
        {
          question: 'Gérez-vous les déclarations TVA et impôts sur les sociétés ?',
          answer: 'Absolument. Nous prenons en charge l\'ensemble de vos obligations déclaratives : TVA mensuelle ou trimestrielle, impôts sur les sociétés, taxes sur les salaires, déclarations sociales CNSS. Nos outils digitaux permettent un suivi en temps réel et des dépôts électroniques sécurisés.',
        }
      ]
    },
    {
      title: "Digitalisation & Outils",
      icon: TrendingUp,
      faqs: [
        {
          question: 'Comment la digitalisation améliore-t-elle la gestion comptable ?',
          answer: 'Nos outils numériques révolutionnent votre gestion : saisie automatisée des factures par OCR, rapprochements bancaires automatiques, tableaux de bord en temps réel, dématérialisation complète des documents et accès 24h/7j à vos données. Cela réduit les erreurs de 95% et accélère les processus de 60%.',
        },
        {
          question: 'Quels logiciels comptables utilisez-vous ?',
          answer: 'Nous utilisons les dernières versions de logiciels certifiés comme Sage, Ciel, EBP, ainsi que des solutions cloud spécialisées. Nous nous adaptons également à votre environnement existant et pouvons recommander les outils les plus adaptés à votre activité et votre budget.',
        },
        {
          question: 'Mes données sont-elles sécurisées ?',
          answer: 'La sécurité de vos données est notre priorité absolue. Nous utilisons un chiffrement de niveau bancaire, des serveurs sécurisés avec sauvegarde automatique, des accès authentifiés et une politique stricte de confidentialité. Toutes nos procédures respectent les normes RGPD et les standards de cybersécurité.',
        }
      ]
    },
    {
      title: "Tarifs & Délais",
      icon: Clock,
      faqs: [
        {
          question: 'Quels sont vos délais pour établir un bilan comptable ?',
          answer: 'Nos délais varient selon la complexité et la taille de l\'entreprise. Pour une PME bien organisée, nous livrons généralement les états financiers en 15-20 jours. Pour des structures plus complexes, comptez 30-45 jours. Nous respectons toujours les échéances légales et vous tenons informés régulièrement de l\'avancement.',
        },
        {
          question: 'Comment sont structurés vos tarifs ?',
          answer: 'Nos tarifs sont transparents et adaptés à vos besoins réels. Nous proposons des forfaits mensuels incluant la tenue de comptabilité, les déclarations fiscales et un suivi personnalisé. Les missions ponctuelles (audit, conseil) sont facturées au temps passé. Chaque devis est personnalisé et détaillé.',
        },
        {
          question: 'Proposez-vous des consultations gratuites ?',
          answer: 'Oui, nous offrons systématiquement une consultation initiale gratuite de 45 minutes pour analyser votre situation, comprendre vos enjeux et vous proposer des solutions adaptées. Cette rencontre nous permet également de vous présenter notre approche et nos outils sans aucun engagement de votre part.',
        }
      ]
    }
  ];

  const quickStats = [
    {
      icon: Users,
      title: "500+ Clients",
      description: "Accompagnés depuis 2005"
    },
    {
      icon: Clock,
      title: "24h",
      description: "Délai de réponse garanti"
    },
    {
      icon: CheckCircle,
      title: "98%",
      description: "Taux de satisfaction client"
    },
    {
      icon: Shield,
      title: "100%",
      description: "Conformité garantie"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* FAQ Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                className="mb-12"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className="bg-slate-900 w-12 h-12 rounded-lg flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">{category.title}</h2>
                </div>

                {/* FAQs */}
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 10 + faqIndex;
                    return (
                      <motion.div
                        key={faqIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 + faqIndex * 0.1 }}
                        className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="w-full px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50 rounded-xl"
                        >
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold text-slate-900 pr-4">
                              {faq.question}
                            </h3>
                            {openIndex === globalIndex ? (
                              <ChevronUp className="w-5 h-5 text-slate-600 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-slate-600 flex-shrink-0" />
                            )}
                          </div>
                        </button>
                        
                        <motion.div
                          initial={false}
                          animate={{
                            height: openIndex === globalIndex ? 'auto' : 0,
                            opacity: openIndex === globalIndex ? 1 : 0
                          }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5">
                            <p className="text-gray-600 leading-relaxed border-l-4 border-slate-200 pl-4">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
              <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-slate-700" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Vous ne trouvez pas votre réponse ?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Notre équipe d'experts est à votre disposition pour répondre à toutes 
                vos questions spécifiques et vous accompagner dans vos projets.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="bg-slate-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-slate-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Appelez-nous</h3>
                  <p className="text-gray-600 mb-3">Disponible de 8h à 18h</p>
                  <a
                    href="tel:+21626355553"
                    className="text-slate-900 font-medium hover:text-slate-600 transition-colors"
                  >
                    +216 26 355 553
                  </a>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div className="bg-slate-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-slate-700" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Écrivez-nous</h3>
                  <p className="text-gray-600 mb-3">Réponse sous 24h</p>
                  <a
                    href="mailto:contact@cabinet-kortas.tn"
                    className="text-slate-900 font-medium hover:text-slate-600 transition-colors"
                  >
                    contact@cabinet-kortas.tn
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-slate-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-800 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 inline-flex items-center justify-center"
                >
                  Consultation Gratuite
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
                <Link
                  href="/services"
                  className="border border-slate-300 hover:border-slate-900 text-slate-700 hover:text-slate-900 px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center"
                >
                  Découvrir Nos Services
                </Link>
              </div>
            </div>
          </motion.div>
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
            Prêt à Démarrer Votre Projet ?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Bénéficiez de plus de 20 ans d'expertise comptable et d'un accompagnement 
            personnalisé pour optimiser la gestion de votre entreprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-slate-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              Commencer Maintenant
            </Link>
            <Link
              href="/a-propos"
              className="border border-white/30 hover:border-white text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-white hover:text-slate-900"
            >
              À Propos d'Anouar Kortas
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