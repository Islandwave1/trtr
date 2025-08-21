
export default async function handler(req,res){
  if(req.method!=='POST'){ return res.status(405).json({error:'Use POST'}) }
  const { prompt='' } = req.body || {}
  const p = prompt.toLowerCase()
  let answer = ''
  if(p.includes('price') || p.includes('plan')){
    answer = 'Plans: Basic 100 Mbps $49/mo, Plus 300 Mbps $69/mo, Pro 1 Gbps $99/mo (CAD, taxes extra).'
  } else if(p.includes('coverage') || p.includes('available')){
    answer = 'Coverage is growing Canada‑wide with strong presence on Vancouver Island. Use Sign Up to confirm by postal code.'
  } else if(p.includes('bill') || p.includes('payment') || p.includes('invoice')){
    answer = 'Payments will appear in your Portal. Stripe card payments are next; Interac instructions will also be available.'
  } else if(p.includes('market') || p.includes('sell') || p.includes('listing')){
    answer = 'Marketplace: verified profiles, ratings, and reports for safety. Create a listing on the Marketplace page.'
  } else if(p.includes('support')){
    answer = 'Visit Support Lounge to chat with neighbours and staff, or email support@islandwave.ca.'
  } else if(p.includes('privacy') || p.includes('pipeda')){
    answer = 'We follow PIPEDA across Canada and provincial privacy laws. See the Privacy Policy for details.'
  } else {
    answer = 'I can help with plans, coverage, billing, marketplace, and support. Ask me anything!' 
  }
  res.status(200).json({answer})
}
