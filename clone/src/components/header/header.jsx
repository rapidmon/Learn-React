import styled from 'styled-components'
import {Link} from 'react-router-dom'
import logo from '../../logo_black.svg';

const Head = styled.header`
    background-color: #282C34;
    text-align: center;
    padding: 110px 0 70px 0;
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: 700px auto;
    background-position: 640px 40px;
`

const Title = styled.h1`
    color: #61DAFB;
    font-size: 50px;
    font-weight: 900;
`

const Title_Assistant = styled.p`
    color: #F8F5F8;
    font-size: 25px;
    font-weight: 200;
    margin-top: 20px;
`

const To_Learn = styled.ul`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const List = styled.li`
    font-size: 20px;
    color: #61DAFB;
    &:hover{
        color: white;
    }
    & a{
        text-decoration: none;
        color: inherit;
    }
`

const Btn_to_Docs = styled.button`
    margin-right: 20px;
    padding: 15px 20px;
    background-color: #61DAFB;
    &:hover{
        background-color: white;
    }
    font-size: 20px;
`

function Header(){
    return(
        <>
            <Head>
                <Title>React</Title>
                <Title_Assistant>A JavaScript library for building user interfaces</Title_Assistant>
                <To_Learn>
                    <List><Btn_to_Docs><Link to='/docs'>Get Started</Link></Btn_to_Docs></List>
                    <List><Link to='/tutorial'>Take the Tutorial &gt;</Link></List>
                </To_Learn>
            </Head>
        </>
    )
}

export default Header;