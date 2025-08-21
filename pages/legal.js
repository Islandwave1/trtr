import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Legal() {
  return (
    <div className="bg-white text-gray-800 min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
        <p>IslandWave provides internet services in accordance with Canadian law. By using our services, you agree to the following:</p>
        <ul className="list-disc ml-6 mt-4">
          <li>You must reside in Canada to use our services.</li>
          <li>Service speeds and availability depend on your location.</li>
          <li>Billing is monthly unless otherwise stated.</li>
        </ul>
      </main>
      <Footer />
    </div>
  );
}
