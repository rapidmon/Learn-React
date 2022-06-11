function Mainmenu_header({title, subtitle, summary}){
    return(
        <section style={{paddingTop: '90px'}}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>{summary}</p>
        </section>
    )
}

export default Mainmenu_header;