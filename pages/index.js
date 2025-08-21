
import Layout from '../components/Layout'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const AIChat = dynamic(()=>import('../components/AIChat'),{ssr:false})

export default function Home(){
  return (<Layout title="IslandWave — Canada‑wide ISP, community first">
    <section className="hero">
      <div>
        <h1 className="title">A smarter ISP for Canada — live, local, and community‑powered.</h1>
        <p className="subtitle">Next‑gen connectivity with a built‑in assistant to answer anything on the spot.</p>
        <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
          <Link className="btn" href="/plans">See Plans</Link>
          <Link className="btn alt" href="/signup">Get Started</Link>
        </div>
      </div>
      <div className="card">
        <div style={{position:'relative',paddingBottom:'56.25%',height:0,borderRadius:12,overflow:'hidden'}}>
          <iframe src="https://www.youtube.com/embed/live_stream?channel=@Islandwavenet" title="IslandWave Live"
            style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',border:0}} allowFullScreen />
        </div>
        <div style={{marginTop:8,color:'#9fb3c8'}}>Live: community events & local news</div>
      </div>
    </section>

    <section className="grid">
      <div className="card"><h3>Faster</h3><p>Symmetric plans tuned for streaming, gaming, and work‑from‑home.</p></div>
      <div className="card"><h3>Fair</h3><p>Transparent, Canada‑wide terms. No hidden fees.</p></div>
      <div className="card"><h3>Friendlier</h3><p>Support that feels local, with a community you can actually talk to.</p></div>
    </section>

    <AIChat/>
  </Layout>)
}
