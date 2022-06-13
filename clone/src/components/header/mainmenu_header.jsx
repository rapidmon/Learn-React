import styled from 'styled-components'

const Section = styled.section`
    padding: 140px 85px 0 85px;
    width: 55%;
`

const Title = styled.h1`
    font-size: 50px;
    font-weight: 900;
    color: #20232A;
    margin-bottom: 50px;
`

const Subtitle= styled.h2`
    font-size: 22px;
    color: #6D6D6D;
    line-height: 30px;
    margin-bottom: 40px;
`

const Summary = styled.p`
    line-height: 30px;
    ${(props) => (props.isEmpty && "padding-bottom: 40px")};
    border-bottom: 1px solid #cacaca;
`

function MainmenuHeader({title, subtitle, summary}){
    return(
        <Section>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            <Summary isEmpty={summary ? true : false}>{summary}</Summary>
        </Section>
    )
}

export default MainmenuHeader;