const SingleProduct = ({ product, handelSelectedProduct }) => {
  const { name, image, description, price, inFeature } = product;
  return (
    <div>
      <div className="card card-compact shadow-xl p-5">
        <img className="rounded-xl mb-5" src={image} alt="" />
        <h2 className="card-title">{name}</h2>
        <p className="text-lg mb-3">{description}</p>
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg">{price}</p>
          <p className="font-bold">{`${inFeature ? "Feature category" : "No category"}`}</p>
        </div>
        <button onClick={()=>handelSelectedProduct(product)} className="btn bg-orange-600 mt-3 text-white">Add to cart</button>
      </div>
    </div>
  );
};

export default SingleProduct;
