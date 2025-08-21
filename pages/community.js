
import Layout from '../components/Layout'
import { useEffect, useState } from 'react'

export default function Community(){
  const [posts,setPosts]=useState([])
  const [text,setText]=useState('')

  useEffect(()=>{
    const saved = JSON.parse(localStorage.getItem('iw_posts')||'[]')
    setPosts(saved)
  },[])

  const addPost=()=>{
    if(!text.trim()) return
    const p = { id:Date.now(), author:'Anonymous', body:text.trim(), ts:new Date().toLocaleString() }
    const next=[p, ...posts]
    setPosts(next)
    localStorage.setItem('iw_posts', JSON.stringify(next))
    setText('')
  }

  return (<Layout title="Community">
    <h1>Community Feed</h1>
    <div className="card">
      <label>Share an update</label>
      <textarea rows={3} value={text} onChange={e=>setText(e.target.value)} placeholder="What\'s happening in your neighbourhood?" />
      <div style={{height:10}}/>
      <button className="btn" onClick={addPost}>Post</button>
    </div>
    <div style={{height:12}}/>
    <div className="grid">
      {posts.map(p=>(<div key={p.id} className="card">
        <strong>{p.author}</strong> <span style={{color:'#9fb3c8'}}>• {p.ts}</span>
        <p>{p.body}</p>
      </div>))}
    </div>
  </Layout>)
}
