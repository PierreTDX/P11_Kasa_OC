import Banner from "../../components/Banner"
import HomeBanner from "../../assets/img/homeBanner.png"

function Home() {
  
    return (
        <>
            <Banner title="Chez vous, partout et ailleurs" image={HomeBanner} opacity={0.6}/>
            <h2>ICI les cartes des logements</h2>
        </>
    )
  }
  
export default Home