import { NavLink } from "react-router-dom";
import { getFloweringTrees } from "../data";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import pic1 from "../images/allFlowers/back6.avif";
import { Container } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";

export default function FloweringTrees() {
  let flowers = getFloweringTrees();
  return (
    <>
      <Container>
        <h2 className="welcome">
          <Badge bg="secondary"> Welcome to Flowering Trees </Badge>
        </h2>

        <Card className="bg-dark text-white">
          <Card.Img src={pic1} alt="Card image" />
          <Card.ImgOverlay className="overlay">
            
              <h2 className="welcome">
                <Badge bg="warning"> Flowering Trees </Badge>
              </h2>
           
          </Card.ImgOverlay>
        </Card>

       
        <Row xs={2} md={2} className="g-4">
          {flowers.map((flower) => (
            <NavLink to={`/flowers/${flower.id}`} key={flower.id}>
              <Col>
                <Card>
                  <Card.Body>
                    <Card.Title> {flower.title}</Card.Title>
                    <Card>
                      <Card>{flower.src}</Card>
                    </Card>
                  </Card.Body>
                </Card>
              </Col>
            </NavLink>
          ))}
        </Row>

        <Card.Footer>
          <h4 className="footer"> Designed by Ushy@div 2022</h4>
        </Card.Footer>
      </Container>
    </>
  );
}
