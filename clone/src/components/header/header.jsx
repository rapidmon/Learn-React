import styled from 'styled-components'
import logo from '../../logo_black.svg';
import Linklist from '../Link/link';

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

function Header(){
    return(
        <>
            <Head>
                <Title>React</Title>
                <Title_Assistant>A JavaScript library for building user interfaces</Title_Assistant>
                <Linklist />
            </Head>
        </>
    )
}

export default Header;