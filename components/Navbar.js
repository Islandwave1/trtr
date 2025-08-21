export default function Navbar() {
  return (
    <nav className="bg-blue-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/logo.png" alt="IslandWave Logo" className="h-10 mr-2" />
        <span className="font-bold text-xl">IslandWave</span>
      </div>
      <div className="space-x-4">
        <a href="/" className="hover:underline">Home</a>
        <a href="/plans" className="hover:underline">Plans</a>
        <a href="/legal" className="hover:underline">Legal</a>
      </div>
    </nav>
  );
}
