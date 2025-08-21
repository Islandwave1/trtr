
import Layout from '../../components/Layout'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const seed = [
  {id:'1', title:'Used modem (DOCSIS 3.1)', price:60, category:'Electronics', city:'Nanaimo', rating:4.6, seller:'Alex M', verified:true},
  {id:'2', title:'Home Wi‑Fi tune‑up (service call)', price:80, category:'Services', city:'Victoria', rating:5.0, seller:'Priya S', verified:true},
  {id:'3', title:'IslandWave hoodie (L)', price:25, category:'Swag', city:'Courtenay', rating:4.9, seller:'Jamie R', verified:false}
]

export default function Market(){
  const [q,setQ]=useState('')
  const [items,setItems]=useState([])
  const [cat,setCat]=useState('All')

  useEffect(()=>{
    const saved = JSON.parse(localStorage.getItem('iw_market')||'null')
    if(!saved){ localStorage.setItem('iw_market', JSON.stringify(seed)); setItems(seed) }
    else setItems(saved)
  },[])

  const results = items.filter(x=> (cat==='All'||x.category===cat) && (q===''|| x.title.toLowerCase().includes(q.toLowerCase())) )

  return (<Layout title="Marketplace">
    <h1>Marketplace</h1>
    <div className="card" style={{display:'grid',gridTemplateColumns:'1fr 160px 140px',gap:10}}>
      <input placeholder="Search listings…" value={q} onChange={e=>setQ(e.target.value)} />
      <select value={cat} onChange={e=>setCat(e.target.value)}>
        <option>All</option><option>Electronics</option><option>Services</option><option>Swag</option>
      </select>
      <Link className="btn" href="/market/new">+ New Listing</Link>
    </div>
    <div style={{height:10}}/>
    <div className="grid">
      {results.map(x=>(
        <div key={x.id} className="card">
          <div className="badge">{x.category}</div>
          <h3 style={{marginBottom:6}}>{x.title}</h3>
          <div style={{color:'#9fb3c8'}}>{x.city}</div>
          <div style={{display:'flex', alignItems:'center', gap:8, margin:'6px 0'}}>
            <span className="star">⭐ {x.rating.toFixed(1)}</span>
            {x.verified && <span className="badge">Verified</span>}
          </div>
          <h2 style={{margin:'6px 0'}}>${x.price}</h2>
          <Link className="btn" href={`/market/listing/${x.id}`}>View</Link>
        </div>
      ))}
    </div>
  </Layout>)
}
