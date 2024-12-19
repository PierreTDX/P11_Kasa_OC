import Banner from "../../components/Banner"
import CollapseGallery from "../../components/CollapseGallery"
import AboutBanner from "../../assets/img/aboutBanner.png"


function About() {
  
    return (
        <>
            <Banner title="" image={AboutBanner} opacity={0.3}/>
            <CollapseGallery />
        </>
    )
  }
  
export default About