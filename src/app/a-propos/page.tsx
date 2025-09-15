'use client';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, Users, Award, TrendingUp, Shield, Target, Heart, Lightbulb } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Shield,
      title: "Transparence",
      description: "Une communication claire et honnête dans tous nos échanges"
    },
    {
      icon: Heart,
      title: "Engagement",
      description: "Un accompagnement personnalisé et dévoué à votre réussite"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "L'adoption des meilleures technologies pour optimiser nos services"
    }
  ];

  const teamMembers = [
    {
      name: "Anouar KORTAS",
      role: "Expert-Comptable Fondateur",
      description: "Plus de 20 ans d'expérience en comptabilité et fiscalité, spécialisé dans l'accompagnement des PME et grandes entreprises."
    },
    {
      name: "Fatima BEN SALEM",
      role: "Responsable Fiscalité",
      description: "Experte en optimisation fiscale et conformité réglementaire, elle assure la sécurité juridique de nos clients."
    },
    {
      name: "Mohamed TRABELSI",
      role: "Auditeur Senior",
      description: "Spécialiste en audit et contrôle de gestion, garantissant la fiabilité et la transparence des comptes."
    }
  ];

  const stats = [
    { number: "500+", label: "Clients satisfaits" },
    { number: "20+", label: "Années d'expérience" },
    { number: "15", label: "Experts comptables" },
    { number: "98%", label: "Taux de satisfaction" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <Navbar />

      
      
      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Notre Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Offrir des services comptables d'excellence, alliant expertise humaine et technologies 
              modernes pour garantir la réussite et la croissance durable de nos clients.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                Excellence & Innovation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nous intégrons constamment les dernières innovations technologiques pour 
                simplifier et optimiser la gestion comptable de nos clients. Notre approche 
                combine l'expertise traditionnelle avec des outils numériques de pointe.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Notre engagement : fournir des solutions personnalisées qui répondent aux 
                besoins spécifiques de chaque client, des startups innovantes aux grandes 
                entreprises établies.
              </p>
              
              <div className="flex items-center space-x-3 pt-4">
                <Target className="w-5 h-5 text-slate-700" />
                <span className="font-medium text-slate-900">
                  Solutions sur-mesure pour chaque entreprise
                </span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-slate-900 rounded-xl p-8 text-white"
            >
              <h3 className="text-2xl font-semibold mb-6">Nos Valeurs Fondamentales</h3>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-slate-700 p-2 rounded-lg mt-1">
                      <value.icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{value.title}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Notre Équipe d'Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Une équipe de professionnels qualifiés et passionnés, dédiée à votre 
              succès financier et à l'accompagnement de vos projets.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-slate-200"
              >
                <div className="bg-slate-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-slate-700 transition-colors">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-slate-600 font-medium mb-3 text-sm">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-6 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Pourquoi Nous Choisir ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des raisons concrètes qui font de nous le partenaire idéal pour votre entreprise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <div className="bg-slate-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Expertise Reconnue
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Plus de 20 ans d'expérience et une équipe certifiée par l'Ordre des Experts-Comptables.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <div className="bg-slate-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Accompagnement Personnalisé
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Un suivi individualisé et des conseils adaptés à votre secteur d'activité et vos objectifs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
            >
              <div className="bg-slate-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Sécurité & Confidentialité
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Protection maximale de vos données avec des systèmes sécurisés et une confidentialité absolue.
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
            Prêt à Collaborer avec Notre Équipe ?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Rejoignez plus de 500 entreprises qui font confiance à notre expertise 
            pour leur succès et leur croissance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-slate-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              Consultation Gratuite
            </Link>
            <Link
              href="/services"
              className="border border-white/30 hover:border-white text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-white hover:text-slate-900"
            >
              Découvrir nos Services
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-300 py-6 border-t border-slate-700">
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