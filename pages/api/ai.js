
export default async function handler(req,res){
  if(req.method!=='POST'){ return res.status(405).json({error:'Use POST'}) }
  const { prompt='' } = req.body || {}
  const p = prompt.toLowerCase()

  // Simple rule-based FAQ as a safe placeholder (no external keys needed)
  let answer = ''
  if(p.includes('price') || p.includes('plan') ){
    answer = 'We offer Basic (100 Mbps $49/mo), Plus (300 Mbps $69/mo), and Pro (1 Gbps $99/mo). Prices are in CAD, taxes extra.'
  } else if(p.includes('coverage') || p.includes('available')){
    answer = 'Coverage is expanding Canada‑wide, with strong focus on Vancouver Island. Share your postal code on the Sign Up page to confirm availability.'
  } else if(p.includes('bill') || p.includes('payment')){
    answer = 'You can pay monthly by card in the customer portal (coming soon). Test billing via Stripe will be enabled first.'
  } else if(p.includes('cancel') || p.includes('termination')){
    answer = 'You may cancel anytime. Return any rented equipment within 30 days to avoid replacement fees.'
  } else if(p.includes('support') || p.includes('help')){
    answer = 'For support, visit the Support Lounge page to chat with the community, or email support@islandwave.ca.'
  } else {
    answer = 'Great question! For now I answer common topics: plans, coverage, billing, cancellations, and support. More data sources coming soon.'
  }
  res.status(200).json({answer})
}
