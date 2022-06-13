import code from '../../code.png'
import styled from 'styled-components';

const Section = styled.section`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 50px 0 50px 0;
`

const Text = styled.div`
    width: 330px;
    margin-right: 30px;
`

const Title = styled.h2`
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 10px;
`

const Content = styled.p`
    line-height: 25px;
`

function MainTwo(){
    return(
        <Section>
            <Text>
                <Title>A Simple Component</Title>
                <br />
                <Content>React components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.<br /><br />JSX is optional and not required to use React. Try the Babel REPL to see the raw JavaScript code produced by the JSX compilation step.</Content>
            </Text>
            <img src={code} alt="fake code" />
        </Section>
    )
}

export default MainTwo;