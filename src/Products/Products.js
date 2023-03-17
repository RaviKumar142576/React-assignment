import AddProduct from "./AddProduct";
import ProductDetails from "./Product-Details";

import { useState } from "react";

const Products = () => {
    const [products, setProducts] = useState([])
    const onNewProductAdd = (product) => setProducts([...products, product])

    return (
        <div className="productWrapper">
            <h1>Products</h1>
            <AddProduct onSubmit={onNewProductAdd} />
           <div className="container.flex"> {products.map(data => {
                return (<ProductDetails product={data} />)
            })}
            </div>
        </div>
    )
}

export default Products;