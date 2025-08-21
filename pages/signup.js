
import Layout from '../components/Layout'
import { useState } from 'react'
import { useRouter } from 'next/router'
export default function SignUp(){
  const router = useRouter()
  const [form,setForm]=useState({plan: router.query.plan||'basic', name:'', email:'', address:'', city:'', province:'', postal:''})
  const submit=(e)=>{e.preventDefault(); alert('Thanks! This demo form submitted. We\'ll enable payments & verification next.');}
  return (<Layout title="Sign Up">
    <h1>Sign Up</h1>
    <div className="card">
      <form onSubmit={submit} className="grid">
        <div><label>Plan</label><input value={form.plan} onChange={e=>setForm({...form,plan:e.target.value})}/></div>
        <div><label>Name</label><input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></div>
        <div><label>Email</label><input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/></div>
        <div><label>Address</label><input required value={form.address} onChange={e=>setForm({...form,address:e.target.value})}/></div>
        <div><label>City</label><input required value={form.city} onChange={e=>setForm({...form,city:e.target.value})}/></div>
        <div><label>Province/Territory</label><input required placeholder="e.g., BC, ON, QC" value={form.province} onChange={e=>setForm({...form,province:e.target.value})}/></div>
        <div><label>Postal Code</label><input required value={form.postal} onChange={e=>setForm({...form,postal:e.target.value})}/></div>
        <div style={{gridColumn:'1/-1'}}><button className="btn">Continue</button></div>
      </form>
    </div>
  </Layout>)
}
