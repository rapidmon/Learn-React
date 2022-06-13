import FacebookIcon from '../../FacebookOpenSource.png'
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';

const Foot = styled.footer`
    padding: 40px 80px;
    background-color:  #20232A;
    display: grid;
    grid-template-columns: 3fr 2fr 2fr;
    grid-template-rows: 3fr, 2fr;
    width: ${(props) => (props.current ? '100%' : '60%')};
`

const ListTitle = styled.li`
    color: #8b8b8b;
    font-weight: 900;
    padding: 30px 0 20px 0;
`

const List = styled.li`
    color: ${(props) => (props.className === 'icontitle' ? '#8b8b8b' : 'white')};
    padding-bottom: 20px;
    padding-left: ${(props) => (props.className === 'icontitle' ? '5px' : '0')};
`

function Footer({location}){
    return(
        <Foot current={location.pathname === '/' || '/versions' || '/languages'}>
            <ul style={{gridRow: '1/3'}}>
                <img src={FacebookIcon} alt="facebook icon" />
                <List className='icontitle'>Copyright © 2022 Meta Platforms, Inc.</List>
            </ul>
            <ul>
                <ListTitle>DOCS</ListTitle>
                <List>Installation</List>
                <List>Main Concepts</List>
                <List>Advanced Guides</List>
                <List>API Reference</List>
                <List>Hooks</List>
                <List>Testing</List>
                <List>Contributing</List>
                <List>FAQ</List>
            </ul>
            <ul>
                <ListTitle>CHANNELS</ListTitle>
                <List>GitHub</List>
                <List>Stack Overflow</List>
                <List>Discussion Forums</List>
                <List>Reactiflux Chat</List>
                <List>DEV Community</List>
                <List>Facebook</List>
                <List>Twitter</List>
            </ul>
            <ul>
                <ListTitle>COMMUNITY</ListTitle>
                <List>Code of Conduct</List>
                <List>Community Rescources</List>
            </ul>
            <ul>
                <ListTitle>MORE</ListTitle>
                <List>Tutorial</List>
                <List>Blog</List>
                <List>Acknowledgements</List>
                <List>React Native</List>
                <List>Privacy</List>
                <List>Terms</List>
            </ul>
        </Foot>
    )
}

export default withRouter(Footer);