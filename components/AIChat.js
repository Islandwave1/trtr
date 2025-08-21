
import { useEffect, useRef, useState } from 'react'

export default function AIChat(){
  const [open,setOpen]=useState(false)
  const [messages,setMessages]=useState([{role:'assistant',content:'Hi! I\'m the IslandWave Assistant. Ask me about plans, coverage, billing, marketplace safety, or community events.'}])
  const inputRef = useRef(null)

  async function send(){
    const text = inputRef.current.value.trim()
    if(!text) return
    setMessages(m=>[...m,{role:'user',content:text}])
    inputRef.current.value=''
    try{
      const res = await fetch('/api/ai',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({prompt:text})})
      const data = await res.json()
      setMessages(m=>[...m,{role:'assistant',content:data.answer || 'I\'m here to help!'}])
    }catch(e){
      setMessages(m=>[...m,{role:'assistant',content:'(Temporary issue reaching AI. Please try again.)'}])
    }
  }

  useEffect(()=>{
    if(open) setTimeout(()=>{ const el=document.querySelector('.chat-stream'); if(el) el.scrollTop=el.scrollHeight; }, 50)
  },[open,messages])

  return (<>
    <button className="chat-fab" onClick={()=>setOpen(v=>!v)}>💬 Ask IslandWave</button>
    <div className="chatbox" style={{display:open?'block':'none'}}>
      <div className="chat-header"><strong>IslandWave Assistant</strong></div>
      <div className="chat-stream">
        {messages.map((m,i)=>(<div key={i} className={"msg "+(m.role==='user'?'me':'')}>{m.content}</div>))}
      </div>
      <div className="chat-input">
        <input ref={inputRef} placeholder="Type your question..." onKeyDown={(e)=>{if(e.key==='Enter') send()}}/>
        <button className="btn" onClick={send}>Send</button>
      </div>
    </div>
  </>)
}
