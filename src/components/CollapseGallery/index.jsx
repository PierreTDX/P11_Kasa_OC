import './collapseGallery.scss'
import apropos from "../../datas/apropos.json"
import Collapse from '../Collapse'

function CollapseGallery() {

    return (
      <>
          <div className="collapseContent">
              {apropos.map((apropo) => ( 
                <Collapse 
                  key={apropo.id} // Clé unique pour une liste, obligatoire
                  title={apropo.title}
                  description={apropo.description}
                />
              ))}
          </div>
      </>
  )
  }

  export default CollapseGallery