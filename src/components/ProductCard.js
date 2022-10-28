import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { LinkContainer } from 'react-router-bootstrap';

function ProductCard({ product }) {
  return (
    <Card className="m-3" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
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