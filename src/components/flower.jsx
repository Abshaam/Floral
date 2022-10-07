import { useParams } from "react-router-dom";
import React from "react";
import { getAll } from "../allData";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import ProgressBar from 'react-bootstrap/ProgressBar';
import pic2 from '../images/thankyou.jpg';
import "../css/flower.css";
import Comment from '../components/comment.jsx'

export default function Flower() {
  const param = useParams();

  const data = getAll(+param.flowerId);
   const now = 100;

  // console.log(param.flowerId);

  console.log("param", param);

  return (
    <>
      <div className="flowerBack">
        <Container>
          <Card className="bg-dark text-white">
            <h2 className="welcome">
              <Badge bg="secondary"> {data.title}</Badge>
            </h2>
            <Card >
              {/* <Card> */}
                {data.src}
                {/* </Card> */}
            </Card>
            <Card>
              <Card.Body>
                <Card>
                  <Button variant="primary">{data.header}</Button>
                  <Card.Text className='des'>{data.description}</Card.Text>
                </Card>
              </Card.Body>
            </Card>
          </Card>

          {/* <Container> */}
        {/* next write up */}
        <Card className="text-center">
          <Card.Header>Amazed!! tell a friend about Floral</Card.Header>
          <Card>
          <Card.Img variant="top" 
      style={{ marginTop: 40 }}
       src={pic2} className='img-fluid rounded-circle border border-3 border-light'  alt="" />
          </Card>
          <Card.Body>
            <Card.Title>
              <ProgressBar now={now} variant="secondary" label={`${now}%`} visuallyHidden />
            </Card.Title>
            <Card.Text>
            What do you think about Floral?
            </Card.Text>
            <Button variant="secondary">REVIEWS</Button>
            <Comment/>
          </Card.Body>
        </Card>

      {/* </Container> */}
        </Container>
        <Card.Footer>
         <h4 className='footer'> Designed by Ushy@div 2022</h4>
        </Card.Footer>

      </div>

      
    </>
  );
}
