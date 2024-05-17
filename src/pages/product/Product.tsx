import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import { useGetProduct } from "../../services/hooks/queries";
import Button from "../../components/button/Button";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Product() {
  const { id } = useParams<{ id: string }>();

  const { data } = useGetProduct({ id: id as string });

  const {
    cartItems,
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    getProductQty,
    handleRemoveProduct
  } = useShoppingCartContext();

  console.log(cartItems);

  return (
    <div>
      <Container>
        <div className="grid grid-cols-12 shadow mt-8 p-6">
          <div className=" col-span-10">
            <h3 className="font-bold">{data?.title}</h3>

            <p>{data?.description}</p>
          </div>

          <div className="col-span-2">
            <img src={data?.image} alt="" />

            <div className="grid grid-cols-3 mt-6">
              <Button
                onClick={() => handleIncreaseProductQty(parseInt(id as string))}
                className="rounded py-1"
              >
                +
              </Button>
              <span className="flex justify-center items-center">{getProductQty(parseInt(id as string))}</span>
              <Button
                onClick={() => handleDecreaseProductQty(parseInt(id as string))}
                className="rounded py-1"
              >
                -
              </Button>
            </div>
              <Button variant="danger" onClick={()=>handleRemoveProduct(parseInt(id as string))}>Remove</Button>

          </div>
        </div>
      </Container>
    </div>
  );
}

export default Product;
