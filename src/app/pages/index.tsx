import Navbar from '../components/Navbar';
import { motion } from 'framer-motion'; // Pour animations

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      {/* Hero */}
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="bg-[#001F3F] text-white py-20 text-center">
        <h1 className="text-4xl font-serif mb-4">Expertise Comptable pour Votre Succès</h1>
        <p className="mb-6">Cabinet professionnel et rassurant depuis 20 ans.</p>
        <a href="/contact" className="bg-[#D4AF37] text-[#001F3F] px-6 py-3 rounded hover:opacity-90">Prendre RDV</a>
      </motion.section>
      
      {/* Stats */}
      <section className="container mx-auto py-10 grid md:grid-cols-3 gap-6">
        <motion.div initial={{ y: 50 }} animate={{ y: 0 }} className="text-center p-6 bg-[#001F3F] text-white rounded">
          <h2 className="text-3xl text-[#D4AF37]">20+</h2>
          <p>Ans d'expérience</p>
        </motion.div>
        {/* Autres stats similaires */}
      </section>
      
      {/* Services Teaser */}
      <section className="container mx-auto py-10">
        <h2 className="text-3xl text-center mb-8">Nos Services</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {/* Cards pour services */}
          <div className="p-4 bg-white border border-[#D4AF37] rounded hover:shadow-lg transition">
            <h3>Tenue de Comptes</h3>
            <p>Description brève.</p>
            <a href="/services" className="text-[#D4AF37]">En savoir plus</a>
          </div>
          {/* ... */}
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#001F3F] text-white py-6 text-center">
        {/* Liens, copyright */}
      </footer>
    </div>
  );
}