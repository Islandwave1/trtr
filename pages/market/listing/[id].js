
import Layout from '../../../components/Layout'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function ListingDetail(){
  const router = useRouter()
  const { id } = router.query
  const [item,setItem]=useState(null)
  const [reviews,setReviews]=useState([])
  const [rText,setRText]=useState('')
  const [stars,setStars]=useState(5)
  const [reportText,setReportText]=useState('')

  useEffect(()=>{
    if(!id) return
    const items = JSON.parse(localStorage.getItem('iw_market')||'[]')
    const found = items.find(x=>x.id===id)
    setItem(found)
    const rv = JSON.parse(localStorage.getItem('iw_reviews_'+id)||'[]')
    setReviews(rv)
  },[id])

  const addReview=()=>{
    const entry={stars, text:rText.trim(), ts:new Date().toLocaleString()}
    const next=[entry,...reviews]
    setReviews(next)
    localStorage.setItem('iw_reviews_'+id, JSON.stringify(next))
    setRText(''); setStars(5)
  }

  const report=()=>{
    const q = JSON.parse(localStorage.getItem('iw_reports')||'[]')
    q.push({id, reason:reportText||'User report', ts:new Date().toLocaleString()})
    localStorage.setItem('iw_reports', JSON.stringify(q))
    alert('Thanks. Our team will review.')
    setReportText('')
  }

  if(!item) return <Layout title="Listing"><p>Loading…</p></Layout>
  return (<Layout title={item.title+' — Listing'}>
    <Link href="/market">← Back to Marketplace</Link>
    <div style={{height:10}}/>
    <div className="grid">
      <div className="card">
        <div className="badge">{item.category}</div>
        <h1 style={{marginBottom:6}}>{item.title}</h1>
        <div style={{color:'#9fb3c8'}}>{item.city}</div>
        <div style={{display:'flex', alignItems:'center', gap:8, margin:'6px 0'}}>
          <span className="star">⭐ {item.rating?.toFixed?.(1)||'5.0'}</span>
          {item.verified && <span className="badge">Verified</span>}
        </div>
        <h2 style={{margin:'6px 0'}}>${item.price}</h2>
        {item.desc && <p>{item.desc}</p>}
        <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
          <button className="btn">Message Seller</button>
          <button className="btn alt">Buy (coming soon)</button>
        </div>
      </div>
      <div className="card">
        <h3>Ratings & Reviews</h3>
        <div style={{display:'flex',gap:8,alignItems:'center'}}>
          <select value={stars} onChange={e=>setStars(parseInt(e.target.value))}>
            {[5,4,3,2,1].map(s=><option key={s} value={s}>{s} ★</option>)}
          </select>
          <input value={rText} onChange={e=>setRText(e.target.value)} placeholder="Write a quick review…" />
          <button className="btn" onClick={addReview}>Post</button>
        </div>
        <div style={{height:8}}/>
        {reviews.length===0 && <p style={{color:'#9fb3c8'}}>No reviews yet.</p>}
        {reviews.map((r,i)=>(<div key={i} className="msg"><strong>{'★'.repeat(r.stars)}</strong><div>{r.text}</div><small style={{color:'#9fb3c8'}}>{r.ts}</small></div>))}
      </div>
      <div className="card">
        <h3>Report Listing</h3>
        <input value={reportText} onChange={e=>setReportText(e.target.value)} placeholder="Why are you reporting this?" />
        <div style={{height:6}}/>
        <button className="btn" onClick={report}>Submit Report</button>
      </div>
    </div>
  </Layout>)
}
