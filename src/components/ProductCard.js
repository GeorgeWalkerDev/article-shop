import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { LinkContainer } from 'react-router-bootstrap';

function ProductCard({ product }) {
  return (
    <Card className="productCard m-3">
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <div className="cardText">
          <Card.Text>
            {product.description}
          </Card.Text>
        </div>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>£{product.price.toFixed(2)}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <LinkContainer to={`/shop/${product.id}`}>
          <Card.Link>See more</Card.Link>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;