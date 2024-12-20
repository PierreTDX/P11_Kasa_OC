import SlideShow from "../../components/Slideshow";
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
        </>
    );
}

export default Logement;
