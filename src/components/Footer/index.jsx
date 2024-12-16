import './footer.scss'
import { FooterLogo } from '../Logo'


function Footer() {

  return (
      <>
        <footer>
          <div className='componentFooterLogo'>
            <FooterLogo />
          </div>
          <nav>
            <p>© 2020 Kasa. All rights reserved</p>
          </nav>
        </footer>
      </>
  )
}

export default Footer