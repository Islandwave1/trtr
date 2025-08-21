import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BeatYourBillModal from '../components/BeatYourBillModal';
import { useState } from 'react';

export default function Plans() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-center">Our Internet Plans</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">Basic</h2>
            <p className="mt-2">$50/month</p>
            <button
              onClick={() => setShowModal(true)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Beat Your Bill
            </button>
          </div>
        </div>
        {showModal && <BeatYourBillModal onClose={() => setShowModal(false)} />}
      </main>
      <Footer />
    </div>
  );
}
