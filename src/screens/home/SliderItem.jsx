import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SliderItem() {
  return (
    <Card className='slider-item'>
      <Card.Body>
        <Card.Title className='slider-item-title'>Card Title</Card.Title>
        <Card.Text className='slider-item-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="outline-warning">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default SliderItem;