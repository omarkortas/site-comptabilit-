'use client';
import Navbar from '../components/Navbar';
// import { useUser } from '../../contexts/UserContext'; // Assume fetch data
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Dashboard() {
  // const { user } = useUser();
  const [data, setData] = useState({ factures: [], echeances: [] }); // Fetch from API

  useEffect(() => {
    // Fetch sécurisé via API: axios.get('/api/dashboard', { headers: { Authorization: `Bearer ${token}` } })
    // Set data
  }, []);

  // if (!user) return <div>Redirection vers login...</div>;

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-64 bg-[#001F3F] text-white p-4 hidden md:block">
        <h2 className="text-xl mb-4">Espace Client</h2>
        <ul>
          <li><a href="/espace-client/dashboard" className="hover:text-[#D4AF37]">Dashboard</a></li>
          <li><a href="/espace-client/documents" className="hover:text-[#D4AF37]">Documents</a></li>
          {/* ... */}
        </ul>
      </aside>
      
      {/* Main */}
      <main className="flex-1 p-6">
        <Navbar /> {/* Ou custom pour espace client */}
        {/* <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl mb-6">Bienvenue, {user.name}</motion.h1> */}
        
        {/* Factures Table */}
        <section className="mb-8">
          <h2 className="text-2xl mb-4">Factures</h2>
          <table className="w-full border-collapse">
            <thead className="bg-[#001F3F] text-white">
              <tr><th>Date</th><th>Montant</th><th>Statut</th></tr>
            </thead>
            <tbody>
              {/* {data.factures.map((f) => (
                // <tr key={f.id} className="border-b"><td>{f.date}</td><td>{f.montant}€</td><td className={f.statut === 'Payé' ? 'text-green-500' : 'text-[#D4AF37]'}>{f.statut}</td></tr>
              ))} */}
            </tbody>
          </table>
        </section>
        
        {/* Échéances */}
        <section>
          <h2 className="text-2xl mb-4">Échéances</h2>
          <ul className="space-y-2">
            {/* {data.echeances.map((e) => (
              // <li key={e.id} className="p-4 bg-gray-100 rounded flex justify-between">
              //   <span>{e.description}</span>
              //   <span className="text-[#D4AF37]">{e.date}</span>
              // </li>
            ))} */}
          </ul>
        </section>
      </main>
    </div>
  );
}