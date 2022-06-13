import MainmenuHeader from "../../components/header/mainmenu_header"
import HeadFooter from "../../components/footer/headfooter"
import SubSidebar from "../../components/navbar/Subsidebar"
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
        <SubSidebar
         title={'RECENT POSTS'}
         subtitle1={'React v18.0'}
         subtitle2={'How to Upgrade to React 18'}
         subtitle3={'React Conf 2021 Recap'}
         subtitle4={'The Plan for React 18'}
         subtitle5={'Introducing Zero-Bundle-Size-React-Server Components'}
         />
        <Footer />
      </>
    )
}

export default Blog