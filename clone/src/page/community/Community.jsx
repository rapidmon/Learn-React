import MainmenuHeader from "../../components/header/mainmenu_header"
import HeadFooter from "../../components/footer/headfooter"
import Sidebar from "../../components/navbar/Sidebar"
import Footer from "../../components/footer/footer"

function Community(){
    return(
      <>
        <MainmenuHeader
         title={'Where To Get Support'}
         subtitle={'React has a community of millions of developers.'}
         summary={'On this page we’ve listed some React-related communities that you can be a part of; see the other pages in this section for additional online and in-person learning materials. Before participating in React’s communities, please read our Code of Conduct. We have adopted the Contributor Covenant and we expect that all community members adhere to the guidelines within.'}
        />
        <HeadFooter />
        <Sidebar />
        <Footer />
      </>
    )
}
export default Community