import './logement.scss';
import SlideShow from "../../components/Slideshow";
import Collapse from '../../components/Collapse';
import Rating from '../../components/Rating';
import logements from "../../datas/logements.json";
import { useParams } from "react-router";
import Error from "../404";

function Logement() {
    const { id } = useParams(); // Récupération de l'ID depuis l'URL
    const logementData = logements.find((logement) => logement.id === id);

    // Gestion d'un logement non trouvé
    if (!logementData) {
        return <Error />;
    }

    return (
        <>
            <SlideShow images={logementData.pictures} />
            <div className='infosLogement'>
                <div className='titleLocationStarsHost'>
                    <div className='titleLocation'>
                        <h6>{logementData.title}</h6>
                        <p className='location'>{logementData.location}</p>
                        <div className="tagList">
                            {logementData.tags.map((tag, index) => (
                                <div key={index} className="tagContent">
                                    <div className='tag'>
                                        {tag}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='starsHost'>
                        <Rating rating={logementData.rating} /> {/* Affichage des étoiles */}
                        <div className='hostDetails'>
                            <p className='host'>{logementData.host.name}</p>
                            <img className="hostImg" src={logementData.host.picture} alt={`photo de ${logementData.host.name}`} />
                        </div>
                    </div>
                </div>
                <div className='colapseLogement'>
                    <Collapse className='colapseLogementWidth'
                        key={`${logementData.id}-description`}
                        title="Description"
                        description={logementData.description} />
                    <Collapse className='colapseLogementWidth'
                        key={`${logementData.id}-equipments`}
                        title="Équipements"
                        description={logementData.equipments}
                    />
                </div>
            </div>
        </>
    );
}

export default Logement;
