import './header.css'

export default function Header({id, nickname}){
    return(
        <>
            <p className='head'>header welcome, {nickname}({id})!</p>
        </>
    )
}