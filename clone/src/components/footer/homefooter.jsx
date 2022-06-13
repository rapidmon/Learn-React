import Linklist from "../Link/link";
import styled from "styled-components";

const Divide = styled.div`
    background-color: #282C34;
    padding: 1px 0 20px 0;
`

function Homefooter(){
    return(
        <Divide>
            <Linklist />
        </Divide>
    )
}

export default Homefooter