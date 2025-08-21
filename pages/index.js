
import Layout from '../components/Layout'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const AIChat = dynamic(()=>import('../components/AIChat'),{ssr:false})

export default function Home(){
  return (<Layout title="IslandWave — ISP + Trusted Marketplace">
    <section className="hero">
      <div>
        <span className="kicker">Canada • Vancouver Island</span>
        <h1 className="title">Your community ISP — now with a trusted marketplace.</h1>
        <p className="subtitle">Verified profiles, ratings, reports, and a smart assistant for instant answers.</p>
        <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
          <Link className="btn" href="/market">Browse Marketplace</Link>
          <Link className="btn alt" href="/plans">See Plans</Link>
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
      <div className="card"><h3>Verified Users</h3><p>Badges & ratings build trust in every transaction.</p></div>
      <div className="card"><h3>Local Focus</h3><p>Listings across Vancouver Island and Canada.</p></div>
      <div className="card"><h3>Smart Support</h3><p>AI Assistant answers plans, billing, and marketplace questions.</p></div>
    </section>
    <AIChat/>
  </Layout>)
}
