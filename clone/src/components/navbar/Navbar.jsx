import {Link, withRouter} from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../logo.svg';
import search_icon from '../../foundicon.png';
import link_icon from '../../Link.png';

const Bar = styled.ul`
    width: 100%;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #20232A;
    position: fixed;
`

const Mainmenu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`

const Logo = styled.img`

`

const List = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${(props) => (props.className === 'sub_menu' ? '13px' : '18px')};
    font-weight: ${(props) => (props.className === 'home' ? '900' : '400')};
    color: ${(props)=> (props.className === 'home' ? '#61DAFB' : props.current ? '#61DAFB' : '#F8F5F8')};
    padding: ${(props)=> (props.className !== 'main_menu' ? '0' : props.current ? '23px 15px 20px 15px' : '20px 15px')};
    margin: ${(props)=> (props.className === 'home' ? '0 100px 0 100px' : props.className === 'search' ? '0 0 0 80px' : props.id === 'last' ? '0 100px 0 0' : '0')};
    border-bottom: ${(props)=> (props.current ? '3px #61DAFB solid' : '0')};
    & a{
        text-decoration: none;
        color: inherit;
    }
    &:hover{
        color: #61DAFB;
    }
`

const Search = styled.input`
    background-color: #20232A;
    border: none;
    width: 200px;
    font-size: 20px;
    border-radius: 5px;
    padding: 5px 0 5px 35px;
    color: white;
    outline: none;
    background-image: url(${search_icon});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 0 center;
    &:focus{
        background-color: #373940;
    }
`

const LinkIcon = styled.img`
    width: 15px;
    height: 15px;
    margin-left: 5px;
    filter: opacity(0.5) drop-shadow(0 0 0 white);
`

const Navbar = ({location}) => {
    return(
        <> 
            <Bar>
                <List className='home'><Logo src={logo} alt='logo'/><Link to="/">React</Link></List>
                <Mainmenu>
                    <List current={location.pathname === '/docs/getting_started'} className='main_menu'><Link to="/docs/getting_started">Docs</Link></List>
                    <List current={location.pathname === '/tutorial'} className='main_menu'><Link to="/tutorial">Tutorial</Link></List>
                    <List current={location.pathname === '/blog'} className='main_menu'><Link to="/blog">Blog</Link></List>
                    <List current={location.pathname === '/community'} className='main_menu'><Link to="/community">Community</Link></List>
                </Mainmenu>
                <List className='search'><Search placeholder='Search'/></List>
                <List className='sub_menu'><Link to="/versions">v18.1.0</Link></List>
                <List className='sub_menu'><Link to="/languages">Languages</Link></List>
                <List className='sub_menu' id='last'><a href="https://github.com/rapidmon">Github</a><LinkIcon src={link_icon} alt="link" /></List>
            </Bar>
        </>
    )
}

export default withRouter(Navbar)