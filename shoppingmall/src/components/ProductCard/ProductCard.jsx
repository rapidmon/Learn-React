import ProductImage from '../ProductImage/ProductImage'
import ProductName from '../ProductName/ProductName'
import ProductPrice from '../ProductPrice/ProductPrice'
import './productCard.css'
import { useRef, useState } from 'react'
import { useEffect } from 'react'

export default function ProductCard({productName, price, thumbnailImg}){
    const [Like, setLike] = useState(true)
    const like = useRef();
    function handleonClick(){
        setLike(!Like);
    }
    
    useEffect(()=>{
        if(!Like){
            like.current.className = 'like-btn on';
            console.log(like.current.className)
        } else{
            like.current.className = 'like-btn';
        }
    }, [Like])

    return (
        <li className="product-item">
            <div className="product-img">
                <ProductImage thumbnailImg={thumbnailImg} productName={productName}/>
            </div>
                <ProductName productName={productName}/>
            <button ref={like} onClick={handleonClick} className="like-btn"></button>
            <div className="product-price">
                <ProductPrice price={price}/>
            </div>
        </li>
    )
}
