
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>IslandWave | Vancouver Island ISP</title>
      </Head>
      <header style={{backgroundColor: '#003366', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <img src="/logo.png" alt="IslandWave Logo" style={{height: '50px'}} />
        <nav>
          <a href="#" style={{color: '#fff', margin: '0 10px'}}>Home</a>
          <a href="#" style={{color: '#fff', margin: '0 10px'}}>Plans</a>
          <a href="#" style={{color: '#fff', margin: '0 10px'}}>Community</a>
          <a href="#" style={{color: '#fff', margin: '0 10px'}}>Contact</a>
        </nav>
      </header>
      <main style={{textAlign: 'center', padding: '2rem'}}>
        <h1 style={{fontSize: '3rem', color: '#003366'}}>Welcome to IslandWave</h1>
        <p style={{fontSize: '1.5rem', color: '#555'}}>Your local ISP for Vancouver Island</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/live_stream?channel=YOUR_CHANNEL_ID" frameBorder="0" allowFullScreen></iframe>
        <div style={{marginTop: '2rem'}}>
          <a href="#" style={{backgroundColor: '#003366', color: '#fff', padding: '10px 20px', borderRadius: '5px'}}>Sign Up</a>
        </div>
      </main>
      <footer style={{backgroundColor: '#f4f4f4', textAlign: 'center', padding: '1rem', marginTop: '2rem'}}>
        <p>© 2025 IslandWave. All rights reserved. | <a href="/legal">Legal</a></p>
      </footer>
      <script src="/chatbot.js"></script>
    </div>
  );
}
