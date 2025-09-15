'use client';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MapPin, Clock, Users, ArrowRight, Star, Calendar, Briefcase, User, ChevronRight, Search, Mail, Phone } from 'lucide-react';

export default function Recrutement() {
  // Sample job openings data
  const featuredJob = {
    title: 'Expert-Comptable Senior',
    description: 'Rejoignez notre équipe pour accompagner nos clients dans leur gestion comptable et fiscale. Poste stratégique avec évolution vers un poste de management d\'équipe.',
    fullDescription: 'Nous recherchons un Expert-Comptable Senior passionné pour rejoindre notre équipe dynamique. Vous serez responsable du suivi d\'un portefeuille clients diversifié et participerez au développement de nos services.',
    location: 'Tunis, Tunisie',
    type: 'CDI',
    experience: '5+ ans',
    salary: 'Selon profil',
    slug: '/recrutement/expert-comptable-senior',
    featured: true
  };

  const jobOpenings = [
    {
      title: 'Consultant Fiscal Junior',
      description: 'Participez à l\'élaboration de stratégies fiscales pour nos clients. Formation approfondie assurée par nos experts.',
      location: 'Tunis, Tunisie',
      type: 'CDI',
      experience: '2-3 ans',
      salary: 'Négociable',
      slug: '/recrutement/consultant-fiscal-junior',
    },
    {
      title: 'Assistant Comptable',
      description: 'Supportez nos équipes dans la saisie comptable et la préparation des bilans. Poste idéal pour jeunes diplômés.',
      location: 'Télétravail partiel',
      type: 'CDD',
      experience: 'Débutant accepté',
      salary: 'Selon grille',
      slug: '/recrutement/assistant-comptable',
    },
    {
      title: 'Auditeur Interne',
      description: 'Rejoignez notre équipe d\'audit pour accompagner nos clients dans l\'amélioration de leurs processus internes.',
      location: 'Tunis, Tunisie',
      type: 'CDI',
      experience: '3-5 ans',
      salary: 'Attractif',
      slug: '/recrutement/auditeur-interne',
    },
    {
      title: 'Consultant Digital',
      description: 'Accompagnez la transformation digitale de nos clients avec les derniers outils comptables et fiscaux.',
      location: 'Hybride',
      type: 'CDI',
      experience: '2+ ans',
      salary: 'Selon profil',
      slug: '/recrutement/consultant-digital',
    },
    {
      title: 'Responsable Paie',
      description: 'Prenez en charge la gestion complète de la paie pour notre portefeuille clients PME/PMI.',
      location: 'Tunis, Tunisie',
      type: 'CDI',
      experience: '4+ ans',
      salary: 'Négociable',
      slug: '/recrutement/responsable-paie',
    }
  ];

  const benefits = [
    { title: 'Formation Continue', description: 'Formations certifiantes et mise à jour des compétences' },
    { title: 'Évolution Rapide', description: 'Possibilités d\'évolution vers des postes à responsabilités' },
    { title: 'Environnement Modern', description: 'Outils digitaux dernière génération' },
    { title: 'Équilibre Vie Pro/Perso', description: 'Télétravail partiel et horaires flexibles' },
  ];

  const stats = [
    { label: 'Collaborateurs', value: '25+' },
    { label: 'Années d\'Expérience', value: '20+' },
    { label: 'Clients Satisfaits', value: '150+' },
    { label: 'Taux de Rétention', value: '95%' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      
      {/* Featured Job */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="text-sm font-medium text-slate-700">Poste à Pourvoir en Priorité</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredJob.type}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {featuredJob.location}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Briefcase className="w-4 h-4 mr-1" />
                    {featuredJob.experience}
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-slate-600 transition-colors">
                  {featuredJob.title}
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-4">
                  {featuredJob.description}
                </p>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  {featuredJob.fullDescription}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <p><span className="font-medium">Salaire :</span> {featuredJob.salary}</p>
                  </div>
                  
                  <Link
                    href="/contact"
                    className="inline-flex items-center bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-medium transition-colors group-hover:translate-x-1 transform duration-300"
                  >
                    Postuler Maintenant
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-100 to-gray-100 rounded-xl p-8 text-center">
                <div className="bg-slate-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Poste Stratégique</h3>
                <p className="text-gray-600 text-sm">Évolution rapide vers des responsabilités managériales</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Job Openings */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Toutes Nos Opportunités
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Découvrez nos postes ouverts et trouvez celui qui correspond 
              parfaitement à votre profil et à vos ambitions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-slate-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-slate-100 group-hover:bg-slate-900 group-hover:text-white text-slate-700 px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300">
                      {job.type}
                    </span>
                    <div className="flex items-center text-gray-400 text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {job.experience}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-slate-600 transition-colors">
                    {job.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {job.description}
                  </p>

                  <div className="space-y-2 mb-4 text-xs text-gray-500">
                    <div className="flex items-center">
                      <MapPin className="w-3 h-3 mr-2" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3 h-3 mr-2" />
                      <span>Salaire : {job.salary}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <Link
                      href="/contact"
                      className="text-slate-900 hover:text-slate-600 text-sm font-medium transition-colors"
                    >
                      Voir les détails
                    </Link>

                    <Link
                      href="/contact"
                      className="text-slate-900 hover:text-slate-600 transition-colors group-hover:translate-x-1 transform duration-300"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Pourquoi Nous Rejoindre ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Bien plus qu'un emploi, découvrez un environnement de travail 
              stimulant où votre épanouissement professionnel est notre priorité.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
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
            Prêt à Faire Partie de Notre Équipe ?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Envoyez-nous votre candidature ou contactez-nous pour plus d'informations 
            sur nos opportunités et notre processus de recrutement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-slate-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              Envoyer ma Candidature
            </Link>
            <Link
              href="/a-propos"
              className="border border-white/30 hover:border-white text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-white hover:text-slate-900"
            >
              En Savoir Plus sur Nous
            </Link>
          </div>

          {/* Contact Info */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="bg-slate-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Candidature Spontanée</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Envoyez votre CV même sans offre correspondante
                </p>
                <a href="mailto:recrutement@cabinet-kortas.tn" className="text-gray-100 hover:text-white text-sm transition-colors">
                  recrutement@cabinet-kortas.tn
                </a>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="bg-slate-700 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Questions RH</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Échangeons sur votre projet professionnel
                </p>
                <a href="tel:+21671234567" className="text-gray-100 hover:text-white text-sm transition-colors">
                  +216 71 234 567
                </a>
              </div>
            </div>
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