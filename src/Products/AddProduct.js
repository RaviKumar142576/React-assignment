import { useState } from "react";

const AddProduct = (props) => {

    const defaultProduct = {
        name: "",
        sku: "",
        price: ""
    }
    const [product, setProduct] = useState(defaultProduct)
    const onClickHandler = (event) => {
        event.preventDefault();

        props.onSubmit(product);
        setProduct(defaultProduct)

    }

    const handleInputChange = (event, field) => setProduct({ ...product, [field]: event.target.value })
    return (
        <div className='productform'>
            <form onSubmit={onClickHandler} method="post">
                <input type="text" className="product-input" placeholder="Product Name" onChange={(e) => handleInputChange(e, 'name')} value={product.name}></input>
                <input type="text" className="product-input" placeholder="Product Sku" onChange={(e) => handleInputChange(e, 'sku')} value={product.sku}></input>
                <input type="number" className="product-input" placeholder="Product Price" onChange={(e) => handleInputChange(e, 'price')} value={product.price}></input>
                <button type="submit" className="product-btn">Add Product</button>
            </form>
        </div>
    )
}


export default AddProduct;