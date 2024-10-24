import { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";


const AllProducts = ({handelSelectedProduct}) => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  },[])

  return (
    <div className="col-span-2">
      <h1 className="text-xl font-bold">All Products</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-3">
      {
        products.map((product) => <SingleProduct key={product.id} handelSelectedProduct={handelSelectedProduct} product={product}></SingleProduct>)
      }
      </div>
    </div>
  );
};

export default AllProducts;
