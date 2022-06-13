import styled from "styled-components";
import up from '../../up.png';
import down from '../../down.png';
import React, {useState} from 'react';
import {Link, withRouter} from 'react-router-dom'

const Side = styled.ul`
    position: fixed;
    right: 0;
    background-color: #F7F7F7;
    width: 28%;
    top: 0;
    margin-top: 64px;
    height: 80%;
    padding: 20px 0 40px 40px;
    overflow-y:scroll;
    scrollbar-width: none;
    &::-webkit-scrollbar{
        display: none;
    }
`

const Icon = styled.img`
    width: 10px;
    height: 10px;
    filter: opacity(0.5) drop-shadow(0 0 0 black);
    &:hover{
        filter: none;
    }
`

const List = styled.li`
    font-weight: 700;
    color: ${(props)=>(props.visible ? 'black' : '#6D6D6D')};
    margin-top: 40px;
    &:hover{
        color: black;
    }
`

const SubSide = styled.ul`
    display: ${(props)=>(props.visible ? 'block' : 'none')};
    margin-top: 20px;
    margin-left: -25px;
`

const SubList = styled.li`
    font-weight: ${(props) => (props.current ? '900' : '400')};
    border-left: ${(props) => (props.current ? '5px solid #61DAFB' : '0')};
    padding-left: ${(props) => (props.current ? '15px' : '20px')};
    font-size: 15px;
    color: black;
    padding-top: 6px;
    padding-bottom: 6px;
    &:hover{
        color: #6D6D6D;
    }
    & a{
        text-decoration: none;
        color: inherit;
    }
    
`

function Sidebar({location}){
    const [updown, Setupdown] = useState(true);

    function handleIcon(e){
        e.preventDefault();
        console.dir(e.target)
        if(e.target.childNodes.length > 1){
            Setupdown(!updown);
        }
    }

    return(
        <Side>
            <List onClick={handleIcon} visible={updown}>INSTALLATION <Icon src={!updown ? down : up} alt='updown icon'/>
                <SubSide visible={updown}>
                    <SubList current={location.pathname === '/docs/getting_started'}><Link to='/docs/getting_started' >Getting Started</Link></SubList>
                    <SubList current={location.pathname === '/docs/add_react_to_a_website'}><Link to='/docs/add_react_to_a_website'>Add React to a Website</Link></SubList>
                    <SubList>Create a New React App</SubList>
                    <SubList>CDN Links</SubList>
                    <SubList>Release Channels</SubList>
                </SubSide>
            </List>
            <List>MAIN CONCEPTS <Icon src={down} alt='down'/></List>
            <List>ADVANCED GUIDES <Icon src={down} alt='down'/></List>
            <List>API REFERENCE <Icon src={down} alt='down'/></List>
            <List>HOOKS <Icon src={down} alt='down'/></List>
            <List>TESTING <Icon src={down} alt='down'/></List>
            <List>CONTRIBUTING <Icon src={down} alt='down'/></List>
            <List>FAQ <Icon src={down} alt='down'/></List>
        </Side>
    )
}

export default withRouter(Sidebar);