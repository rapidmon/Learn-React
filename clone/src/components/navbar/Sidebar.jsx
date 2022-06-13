import styled from "styled-components";
import up from '../../up.png';
import down from '../../down.png';

const Side = styled.ul`
    position: fixed;
    right: 0;
    background-color: #F7F7F7;
    width: 28%;
    top: 0;
    margin-top: 64px;
    height: 100%;
    padding: 20px 0 40px 40px;
`

const Icon = styled.img`
    width: 10px;
    height: 10px;
`

const List = styled.li`
    font-weight: 700;
    color: #6D6D6D;
    margin-top: 40px;
`

function Sidebar(){
    return(
        <Side>
            <List>INSTALLATION <Icon src={down} alt='down'/></List>
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

export default Sidebar;