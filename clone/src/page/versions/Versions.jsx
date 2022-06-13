import Footer from "../../components/footer/footer"
import MainmenuHeader from "../../components/header/mainmenu_header";

function Versions(){
    return(
      <>
        <MainmenuHeader
          title={'React Versions'}
          subtitle={'A complete release history for React is available on GitHub. Changelogs for recent releases can also be found below.'}
          summary={''}
        />
        <Footer />
      </>
    )
}

export default Versions