import Banner from "../../components/Banner"
import Card from "../../components/Card"
import HomeBanner from "../../assets/img/homeBanner.png"
import logements from "../../datas/logements.json"
import './home.scss'

function Home() {
  
    return (
        <>
            <Banner title="Chez vous, partout et ailleurs" image={HomeBanner} opacity={0.6}/>
            <div className="cardContent">
                {logements.map((logement) => ( <Card 
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
  
export default Home