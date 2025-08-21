
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function Layout({title='IslandWave — Canada-wide ISP', children}){
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
      </Head>
      <div className="navbar">
        <div className="nav-inner container">
          <div className="brand">
            <Image src="/logo.png" width={36} height={36} alt="IslandWave logo" />
            <span className="name">IslandWave</span>
          </div>
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/live">Live</Link>
            <Link href="/plans">Plans</Link>
            <Link href="/news">News</Link>
            <Link href="/events">Events</Link>
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
            <small>Canada-wide terms apply. Vancouver Island roots. Community-first internet.</small>
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
            <div><a href="/live">Watch Live</a></div>
          </div>
        </div>
        <div className="container" style={{paddingBottom:24}}>
          <small>© {new Date().getFullYear()} IslandWave. All Rights Reserved.</small>
        </div>
      </footer>
    </>
  )
}
