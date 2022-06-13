import MainmenuHeader from "../../components/header/mainmenu_header"
import HeadFooter from "../../components/footer/headfooter"
import Sidebar from "../../components/navbar/Sidebar"
import Footer from "../../components/footer/footer"

function Blog(){
    return(
      <>
        <MainmenuHeader
         title={'React v18.0'}
         subtitle={'React 18 is now available on npm!'}
         summary={'React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.'}
        />
        <HeadFooter />
        <Sidebar />
        <Footer />
      </>
    )
}

export default Blog