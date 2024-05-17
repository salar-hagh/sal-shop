import { Link } from "react-router-dom";
import Container from "../container/Container";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Navbar() {
  const { cartQty } = useShoppingCartContext();

  return (
    <div className="shadow h-12 flex items-center">
      <Container>
        <div className="flex justify-between">
          <nav>
            <ul className="flex">
              <li className="mr-4">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/store">Store</Link>
              </li>
            </ul>
          </nav>

          <div>
            Cart: <b>{cartQty}</b>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
