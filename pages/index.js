
import Layout from '../components/Layout'
import Link from 'next/link'

export default function Home(){
  return (
    <Layout title="IslandWave — Better, faster, local">
      <section className="hero">
        <div>
          <span className="kicker">Canada • Vancouver Island</span>
          <h1 className="title">Internet that feels local — with the power to serve <i>all of Canada</i>.</h1>
          <p className="subtitle">Ultra‑reliable connectivity, live community content, and a customer portal you’ll actually enjoy using.</p>
          <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
            <Link className="btn" href="/plans">View Plans</Link>
            <Link className="btn alt" href="/signup">Get Started</Link>
          </div>
        </div>
        <div className="card">
          <div style={{position:'relative', paddingBottom:'56.25%', height:0, borderRadius:12, overflow:'hidden'}}>
            <iframe
              src="https://www.youtube.com/embed/live_stream?channel=@Islandwavenet"
              title="IslandWave Live"
              style={{position:'absolute', top:0, left:0, width:'100%', height:'100%', border:0}}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div style={{marginTop:10}} className="badge">Live: community events & local news</div>
        </div>
      </section>

      <section className="section">
        <div className="grid">
          <div className="card"><h3>Blazing Speeds</h3><p>Symmetric plans designed for streaming, gaming, and hybrid work.</p></div>
          <div className="card"><h3>Transparent Billing</h3><p>No hidden fees. Canada‑wide terms, simple monthly pricing.</p></div>
          <div className="card"><h3>Human Support</h3><p>Local experts who pick up the phone and know your neighbourhood.</p></div>
        </div>
      </section>

      <section className="section">
        <div className="card">
          <h2 style={{marginTop:0}}>Status: All systems operational</h2>
          <p style={{color:'#9fb3c8'}}>Real‑time updates for maintenance and outages will appear here.</p>
        </div>
      </section>
    </Layout>
  )
}
