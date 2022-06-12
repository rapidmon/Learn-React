import MainmenuHeader from "../../components/header/mainmenu_header"
import Sidebar from "../../components/navbar/Sidebar"

function Docs(){
    return(
      <>
        <MainmenuHeader
         title={'Getting Started'}
         subtitle={'This page is an overview of the React documentation and related resources.'}
         summary={'React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.'}
        />
        <Sidebar />
      </>
    )
}

export default Docs