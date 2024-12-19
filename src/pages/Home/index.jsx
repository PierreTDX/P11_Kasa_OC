import Banner from "../../components/Banner"
import CardGallery from "../../components/CardGallery"
import HomeBanner from "../../assets/img/homeBanner.png"

function Home() {
  
    return (
        <>
            <Banner title="Chez vous, partout et ailleurs" image={HomeBanner} opacity={0.6}/>
            <CardGallery />
        </>
    )
  }
  
export default Home