import './header.scss'
import MainLogo from '../Logo'
import { Link } from 'react-router-dom'


function Header() {

  return (
      <>
        <header>
          <div className='componentMainLogo'>
            <MainLogo />
          </div>
          <nav>
            <ul className='inf768'>
              <li><Link to="/">ACCUEIL</Link></li>
              <li><Link to="/about">A PROPOS</Link></li>
            </ul>
            <ul className='sup768'>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/about">A Propos</Link></li>
            </ul>
          </nav>
        </header>
      </>
  )
}

export default Header