
import Link from 'next/link'
import Image from 'next/image'

export default function Layout({title='IslandWave', children}){
  return (<>
    <div className="nav">
      <div className="nav-inner container">
        <div className="brand">
          <Image src="/logo.png" width={36} height={36} alt="IslandWave logo"/>
          <span className="name">IslandWave</span>
        </div>
        <div className="links">
          <Link href="/">Home</Link>
          <Link href="/live">Live</Link>
          <Link href="/plans">Plans</Link>
          <Link href="/community">Community</Link>
          <Link href="/support-lounge">Support</Link>
          <Link href="/signup">Sign Up</Link>
          <Link href="/portal">Portal</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/legal/terms">Legal</Link>
        </div>
      </div>
    </div>
    <main className="container">{children}</main>
    <footer className="footer">
      <div className="footer-inner container">
        <div>
          <h3 style={{marginTop:0}}>IslandWave</h3>
          <small>Canada-wide terms apply. Community-first internet with Vancouver Island roots.</small>
        </div>
        <div>
          <div className="kicker">Legal</div>
          <div><Link href="/legal/terms">Terms of Service</Link></div>
          <div><Link href="/legal/privacy">Privacy Policy</Link></div>
          <div><Link href="/legal/aup">Acceptable Use</Link></div>
          <div><Link href="/legal/service-agreement">Service Agreement</Link></div>
        </div>
        <div>
          <div className="kicker">Company</div>
          <div><Link href="/news">News</Link></div>
          <div><Link href="/events">Events</Link></div>
          <div><Link href="/contact">Contact</Link></div>
        </div>
        <div>
          <div className="kicker">Customer</div>
          <div><Link href="/signup">Sign Up</Link></div>
          <div><Link href="/portal">My Portal</Link></div>
          <div><Link href="/live">Watch Live</Link></div>
        </div>
      </div>
      <div className="container" style={{paddingBottom:20}}>
        <small>© {new Date().getFullYear()} IslandWave. All Rights Reserved.</small>
      </div>
    </footer>
  </>)
}
