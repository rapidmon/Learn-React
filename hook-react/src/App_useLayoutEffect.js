import React, { useEffect, useLayoutEffect, useState, useRef } from "react";

function App(){
    const [num, setNum] = useState(0)

    const handleonClick = () => {
      setNum(num + 1)
    }
  
    useLayoutEffect(()=>{
      console.log(1)
      return () => {
        console.log('return_1')
      }
    }, [])
  
    useLayoutEffect(()=>{
      console.log(2)
      return () => {
        console.log('return_2')
      }
    })
  
    useLayoutEffect(()=>{
      console.log(3)
      return () => {
        console.log('return_3')
      }
    }, [num])

    const [modalShow, setModalShow] = useState(false);
    const modal = useRef();
    const button = useRef();

    useEffect(()=>{
        if(modal.current == null || button.current == null){
            return
        }
        modal.current.style.color = 'red';
        modal.current.style.margin = '20px';
    }, [modalShow])

    return(
        <div className="App">
            <div className="App">
                <button onClick={handleonClick}>{num}</button>
            </div>
            <button 
                ref={button}
                onClick={()=>setModalShow(!modalShow)}>
                show me the Modal
            </button>
            {modalShow ? (
                <div ref={modal}>
                    modal
                </div>
            ) : null}
        </div>
    )
}

export default App;