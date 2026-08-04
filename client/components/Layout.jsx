import { NavLink } from 'react-router-dom'
import logoImage from '../src/assets/logo.png'
import { useAuth } from '../src/context/useAuth'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/education', label: 'Education' },
  { to: '/project', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout() {
  const { session, signOut, isAdmin } = useAuth()

  return <header className="site-header">
    <div className="header-inner">
      <NavLink to="/" className="brand" aria-label="Quoc Thiet Pham home">
        <img src={logoImage} alt="Quoc Thiet Pham logo" className="brand-logo" />
        <span className="brand-copy"><strong>Quoc Thiet Pham</strong><small>Software Engineering Student</small></span>
      </NavLink>

      <nav className="main-nav" aria-label="Main navigation">
        {navItems.map(({ to, label }) => <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>{label}</NavLink>)}
      </nav>

      <div className="header-account">
        {isAdmin && <NavLink to="/admin" className="nav-link">Administration</NavLink>}
        {session ? <button type="button" className="account-button" onClick={signOut}>
          Sign out &middot; <strong>{isAdmin ? 'Admin' : session.user.name}</strong>
        </button> : <>
          <NavLink to="/signin" className="nav-link">Sign in</NavLink>
          <NavLink to="/signup" className="signup-button">Sign up</NavLink>
        </>}
      </div>
    </div>
  </header>
}
