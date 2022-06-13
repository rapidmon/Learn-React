import styled from "styled-components";

const Section = styled.section`
    margin: 0 auto;
    display: flex;
    padding: 100px 0 50px 0;
    width: 90%;
    justify-content: space-between;
    align-items: top;
    border-bottom: 1px solid #d8d8d8;
`

const Title = styled.h2`
    color: #6d6d6d;
    font-size: 25px;
    font-weight: 100;
    margin-bottom: 10px;
`

const Content = styled.p`
    line-height: 25px;
`

function MainOne(){
    return(
        <>
            <Section>
                <article style={{width: '360px'}}>
                    <Title>Declarative</Title>
                    <br />
                    <Content>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.<br /><br />Declarative views make your code more predictable and easier to debug.</Content>
                </article>
                <article style={{width: '360px'}}>
                    <Title>Component-Based</Title>
                    <br />
                    <Content>Build encapsulated components that manage their own state, then compose them to make complex UIs.<br /><br />Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.</Content>
                </article>
                <article style={{width: '360px'}}>
                    <Title>Learn Once, Write Anywhere</Title>
                    <br />
                    <Content>We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.<br /><br />React can also render on the server using Node and power mobile apps using React Native.</Content>
                </article>
            </Section>
        </>
    )
}

export default MainOne;