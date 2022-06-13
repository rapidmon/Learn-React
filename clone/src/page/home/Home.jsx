import Header from "../../components/header/header"
import MainOne from "../../components/description/main_1"
import MainTwo from "../../components/description/main_2"
import Homefooter from "../../components/footer/homefooter"
import Footer from "../../components/footer/footer"

function Home(){
    return(
      <>
        <Header />
        <MainOne />
        <MainTwo />
        <Homefooter />
        <Footer class="home"/>
      </>
    )
}

export default Home