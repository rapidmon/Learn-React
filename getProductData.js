async function getProductData(){
    const response = await fetch('http://test.api.weniv.co.kr/mall');
    const product = await response.json();
    return product;
}

export default {getProductData}