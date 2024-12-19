import Banner from "../../components/Banner"
import Gallery from "../../components/Gallery"
import HomeBanner from "../../assets/img/homeBanner.png"

function Home() {
  
    return (
        <>
            <Banner title="Chez vous, partout et ailleurs" image={HomeBanner} opacity={0.6}/>
            <Gallery />
        </>
    )
  }
  
export default Home