import MainmenuHeader from "../../components/header/mainmenu_header"
import Sidebar from "../../components/navbar/Sidebar"
import Footer from "../../components/footer/footer"
import HeadFooter from "../../components/footer/headfooter"

function AddReact(){
    return(
      <div>
        <MainmenuHeader
         title={'Add React to a Website'}
         subtitle={'Use as little or as much React as you need.'}
         summary={`React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Perhaps you only want to add some “sprinkles of interactivity” to an existing page. React components are a great way to do that.
         The majority of websites aren’t, and don’t need to be, single-page apps. With a few lines of code and no build tooling, try React in a small part of your website. You can then either gradually expand its presence, or keep it contained to a few dynamic widgets.`}
        />
        <HeadFooter />
        <Sidebar />
        <Footer />
      </div>
    )
}

export default AddReact