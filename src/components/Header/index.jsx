import './header.scss'
import MainLogo from '../Logo'
import { NavLink } from 'react-router-dom'


function Header() {

  return (
      <>
        <header>
          <div className='componentMainLogo'>
            <MainLogo />
          </div>
          <nav>
            <ul className='inf768'>
              <li><NavLink to="/" className={({ isActive }) => (isActive ? 'activeLink' : '')}>ACCUEIL</NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'activeLink' : '')}>A PROPOS</NavLink></li>
            </ul>
            <ul className='sup768'>
              <li><NavLink to="/" className={({ isActive }) => (isActive ? 'activeLink' : '')}>Accueil</NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'activeLink' : '')}>A Propos</NavLink></li>
            </ul>
          </nav>
        </header>
      </>
  )
}

export default Header