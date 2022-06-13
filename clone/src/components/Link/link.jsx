import styled from "styled-components"
import {Link} from 'react-router-dom'

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
    border: none;
    &:hover{
        background-color: white;
        cursor: pointer;
    }
    font-size: 20px;
`

function Linklist(){
    return(
        <To_Learn>
            <List><Link to='/docs'><Btn_to_Docs>Get Started</Btn_to_Docs></Link></List>
            <List><Link to='/tutorial'>Take the Tutorial &gt;</Link></List>
        </To_Learn>
    )
}

export default Linklist;