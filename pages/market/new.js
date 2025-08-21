
import Layout from '../../components/Layout'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function NewListing(){
  const router = useRouter()
  const [f,setF]=useState({title:'',price:'',category:'Electronics',city:'',desc:''})
  const save=(e)=>{
    e.preventDefault()
    const items = JSON.parse(localStorage.getItem('iw_market')||'[]')
    const id = Date.now().toString()
    const newItem = {id, title:f.title, price:parseFloat(f.price||'0'), category:f.category, city:f.city||'Vancouver Island', rating:5.0, seller:'You', verified:false, desc:f.desc||''}
    localStorage.setItem('iw_market', JSON.stringify([newItem, ...items]))
    router.push(`/market/listing/${id}`)
  }
  return (<Layout title="New Listing">
    <h1>Create Listing</h1>
    <form onSubmit={save} className="grid">
      <div><label>Title</label><input required value={f.title} onChange={e=>setF({...f,title:e.target.value})}/></div>
      <div><label>Price (CAD)</label><input required type="number" value={f.price} onChange={e=>setF({...f,price:e.target.value})}/></div>
      <div><label>Category</label>
        <select value={f.category} onChange={e=>setF({...f,category:e.target.value})}>
          <option>Electronics</option><option>Services</option><option>Swag</option>
        </select>
      </div>
      <div><label>City</label><input value={f.city} onChange={e=>setF({...f,city:e.target.value})} placeholder="e.g., Nanaimo"/></div>
      <div style={{gridColumn:'1/-1'}}><label>Description</label><textarea rows={4} value={f.desc} onChange={e=>setF({...f,desc:e.target.value})}/></div>
      <div style={{gridColumn:'1/-1'}}><button className="btn">Publish</button></div>
    </form>
  </Layout>)
}
