import { useState } from "react";
import AllProducts from "./components/AllProducts/AllProducts";
import CartContainer from "./components/CartContainer/CartContainer";
import Header from "./components/Header/Header";

function App() {
  const [isActive, setIsActive] = useState({
    cart: true,
    // status: "active",
  });

  const handelIsActiveState = (status) => {
    if (status === "cart") {
      setIsActive({
        cart: true,
        // status: "cart",
      });
    } else {
      setIsActive({
        cart: false,
        // status: "about",
      });
    }
  };

  //////////
  const [selectedProduct, setSelectedProduct] = useState([]);

  const handelSelectedProduct = (product) => {
    const isExist = selectedProduct.find(
      (previousProduct) => previousProduct.id === product.id
    );

    if (!isExist) {
      handelIncrisePrice(product.price);
      setSelectedProduct([...selectedProduct, product]);
    } else {
      alert("This product is already exist.");
    }
  };

  const handelDelete = (id) => {
    handelDeletePrice(id);
    const remaidingProduct = selectedProduct.filter(
      (product) => product.id !== id
    );
    setSelectedProduct(remaidingProduct);
  };

  const [price, setPrice] = useState(5000);

  const handelIncrisePrice = (pr) => {
    setPrice(price + pr);
  };

  const handelDeletePrice = (id) => {
    const product = selectedProduct.find((p) => p.id === id);
    console.log(product);
    setPrice(price - product.price);
  };

  return (
    <>
      <Header price={price} selectedProduct={selectedProduct}></Header>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-3 container mx-auto px-3 py-11">
        <AllProducts
          handelSelectedProduct={handelSelectedProduct}
        ></AllProducts>

        <CartContainer
          handelDelete={handelDelete}
          selectedProduct={selectedProduct}
          isActive={isActive}
          handelIsActiveState={handelIsActiveState}
        ></CartContainer>
      </div>
    </>
  );
}

export default App;
