const time = new Date();

function Time(){
    return(
        <div>
            <h1>년 : {time.getFullYear()}</h1>
            <h1>월/일 : {time.getMonth() + 1}/{time.getDate()}</h1>
            <h1>시간 : {time.getHours()}시 {time.getMinutes()}분 {time.getSeconds()}초</h1>
        </div>
    );
}

export default Time;