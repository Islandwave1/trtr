
import Layout from '../../components/Layout'
import { useEffect, useState } from 'react'

export default function AdminModeration(){
  const [reports,setReports]=useState([])
  useEffect(()=>{
    setReports(JSON.parse(localStorage.getItem('iw_reports')||'[]'))
  },[])
  const clear=()=>{ localStorage.removeItem('iw_reports'); setReports([]) }
  return (<Layout title="Admin • Moderation Queue">
    <h1>Moderation Queue</h1>
    <p style={{color:'#9fb3c8'}}>Demo view. Replace with auth‑protected admin later.</p>
    {reports.length===0 && <p>No reports pending.</p>}
    {reports.map((r,i)=>(<div key={i} className="card"><div>Listing ID: {r.id}</div><div>Reason: {r.reason}</div><small style={{color:'#9fb3c8'}}>{r.ts}</small></div>))}
    <div style={{height:8}}/>
    <button className="btn" onClick={clear}>Clear Queue</button>
  </Layout>)
}
