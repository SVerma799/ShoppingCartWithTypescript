import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatcurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export default function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = 0;
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        <div className="mt-auto">
          {quantity == 0 ? (
            <Button
              className="w-100 btn btn-primary"
              onClick={() => {
                increaseCartQuantity(id);
              }}
            >
              + Add to cart
            </Button>
          ) : (
            <div
              className="d-flex flex-column align-items-center"
              style={{ gap: "0.5rem" }}
            >
              <div className="d-flex align-item-center justify-content-center">
                <Button
                  className="btn btn-primary"
                  onClick={() => {
                    increaseCartQuantity(id);
                  }}
                >
                  -
                </Button>
                <span className="mx-2">{quantity} in cart</span>
                <Button
                  className="btn btn-primary"
                  onClick={() => {
                    decreaseCartQuantity(id);
                  }}
                >
                  +
                </Button>
              </div>
              <Button variant="danger" size="sm">
                Remove from cart
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
