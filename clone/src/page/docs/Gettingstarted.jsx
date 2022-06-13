import MainmenuHeader from "../../components/header/mainmenu_header"
import Sidebar from "../../components/navbar/Sidebar"
import Footer from "../../components/footer/footer"
import HeadFooter from "../../components/footer/headfooter"

function GettingStarted(){
    return(
      <>
        <MainmenuHeader
         title={'Getting Started'}
         subtitle={'This page is an overview of the React documentation and related resources.'}
         summary={'React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.'}
        />
        <HeadFooter />
        <Sidebar />
        <Footer />
      </>
    )
}

export default GettingStarted