import MainmenuHeader from "../../components/header/mainmenu_header"
import SubSidebar from "../../components/navbar/Subsidebar"
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
        <SubSidebar
         title={'TUTORIAL'}
         subtitle1={'Before We Start the Tutorial'}
         subtitle2={'Setup for the Tutorial'}
         subtitle3={'Overview'}
         subtitle4={'Completing the Game'}
         subtitle5={'Adding Time Travel'}
         />
        <Footer />
      </>
    )
}

export default Tutorial