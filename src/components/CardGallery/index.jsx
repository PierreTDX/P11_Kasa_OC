import './cardGallery.scss'
import Card from "../../components/Card"
import logements from "../../datas/logements.json"

function CardGallery() {

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

  export default CardGallery