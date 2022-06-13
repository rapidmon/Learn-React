import Footer from "../../components/footer/footer";
import MainmenuHeader from "../../components/header/mainmenu_header";

function Languages(){
    return(
      <>
        <MainmenuHeader
          title={'Languages'}
          subtitle={'The React documentation is available in the following languages:'}
          summary={''}
        />
        <Footer />
      </>
    )
}

export default Languages;