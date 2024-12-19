import './footer.scss'
import { FooterLogo } from '../Logo'


function Footer() {

  return (
      <>
        <footer>
          <div className='componentFooterLogo'>
            <FooterLogo />
          </div>
          <p className='pFooter'>© 2020 Kasa. All rights reserved</p>
        </footer>
      </>
  )
}

export default Footer