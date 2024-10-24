import "../../custom.css";
import About from "../About/About";
import Cart from "../Cart/Cart";

const CartContainer = ({
  handelIsActiveState,
  isActive,
  selectedProduct,
  handelDelete,
}) => {
  return (
    <div className="col-span-1">
      <h1 className="text-2xl">Cart container</h1>
      <div className="flex items-center justify-center gap-4 my-5">
        <button
          onClick={() => handelIsActiveState("cart")}
          className={`${isActive.cart ? "btn px-7 active" : "btn px-7 "}`}
        >
          Cart
        </button>
        <button
          onClick={() => handelIsActiveState("about")}
          className={`${isActive.cart ? "btn px-7" : "btn px-7 active"}`}
        >
          About
        </button>
      </div>
      {isActive.cart ? (
        <Cart handelDelete={handelDelete} selectedProduct={selectedProduct}></Cart>
      ) : (
        <About></About>
      )}
    </div>
  );
};

export default CartContainer;
