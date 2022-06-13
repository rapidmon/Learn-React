import FacebookIcon from '../../FacebookOpenSource.png'
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import link_icon from '../../Link.png';

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
    &:hover{
        color: ${(props) => (props.className === 'icontitle' ? '#8b8b8b' : '#61DAFB')};
        cursor: ${(props) => (props.className === 'icontitle' ? 'auto' : 'pointer')};
    }
    padding-right: ${(props) => (props.className === 'icontitle' ? '45px' : '0')};
`

const LinkIcon = styled.img`
    width: 15px;
    height: 15px;
    margin-left: 5px;
    filter: opacity(0.5) drop-shadow(0 0 0 white);
`

function Footer({location}){
    const routes = ["/", "/versions", "/languages"]

    return(
        <Foot current={routes.includes(location.pathname)}>
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
                <List>GitHub<LinkIcon src={link_icon} alt="link" /></List>
                <List>Stack Overflow<LinkIcon src={link_icon} alt="link" /></List>
                <List>Discussion Forums<LinkIcon src={link_icon} alt="link" /></List>
                <List>Reactiflux Chat<LinkIcon src={link_icon} alt="link" /></List>
                <List>DEV Community<LinkIcon src={link_icon} alt="link" /></List>
                <List>Facebook<LinkIcon src={link_icon} alt="link" /></List>
                <List>Twitter<LinkIcon src={link_icon} alt="link" /></List>
            </ul>
            <ul>
                <ListTitle>COMMUNITY</ListTitle>
                <List>Code of Conduct<LinkIcon src={link_icon} alt="link" /></List>
                <List>Community Rescources</List>
            </ul>
            <ul>
                <ListTitle>MORE</ListTitle>
                <List>Tutorial</List>
                <List>Blog</List>
                <List>Acknowledgements</List>
                <List>React Native<LinkIcon src={link_icon} alt="link" /></List>
                <List>Privacy<LinkIcon src={link_icon} alt="link" /></List>
                <List>Terms<LinkIcon src={link_icon} alt="link" /></List>
            </ul>
        </Foot>
    )
}

export default withRouter(Footer);