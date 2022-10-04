import { NavLink } from "react-router-dom";
import { getAllFlowers } from "../allData";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import pic2 from "../images/primerose.jpg"
import { Container} from 'react-bootstrap';

export default function AllFlowers (){
    
    let flowers = getAllFlowers();
    return(
        <>
        <Container>

       <Row xs={2} md={2} className="g-4">
      {flowers.map((flower) => (
          <NavLink
            to={`/flowers/${flower.id}`}
            key={flower.id}
          >
        <Col>
          <Card>
          <Card.Img variant="top" src={flower.src} alt="" />
            <Card.Body>
              <Card.Title> {flower.title}</Card.Title>
              <Card.Text>
              {flower.src}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </NavLink>
        ))}
    </Row>


          {/* <div>
          {flowers.map((flower) => (
          <NavLink
            to={`/flowers/${flower.id}`}
            key={flower.id}
          >
                <Card>
                    <Card.Body>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src= {flower.src} alt="" />
                            <Card.Body>
                                <Card.Text>
                                    <Card>
                                        <Card.Body>
                                        {flower.title}
                                          <Card.Text>
                                              {flower.src}
                                                   </Card.Text>
                                            </Card.Body>
                                    </Card>
                                </Card.Text>
                              
                            </Card.Body>
                        </Card>
                    </Card.Body>
                </Card>
                </NavLink>
        ))} */}

          
        {/* </div> */}
        <div>this is the all flowers page </div>
        <div className="articles-back">
      <h1>EXPLORE ARTICLES</h1>
      {/* <div className="article">
        {flowers.map((flower) => (
          <NavLink
            to={`/flowers/${flower.id}`}
            key={flower.id}
          >
            {flower.src}
            {flower.title}
            
          </NavLink>
        ))}
      </div> */}

      <h4>copyright Ushama@div 2022</h4>
  
    </div>

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