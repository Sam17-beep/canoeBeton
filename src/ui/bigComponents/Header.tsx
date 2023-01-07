import Link from 'next/link'
import { CSSProperties, FunctionComponent, PropsWithChildren } from 'react'

interface HeaderProps {
  current: string
}

const Header: FunctionComponent<PropsWithChildren<HeaderProps>> = ({
  current,
}) => {
  return (
    <div style={parent}>
      <Link href="/" style={current === 'home' ? activeLinkStyle : linkStyle}>
        Accueil
      </Link>
      <Link
        href="/event"
        style={current === 'event' ? activeLinkStyle : linkStyle}
      >
        Événement
      </Link>
      <Link
        href="/team"
        style={current === 'team' ? activeLinkStyle : linkStyle}
      >
        Équipe
      </Link>
      <Link
        href="/historique"
        style={current === 'historique' ? activeLinkStyle : linkStyle}
      >
        Historique
      </Link>
      <Link
        href="/sponsor"
        style={current === 'sponsor' ? activeLinkStyle : linkStyle}
      >
        Partenaire
      </Link>
      <Link
        href="/contact"
        style={current === 'contact' ? activeLinkStyle : linkStyle}
      >
        Nous joindre
      </Link>
    </div>
  )
}

const activeLinkStyle = {
  color: 'blue',
  fontWeight: 'bold',
  fontSize: '1.2em',
  textDecoration: 'none',
}

const linkStyle = {
  fontSize: '1.1em',
  textDecoration: 'none',
}

// css class for the parent div
const parent: CSSProperties | undefined = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f5f8fa',
  height: '40px',
  gap: '15px',
  zIndex: '100',
  position: 'relative',
  borderRadius: '4px',
  margin: '10px',
  boxShadow: '3px 3px rgb(0 0 0 / 0.4)',
}

export default Header
