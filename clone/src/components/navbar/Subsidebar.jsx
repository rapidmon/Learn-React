import styled from "styled-components";
import up from '../../up.png';

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
`

const List = styled.li`
    font-weight: 700;
    color: black;
    margin-top: 40px;
`

const SubSide = styled.ul`
    margin-top: 20px;
    margin-left: -25px;
`

const SubList = styled.li`
    font-weight: 400;
    padding-left: 20px;
    font-size: 15px;
    color: black;
    padding-top: 6px;
    padding-bottom: 6px;
    line-height: 20px;
    &:hover{
        color: #6D6D6D;
    }    
`

function SubSidebar({title, subtitle1, subtitle2, subtitle3, subtitle4, subtitle5}){
    return(
        <Side>
            <List>{title} <Icon src={up} alt='up'/>
                <SubSide>
                    <SubList>{subtitle1}</SubList>
                    <SubList>{subtitle2}</SubList>
                    <SubList>{subtitle3}</SubList>
                    <SubList>{subtitle4}</SubList>
                    <SubList>{subtitle5}</SubList>
                </SubSide>
            </List>
        </Side>
    )
}

export default SubSidebar;