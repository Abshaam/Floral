import { NavLink } from "react-router-dom";
import { getAllFlowers } from "../allData";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import pic5 from "../images/allFlowers/womanmodel.jpg"
import { Container} from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';

export default function AllFlowers (){
    
    let flowers = getAllFlowers();
    return(
        <>
        <Container>

        <h2 className='welcome'>
          <Badge bg="secondary"> Welcome to All Flowers </Badge>
        </h2>

        
        {/* <Card.Img variant="top" 
      style={{ marginTop: 40,   marginButton: 40 }}
       src={pic5} className='img-fluid rounded-circle border border-3 border-light'  alt="" />
       */}
       <Row xs={2} md={2} className="g-4">
      {flowers.map((flower) => (
          <NavLink
            to={`/flowers/${flower.id}`}
            key={flower.id}
          >
        <Col>
          <Card>
          {/* <Card.Img variant="top" src= {flower.src} alt="" /> */}
            <Card.Body>
              <Card.Title> {flower.title}</Card.Title>
              {/* <Card> */}
              <Card>
              <Card>
              {flower.src}
              </Card>
              </Card>
              {/* </Card> */}
            </Card.Body>
          </Card>
        </Col>
        </NavLink>
        ))}
    </Row>

        {/* <div>this is the all flowers page </div> */}
        {/* <div className="articles-back">
      <h1>EXPLORE ARTICLES</h1>
   

      <h4>copyright Ushama@div 2022</h4>
  
    </div> */}
    <Card.Footer>
    <h4 className='footer'> Designed by Ushy@div 2022</h4>
    </Card.Footer>

    </Container>
        </>
    )
}





// export default function articles() {
//   let articles = getArticles();
//   return (
//     <div className="articles-back">
//       <h1>EXPLORE ARTICLES</h1>
//       <div className="article">
//         {flowers.map((article) => (
//           <NavLink
//             to={`/articles/${article.id}`}
//             key={flower.id}
//           >
//             {flower.src}
//             {flowere.title}
            
//           </NavLink>
//         ))}
//       </div>

//       <h4>copyright Ushama@div 2022</h4>
  
//     </div>
//   );
// }