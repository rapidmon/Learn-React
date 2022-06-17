import React, { useState } from "react";

function getName(){
	console.log("사실은 겁나 오래기다리는중...");
	return "개리";
}

function App() {
  const [name, setName] = useState(getName);
//   const [name, setName] = useState(getName()); -> 렌더링 될 때마다 함수가 돌아가서 console.log가 찍히게 된다. 좋지 못한 방법.
  const [num, setNum] = useState(0);
  return(
    <>
      <div>안녕하세요 {name}! 현재 숫자는{num}입니다</div>
      <button onClick={()=>setNum((prevNum)=>prevNum+1)}>{num}</button>
    </>
  )
}

export default App;