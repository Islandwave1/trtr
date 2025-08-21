
import Layout from '../components/Layout'
import { useState } from 'react'
import { useRouter } from 'next/router'
export default function SignUp(){
  const router = useRouter()
  const plan = router.query.plan || 'basic'
  const [form,setForm]=useState({plan, name:'', email:'', address:'', city:'', province:'BC', postal:''})
  const submit=(e)=>{e.preventDefault(); alert('Thanks! This demo form was submitted. Payments coming next.');}
  return (<Layout title="Sign Up">
    <h1>Sign Up</h1>
    <div className="card">
      <form onSubmit={submit}>
        <div className="grid">
          <div><label>Name</label><input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required/></div>
          <div><label>Email</label><input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required/></div>
          <div><label>Address</label><input value={form.address} onChange={e=>setForm({...form,address:e.target.value})} required/></div>
          <div><label>City</label><input value={form.city} onChange={e=>setForm({...form,city:e.target.value})} required/></div>
          <div><label>Province/Territory</label><input value={form.province} onChange={e=>setForm({...form,province:e.target.value})} placeholder="e.g., BC, ON, QC" required/></div>
          <div><label>Postal Code</label><input value={form.postal} onChange={e=>setForm({...form,postal:e.target.value})} required/></div>
        </div>
        <div style={{height:12}}></div>
        <button className="btn">Continue</button>
      </form>
      <p style={{color:'#9fb3c8', marginTop:8}}>This is a demo sign‑up. Payments & provisioning will be enabled when you’re ready.</p>
    </div>
  </Layout>)
}
