
import Layout from '../components/Layout'
export default function Plans(){
  const plans=[
    {id:'basic', name:'Island Basic', speed:'100 Mbps', price:49},
    {id:'plus', name:'Island Plus', speed:'300 Mbps', price:69},
    {id:'pro', name:'Island Pro', speed:'1 Gbps', price:99},
  ]
  return (<Layout title="Plans & Pricing">
    <h1>Plans & Pricing</h1>
    <div className="grid">
      {plans.map(p=>(<div key={p.id} className="card"><h3>{p.name}</h3><p>{p.speed}</p><h2>${p.price}/mo</h2><a className="btn" href={`/signup?plan=${p.id}`}>Select</a></div>))}
    </div>
  </Layout>)
}
