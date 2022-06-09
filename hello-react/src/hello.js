function Hello(){
    const name = '희래';
    function age(){
        return 10;
    }
    return(
        <>
            <h1 className="one">hello?</h1>
            <h1 style={{backgroundColor:"red",color:"yellow"}}>hello?</h1>
            <h1>hello {name}, {age()}</h1>
        </>
    )
}

export default Hello;