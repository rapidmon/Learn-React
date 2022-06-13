import MainmenuHeader from "../../components/header/mainmenu_header"
import Sidebar from "../../components/navbar/Sidebar"
import Footer from "../../components/footer/footer"
import HeadFooter from "../../components/footer/headfooter"

function Tutorial(){
    return(
      <>
        <MainmenuHeader
         title={'Tutorial: Intro to React'}
         subtitle={'This tutorial doesn’t assume any existing React knowledge.'}
         summary={''}
        />
        <HeadFooter />
        <Sidebar />
        <Footer />
      </>
    )
}

export default Tutorial