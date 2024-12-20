import './404.scss'
import { Link } from 'react-router-dom'

function Error() {
  
    return (
        <>
            <h4>404</h4>
            <p className='message404'>Oups! La page que vous demandez n&apos;existe pas.</p>
            <Link to={'/'}><p className='backHome'>Retourner sur la page d&apos;accueil</p></Link>
        </>
    )
  }
  
export default Error