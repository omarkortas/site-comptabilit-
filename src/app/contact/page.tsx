'use client';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { MapPin, Mail, Phone, Clock, Building2, Users } from 'lucide-react';

export default function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};


const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  // … ton code de soumission
};

    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
      setIsSubmitting(false);
      
      // Clear success message after 5 seconds
      setTimeout(() => setStatus(''), 5000);
    }, 1000);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <Navbar />

            {/* Contact Form and Info Section */}
      <section className="py-18 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="xl:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-xl p-2 shadow-sm border border-gray-100"
              >
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold text-slate-900 mb-2">Demande de Contact</h2>
                  <p className="text-gray-600">Remplissez ce formulaire et nous vous recontacterons dans les plus brefs délais.</p>
                </div>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                  >
                    <p className="text-green-800 font-medium">✓ Message envoyé avec succès !</p>
                    <p className="text-green-600 text-sm mt-1">Nous vous répondrons sous 24h ouvrées.</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 outline-none transition-all duration-200"
                        placeholder="Votre nom complet"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Adresse email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 outline-none transition-all duration-200"
                        placeholder="votre.email@exemple.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 outline-none transition-all duration-200"
                        placeholder="+216 XX XXX XXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Entreprise
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 outline-none transition-all duration-200"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet de la demande *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 outline-none transition-all duration-200"
                      required
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="comptabilite">Comptabilité générale</option>
                      <option value="fiscalite">Fiscalité</option>
                      <option value="audit">Audit et expertise</option>
                      <option value="conseil">Conseil en gestion</option>
                      <option value="creation">Création d'entreprise</option>
                      <option value="autre">Autre demande</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-slate-500 focus:ring-2 focus:ring-slate-200 outline-none transition-all duration-200 resize-none"
                      placeholder="Décrivez votre demande ou vos besoins..."
                      rows={5}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto bg-slate-800 hover:bg-slate-700 disabled:bg-gray-400 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 disabled:transform-none disabled:hover:shadow-sm"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-slate-900 rounded-xl p-6 text-white"
              >
                <h3 className="text-xl font-semibold mb-6 text-center">Informations de Contact</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-slate-700 p-2 rounded-lg mt-1">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Adresse</p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Rue du Caire<br />
                        Akouda, Sousse<br />
                        Tunisie
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-slate-700 p-2 rounded-lg mt-1">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Téléphone</p>
                      <p className="text-gray-300 text-sm">+216 XX XXX XXX</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-slate-700 p-2 rounded-lg mt-1">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Email</p>
                      <p className="text-gray-300 text-sm">contact@cabinetkortas.tn</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-slate-700 p-2 rounded-lg mt-1">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Horaires</p>
                      <p className="text-gray-300 text-sm">
                        Lun - Ven: 8h00 - 17h00<br />
                        Sam: 9h00 - 12h00
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Additional Info Cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white rounded-xl p-3 shadow-sm border border-gray-100"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Building2 className="w-5 h-5 text-slate-700" />
                  <h4 className="font-semibold text-slate-900">Cabinet Établi</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Plus de 20 ans d'expérience au service des entreprises tunisiennes.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white rounded-xl p-3 shadow-sm border border-gray-100"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Users className="w-5 h-5 text-slate-700" />
                  <h4 className="font-semibold text-slate-900">Équipe Dédiée</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Une équipe de comptables experts et certifiés à votre service.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-gray-300 py-12">
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
                <li><Link href="/a-propos" className="hover:text-white transition-colors">À propos</Link></li>
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