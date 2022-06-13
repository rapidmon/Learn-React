import styled from "styled-components";
import good from '../../good.png';
import bad from '../../bad.png';

const Foot = styled.footer`
    display: flex;
    padding: 85px;
    align-items: center;
`

const Content = styled.p`
    color: #686868;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Image = styled.img`
    padding-bottom: ${(props)=> (props.alt === 'good' ? '8px' : '0')};
    padding-top: ${(props)=> (props.alt === 'good' ? '0' : '3px')};
    &:hover{
        cursor: pointer;
        filter: opacity(0.5) drop-shadow(0 0 0 #61DAFB)
    }
`

const Edit = styled.b`
    font-size: 15px;
    margin-left: 30px;
    padding-bottom: 1px;
    border-bottom: 1px solid #c9c9c9;
    &:hover{
        cursor: pointer;
        border-bottom: 1px solid black;
    }
`

function HeadFooter(){
    function handleImage(e){
        e.preventDefault();
        e.target.parentNode.innerText = 'Thanks for letting us know!'
    }

    function handleEdit(e){
        e.preventDefault();
        alert('But, this is just Clonepage!')
    }

    return(
        <Foot>
            <Content>
                Is this page useful?
                <Image onClick={handleImage} src={good} alt="good" />
                <Image onClick={handleImage} src={bad} alt="bad" />
            </Content>
            <Edit onClick={handleEdit}>Edit this page</Edit>
        </Foot>
    )
}

export default HeadFooter