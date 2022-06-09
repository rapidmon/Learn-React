import Header from '../../components/header/Header'
import Main from '../../components/main/main'
import Menu from '../../components/menu/menu'
import Footer from '../../components/footer/footer'
import './homepage.css'

export default function Homepage({id, nickname}){
    return (
        <>
            <Header id={id} nickname={nickname}/>
            <Main/>
            <Menu/>
            <Footer/>
        </>
    )
}