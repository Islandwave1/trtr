
import Layout from '../components/Layout'
import { useEffect, useState, useRef } from 'react'

export default function Support(){
  const [items,setItems]=useState([])
  const [input,setInput]=useState('')
  const endRef=useRef(null)

  useEffect(()=>{
    const saved = JSON.parse(sessionStorage.getItem('iw_support')||'[]')
    setItems(saved)
  },[])

  useEffect(()=>{ endRef.current?.scrollIntoView({behavior:'smooth'}) },[items])

  const send=()=>{
    if(!input.trim()) return
    const next=[...items,{role:'user',text:input.trim(),ts:new Date().toLocaleTimeString()}]
    setItems(next); sessionStorage.setItem('iw_support', JSON.stringify(next)); setInput('')
  }

  return (<Layout title="Support Lounge">
    <h1>Support Lounge</h1>
    <p style={{color:'#9fb3c8'}}>Chat with neighbours and staff. (Demo resets when you close the tab.)</p>
    <div className="card" style={{height:360, overflow:'auto', display:'flex', flexDirection:'column'}}>
      {items.map((m,i)=>(<div key={i} className="msg" style={{alignSelf:m.role==='user'?'flex-end':'flex-start',maxWidth:'80%'}}>{m.text}</div>))}
      <div ref={endRef} />
    </div>
    <div style={{display:'flex', gap:8, marginTop:8}}>
      <input value={input} onChange={e=>setInput(e.target.value)} placeholder="Type a message..." />
      <button className="btn" onClick={send}>Send</button>
    </div>
  </Layout>)
}
