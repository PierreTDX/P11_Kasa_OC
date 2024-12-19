import './gallery.scss'
import logements from "../../datas/logements.json"
import Card from "../../components/Card"

function Gallery() {

    return (
        <>
          <div className="cardContent">
                {logements.map((logement) => ( 
                  <Card 
                    key={logement.id} // Clé unique pour une liste, obligatoire
                    id={logement.id}
                    title={logement.title}
                    image={logement.cover}
                  />
                ))}
          </div>
        </>
    )
  }

  export default Gallery