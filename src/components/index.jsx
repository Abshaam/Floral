import Container from 'react-bootstrap/Container';
import '../css/index.css'
import CardGroup from 'react-bootstrap/CardGroup';
import pic1 from '../images/easter decor.jpg';
import pic2 from '../images/communicate.jpg';
import pic3 from '../images/kids room.jpg';
import pic4 from '../images/cake.jpg';
import pic5 from '../images/kitchen.jpg';
import pic6 from '../images/edge.jpg';
import col1 from '../images/redy.jpg';
import col2 from '../images/yello.jpg';
import col3 from '../images/green.jpg';
import col4 from '../images/bluee.jpg';
import col5 from '../images/purple .jpg';
import col6 from '../images/whitee.jpg';
import col7 from '../images/orange.jpg';
import col8 from '../images/pink.jpg';
import col9 from '../images/mixed.jpg';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import  Carousel  from 'react-bootstrap/Carousel';
import car1 from '../images/lookup.jpg';
import car2 from '../images/long.jpg';
import car3 from '../images/smell.jpg';
import car4 from '../images/vision.jpg';
import car5 from '../images/kiddo.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

// import Button from 'react-bootstrap/Button'

export default function Index (){
    return(
        <>
        <Container>
     {/* <Card.Img variant="top" 
      style={{ marginTop: 40 }}
       src={pic2} className='img-fluid rounded-circle border border-3 border-dark'  alt="" /> */}
         
        <h2 className='welcome'>
        <Badge bg="secondary"> Welcome to floral hub </Badge>
       </h2>
      

            {/* Cards here */}
    <CardGroup>
      <Card>
         <Card.Body>
          <Card.Title> Easter Decoration </Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Img variant="top" src= { pic1 } />
     
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            {/* Last updated 3 mins ago */}
            </small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src= { pic2 } />
        <Card.Body>
          <Card.Title> Communication </Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            {/* Last updated 3 mins ago */}
            </small>
        </Card.Footer>
      </Card>
      <Card>
    
        <Card.Body>
          <Card.Title>  Decorate rooms </Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
          <Card.Img variant="top" src= { pic3 } />
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            {/* Last updated 3 mins ago */}
            </small>
        </Card.Footer>
      </Card>
    </CardGroup>

    {/* next cards */}

    <CardGroup>
      <Card>
         <Card.Body>
          <Card.Title> Cake Decoration </Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Img variant="top" src= { pic4 } />
     
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            {/* Last updated 3 mins ago */}
            </small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src= { pic5 } />
        <Card.Body>
          <Card.Title> Kitchen Decor </Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            {/* Last updated 3 mins ago */}
            </small>
        </Card.Footer>
      </Card>
      <Card>
    
        <Card.Body>
          <Card.Title>  Decorate vontage points </Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
          <Card.Img variant="top" src= { pic6 } />
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">
            {/* Last updated 3 mins ago */}
            </small>
        </Card.Footer>
      </Card>
    </CardGroup>

             </Container>

             {/* write up */}
             <Container>
             <h1 className='coloured-top'>
               <Badge bg="secondary"> What do you know about colored flowers? </Badge>
               <Container>
               <h3 className='coloured-text'>To gaze upon a beautiful, brightly colored fresh flower arrangement is to experience pure emotion. Depending on the color of the arrangement or bouquet, the emotion one feels will be slightly different. From the deep passionate red of a rose to the elegant white of a calla lily, to the exuberance concentrated in a bouquet of golden tulips, the color of flowers sends an emotional message. Over the centuries these messages have been written down and exchanged as the symbolic meaning flowers express. Consider these meanings when choosing the next fresh flower bouquet you wish to send so that your flowers communicate exactly what you intend</h3>
                 </Container>
             </h1>
             </Container>


             {/* coloured plowers */}
             <Container>

             <CardGroup>
      <Card>
        <Card.Img variant="top" src= {col1} />
        <Card.Body>
          <Card.Title> Red </Card.Title>
          <Card.Text>
          Fresh red flowers send the clear and powerful message of intense romantic love. Red is the unquestioned color of passion and any red bouquet or red flower arrangement will communicate your strong and powerful love. Red flowers are the closest symbolic likeness to the heart. Red is the color of seduction and desire. Red roses are the most common red flower, but red carnations, red tulips, and red gerbera daisies will all transmit your message of desire and passion.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"> A red flower </small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src= {col2} />
        <Card.Body>
          <Card.Title> Yellow </Card.Title>
          <Card.Text>
          Yellow flowers represent friendship and filial love. Yellow flowers represent trust, compassion, and respect. For these reasons, yellow flowers are a popular choice at the workplace to show appreciation for a job well done. Yellow flowers, with their soft radiance, also communicate sympathy. These gentle flowers show your warmth and compassion and renew ties of friendship, even during difficult times. Yellow daffodils are great flowers for friends. Yellow lilacs and yellow chrysanthemums are beautiful, thoughtful flowers.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"> A yellow flower </small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src= { col3 } />
        <Card.Body>
          <Card.Title> Green </Card.Title>
          <Card.Text>
          Bright healthy green in an arrangement represents harmony with nature and good fortune. To go green is to live a life of balance and enjoyment which leads to resilience and a youthful outlook. Green flowers offer a brilliant compliment to purple flowers and a wonderful contrast to many other bright hues. Green flowers draw attention to the architectural beauty of flowers, especially the calla lily. Green arrangements and bouquets represent health, wellness, and a promise for good fortune.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"> A green flower </small>
        </Card.Footer>
      </Card>
    </CardGroup>

    {/* second card */}
    <CardGroup>
      <Card>
        <Card.Img variant="top" src= {col4} />
        <Card.Body>
          <Card.Title> Blue </Card.Title>
          <Card.Text>
          Rich, deep blues, found in the beautiful hydrangea and the extraordinary iris, offer serenity. Blue flowers have a calming effect. They cool the emotions and create a contemplative mood. Imagine the easy pace of lying on your back and watching clouds float across a brilliant blue sky. Consider too the bliss of staring out at the calm blue sea. Blue flowers also speak of intimacy and are perfect flowers for long-term couples who want to communicate their deep and abiding trust. The peace derived from blue flowers also makes them an appropriate sympathy or get well flower.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"> A blue flower </small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src= {col5} />
        <Card.Body>
          <Card.Title> Purple  </Card.Title>
          <Card.Text>
          Purple flowers have an enchanted, other worldly quality to them. Their soft color gently pulses with mystery. Purple flowers symbolize charm, grace, elegance, and refinement. Their ethereal qualities also represent creativity. Purple flowers can make a strong romantic impression. A beautiful Purple arrangement can also symbolize an important transition. Purple flowers are some of the most beautiful flowers in the world. You are sure to send an extraordinary message with a gorgeous Purple bouquet.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"> A purple flower </small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src= { col6 } />
        <Card.Body>
          <Card.Title> White </Card.Title>
          <Card.Text>
          Fresh white flowers are most closely associated with purity and innocence. The delicate white blossoms represent honesty, purity, and perfection. White flowers are ideal when you are looking to communicate that wonderful combination of elegance and innocence. For many, white roses are the perfect bridal flower. Other gorgeous and powerful white flowers include white carnations, white orchids, white calla lilies, and white daisies. These flowers all communicate pure, thoughtful love and undying fidelity.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"> A white flower </small>
        </Card.Footer>
      </Card>
    </CardGroup>

    {/* third card */}
    <CardGroup>
      <Card>
        <Card.Img variant="top" src= {col7} />
        <Card.Body>
          <Card.Title> Orange </Card.Title>
          <Card.Text>
          If one could capture and concentrate the sun, the result would be bright, luminous orange flowers. Orange flowers offer happiness and joy. To look upon a fresh orange flower bouquet is to immediately feel the warmth of love. Orange flowers also send the message of adventure. Imagine the feeling of waking up without any responsibilities on a beautiful and warm weekend day. The possibilities are endless. This offer of adventure and spontaneity is included with each radiant orange flower arrangement
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"> An orange flower </small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src= {col8} />
        <Card.Body>
          <Card.Title> Pink </Card.Title>
          <Card.Text>
          Pink flowers combine innocence, playfulness, and sensitivity. For some pink flowers are the most romantic color because they are not as intense as deep reds and therefore express a deeper spectrum of love’s possibilities. Pink flowers have been traditionally associated with femininity, and with that association comes delicate and gentle connotations. However, more couples are eschewing those traditional expectations and allowing pink flowers to represent thoughtfulness and spontaneity. Either way you wish to interpret the meaning of pink flowers, these beauties are sure to delight. Pink flowers include pink roses, pink carnations, and pink chrysanthemums.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"> A pink flower </small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src= { col9 } />
        <Card.Body>
          <Card.Title> Mixed </Card.Title>
          <Card.Text>
          Combining the purity and innocence of white flowers with the passion of red flowers sends a signal of harmony and excitement. Together, these two flower colors transcend their original meanings and offer a promise of adventure wrapped in elegance.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"> A mixed colored flower </small>
        </Card.Footer>
      </Card>
    </CardGroup>



    </Container>

    {/* Carousel */}
    <Container> 
      <Row>
        <Col 
        // style={{ marginLeft: 200 }}
        //  ml={3} md={8} sm={8} xs={8}
          >
    <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={car1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h2 className='car-text'>Flowers always make people better, happier and more helpful. </h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src = { car2 }
      alt="Second slide"
    />
    <Carousel.Caption>
      <h2 className='car-text'>No matter how chaotic it is, wildflowers will still spring up in the middle of nowhere.</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src = { car3 }
      alt="Third slide"
    />
    <Carousel.Caption>
      <h2 className='car-text'>In a field of roses be a wildflower and let your dreams blossom.</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src = {car4}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h2 className='car-text'>Flowers are sunshine, food and medicine for the soul</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src = { car5 }
      alt="Second slide"
    />
    <Carousel.Caption>
      <h2 className='car-text'>how intricate they are, yet what simplicity and joy they bring to a moment, to life.</h2>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

      
     </Col>

         </Row>

     </Container>

     {/* footer */}

     <Container>

     <h4 className='footer'> Designed by Ushy@div 2022</h4>

     </Container>
        </>
    )
}