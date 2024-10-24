const Header = ({ selectedProduct, price }) => {
  return (
    <div className="bg-gray-100">
      <div className="navbar mx-auto px-2 container ">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-5">
            <li className="text-lg font-medium">Home</li>
            <li className="text-lg font-medium flex-row">
              Cart
              <span className="text-orange-600 p-0 ml-1 cursor-none"><sub>{selectedProduct.length}</sub></span>
            </li>
            <li className="text-lg font-medium">$ {price}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
