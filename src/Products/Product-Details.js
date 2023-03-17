import React from 'react';

const ProductDetails = ({ product }) => {
    return (
        <>
           
                <div className='product'>
                    <div >{product.name}</div>
                    <div >{product.sku}</div>
                    <div >{product.price}</div>
                </div>
            
        </>
    )
}


export default ProductDetails