
import { useParams, } from "react-router-dom"
import React from "react";
import { getAll } from "../allData";
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import '../css/flower.css'
  
       
export default function Flower (){

    const param = useParams()

   

    const data = getAll(+param.flowerId)

    // console.log(param.flowerId);

    console.log('param', param)
     
    return(
        <>
         <div className="flowerBack"
        //  style={{ padding: "1rem"}}
         >
            {/* <Card className="bg-dark text-white"> */}
                
          <Container>
         <Card className="bg-dark text-white">
         <h2 className='welcome'>
          <Badge bg="secondary"> {data.title}</Badge>
        </h2>
         {/* <Card> */}
          <Card.Text>
          <Card>
          {data.src}
          </Card>
        </Card.Text>
          {/* </Card> */}
          <Card >
          
      <Card.Body>
        <Card>
        <Button variant="primary">{data.header}</Button>
        <Card.Text>
         {data.description}
        </Card.Text>
        </Card>
       
      </Card.Body>
    </Card>
        </Card>

        </Container>  
            </div>     
            {/* <AllFlowers/> */}

        <Container></Container>

         
  
        </>
    )
}