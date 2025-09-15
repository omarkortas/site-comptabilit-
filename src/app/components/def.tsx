'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const OwnerAnouarKortas = () => {
  const [ownerImage, setOwnerImage] = useState('');
  const [companyImage, setCompanyImage] = useState('');

  useEffect(() => {
    setOwnerImage('/profil.png');
    setCompanyImage('/map.png');
  }, []);

  return (
    <section className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Informations sur le fondateur */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-light text-gray-800 mb-4">
                Votre comptable
              </h2>
              <div className="w-12 h-0.5 bg-blue-600 rounded-full"></div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
              <div className="flex items-start space-x-6 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 relative overflow-hidden rounded-xl border-2 border-white shadow-md">
                    {ownerImage ? (
                      <Image
                        src={ownerImage}
                        alt="Anouar Kortas - Expert Comptable"
                        width={80}
                        height={80}
                        className="object-cover"
                        priority
                      />
                    ) : (
                      <div className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-semibold text-lg">
                        AK
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    Anouar Kortas
                  </h3>
                  <p className="text-blue-600 font-medium mb-1">
                    Comptable Diplômé
                  </p>
                  <p className="text-gray-600 text-sm">
                    Fondateur du cabinet
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-gray-800 text-justify ">Plus de 20 ans d'expérience</strong> au service des entreprises tunisiennes. 
                  Diplômé expert-comptable, Anouar Kortas a développé une expertise reconnue en 
                  comptabilité, fiscalité et conseil stratégique.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-gray-600">Comptable diplômé</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-gray-600">Commissaire aux comptes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-gray-600">Conseil en fiscalité</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-sm text-gray-600">Gestion d'entreprise</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Informations de contact */}
            <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h4 className="font-semibold text-gray-800 mb-4">Informations pratiques</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-700">Akouda, Sousse, Tunisie</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-700">Disponible pour consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">Lun-Ven: 8h00-18h00</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Localisation du cabinet */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Notre cabinet
              </h3>
              <p className="text-gray-600">
                Idéalement situé au cœur de Sousse pour vous accueillir dans les meilleures conditions
              </p>
            </div>

            <div className="relative">
              <div className="h-80 relative overflow-hidden rounded-xl shadow-md border border-gray-200">
                {companyImage ? (
                  <Image
                    src={companyImage}
                    alt="Localisation Cabinet Comptable Anouar KORTAS"
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex flex-col items-center justify-center text-gray-500">
                    <svg className="w-12 h-12 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-medium">Plan de localisation</span>
                  </div>
                )}
                
                {/* Overlay avec informations */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <div className="text-white">
                    <h4 className="font-semibold mb-1">Cabinet Anouar KORTAS</h4>
                    <p className="text-sm opacity-90">Comptable • Akouda</p>
                  </div>
                </div>
              </div>

              {/* Bouton d'action */}
              <div className="mt-6 text-center">
                <button className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  Voir l'itinéraire
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OwnerAnouarKortas;