'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock,Star, ArrowRight, BookOpen, TrendingUp, Calculator, Receipt, Shield, User, Tag, Search, ChevronRight } from 'lucide-react';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const categories = [
    { name: 'Tous', icon: BookOpen, count: 12 },
    { name: 'Fiscalité', icon: Receipt, count: 4 },
    { name: 'Digitalisation', icon: TrendingUp, count: 3 },
    { name: 'Conseil', icon: Calculator, count: 3 },
    { name: 'Audit', icon: Shield, count: 2 }
  ];

  const featuredPost = {
    id: 1,
    title: 'Guide Complet : Optimisation Fiscale 2025 en Tunisie',
    excerpt: 'Découvrez les nouvelles stratégies d\'optimisation fiscale pour 2025, les changements réglementaires majeurs et comment adapter votre stratégie financière aux nouvelles dispositions légales tunisiennes.',
    date: '14 Septembre 2025',
    readTime: '8 min',
    category: 'Fiscalité',
    featured: true,
    slug: '/blog/optimisation-fiscale-2025-tunisie',
    author: 'Anouar Kortas'
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Digitalisation Comptable : ROI et Bénéfices Mesurables',
      excerpt: 'Analyse détaillée des gains de productivité et d\'efficacité obtenus grâce aux outils de digitalisation comptable dans les PME tunisiennes.',
      date: '12 Septembre 2025',
      readTime: '6 min',
      category: 'Digitalisation',
      slug: '/blog/digitalisation-comptable-roi',
      author: 'Anouar Kortas'
    },
    {
      id: 3,
      title: 'Nouvelles Normes Comptables IFRS : Impact sur les Entreprises',
      excerpt: 'Comprendre les implications des dernières normes IFRS et préparer votre entreprise aux changements comptables à venir.',
      date: '10 Septembre 2025',
      readTime: '10 min',
      category: 'Conseil',
      slug: '/blog/normes-ifrs-impact-entreprises',
      author: 'Anouar Kortas'
    },
    {
      id: 4,
      title: 'Audit Interne : Améliorer le Contrôle Financier',
      excerpt: 'Les meilleures pratiques pour mettre en place un système d\'audit interne efficace et renforcer le contrôle de vos processus financiers.',
      date: '8 Septembre 2025',
      readTime: '7 min',
      category: 'Audit',
      slug: '/blog/audit-interne-controle-financier',
      author: 'Anouar Kortas'
    },
    {
      id: 5,
      title: 'Planification Fiscale : Stratégies pour 2025',
      excerpt: 'Anticipez les évolutions fiscales et optimisez votre planification avec nos conseils d\'experts pour l\'année 2025.',
      date: '5 Septembre 2025',
      readTime: '9 min',
      category: 'Fiscalité',
      slug: '/blog/planification-fiscale-2025',
      author: 'Anouar Kortas'
    },
    {
      id: 6,
      title: 'Intelligence Artificielle en Comptabilité',
      excerpt: 'L\'IA révolutionne la comptabilité : automatisation, prédictions et nouvelles opportunités pour les cabinets comptables.',
      date: '3 Septembre 2025',
      readTime: '5 min',
      category: 'Digitalisation',
      slug: '/blog/ia-comptabilite-revolution',
      author: 'Anouar Kortas'
    },
    {
      id: 7,
      title: 'Gestion de Trésorerie : Optimisation et Prévisions',
      excerpt: 'Techniques avancées pour optimiser votre gestion de trésorerie et améliorer la santé financière de votre entreprise.',
      date: '1 Septembre 2025',
      readTime: '8 min',
      category: 'Conseil',
      slug: '/blog/gestion-tresorerie-optimisation',
      author: 'Anouar Kortas'
    }
  ];

  const filteredPosts = selectedCategory === 'Tous' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const stats = [
    { label: 'Articles Publiés', value: '50+' },
    { label: 'Lecteurs Mensuels', value: '2,5K+' },
    { label: 'Sujets Couverts', value: '15+' },
    { label: 'Expertise', value: '20+ ans' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      
      {/* Featured Article */}
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
              <span className="text-sm font-medium text-slate-700">Article à la Une</span>
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
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {featuredPost.readTime}
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 group-hover:text-slate-600 transition-colors">
                  {featuredPost.title}
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="bg-slate-100 w-10 h-10 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-slate-600" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{featuredPost.author}</span>
                  </div>
                  
                  <Link
                    href={"/"}
                    className="inline-flex items-center text-slate-900 hover:text-slate-600 font-medium transition-colors group-hover:translate-x-1 transform duration-300"
                  >
                    Lire l'article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-100 to-gray-100 rounded-xl p-8 text-center">
                <div className="bg-slate-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Receipt className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Article Complet</h3>
                <p className="text-gray-600 text-sm">Guide détaillé avec exemples pratiques et cas d'usage</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Tous Nos Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Explorez nos contenus par catégorie pour trouver les conseils 
              les plus pertinents pour votre entreprise.
            </p>
          </motion.div>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category.name
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.name}</span>
                <span className="bg-white/20 text-xs px-2 py-0.5 rounded-full">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-slate-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-slate-100 group-hover:bg-slate-900 group-hover:text-white text-slate-700 px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900 mb-3 group-hover:text-slate-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                      <div className="bg-slate-100 w-8 h-8 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-slate-600" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-700">{post.author}</p>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>

                    <Link
                      href={post.slug}
                      className="text-slate-900 hover:text-slate-600 transition-colors group-hover:translate-x-1 transform duration-300"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-12"
          >
            <button className="bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-700 px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-0.5">
              Charger Plus d'Articles
            </button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
              <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-slate-700" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Restez Informé
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Recevez nos derniers articles et conseils d'experts directement 
                dans votre boîte mail. Pas de spam, que du contenu de qualité.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
                />
                <button className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                  S'abonner
                </button>
              </div>
              
              <p className="text-xs text-gray-500 mt-4">
                Pas de spam. Désabonnement possible à tout moment.
              </p>
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
            Besoin d'un Accompagnement Personnalisé ?
          </h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Au-delà de nos articles, bénéficiez de notre expertise directe avec 
            une consultation personnalisée pour vos projets comptables et fiscaux.
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
              Découvrir Nos Services
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