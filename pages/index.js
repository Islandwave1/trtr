import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import YouTubeEmbed from '../components/YouTubeEmbed';
import ChatbotWidget from '../components/ChatbotWidget';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-800 via-teal-600 to-blue-900 min-h-screen text-white">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-10 text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to IslandWave</h1>
        <p className="text-xl mb-8">Your Local ISP for Vancouver Island</p>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <YouTubeEmbed embedId="dQw4w9WgXcQ" />
        </div>
      </main>
      <ChatbotWidget />
      <Footer />
    </div>
  );
}
