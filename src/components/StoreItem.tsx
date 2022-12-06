import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatcurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export default function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
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
            <button className="w-100 btn btn-primary">+ Add to cart</button>
          ) : (
            <div
              className="d-flex flex-column align-items-center"
              style={{ gap: "0.5rem" }}
            >
              <div className="d-flex align-item-center justify-content-center">
                <button className="btn btn-primary">-</button>
                <span className="mx-2">{quantity} in cart</span>
                <button className="btn btn-primary">+</button>
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
