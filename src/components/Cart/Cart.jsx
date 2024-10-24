import { MdDelete } from "react-icons/md";
const Cart = ({ selectedProduct, handelDelete }) => {
  return (
    <div className="space-y-5">
      {selectedProduct.map((product) => (
        <div className="flex justify-between items-center">
          <img className="w-20 rounded-xl" src={product.image} alt="" />
          <h1 className="font-semibold text-xl">{product.name}</h1>
          <button onClick={() => handelDelete(product.id)} className="btn bg-orange-600 text-white text-3xl"><MdDelete /></button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
