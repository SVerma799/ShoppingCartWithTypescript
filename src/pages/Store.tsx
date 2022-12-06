import { Col, Row } from "react-bootstrap";
import StoreItem from "../components/StoreItem";
import Items from "../data/item.json";
export default function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {Items.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item}></StoreItem>
          </Col>
        ))}
      </Row>
    </>
  );
}
