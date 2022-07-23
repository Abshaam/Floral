import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import '../css/home.css'
import pic1 from '../images/human.jpg';
import pic2 from '../images/mothersday.jpg';
import pic3 from '../images/happyfathersday.jpg';
import pic4 from '../images/happyvalentineday.jpg';
import pic5 from '../images/easter decor.jpg';
import pic6 from '../images/love2.jpg';
import pic7 from '../images/happypassover.jpg';
import pic8 from '../images/missyou.jpg';
import pic9 from '../images/savethedate.jpg';
import pic10 from '../images/thankyou.jpg';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { CardGroup } from 'react-bootstrap';

export default function Home() {
  const now = 100;
  return (
    <>
      <Container>

        <h2 className='welcome'>
          <Badge bg="secondary"> Welcome to floral hub </Badge>
        </h2>

        <Card className="bg-dark text-white">
          <Card.Img src={pic1} alt="Card image" />
          <Card.ImgOverlay className='overlay'>
            <h2 className='language-text'>

              <Badge bg="warning" >
                Floral, flowers speaks
              </Badge>
            </h2>
          </Card.ImgOverlay>
        </Card>

        {/* next write up */}
        <Card className="text-center">
          <Card.Header>For everything you want to know about flowers</Card.Header>
          <Card.Body>
            <Card.Title>
              <ProgressBar now={now} variant="secondary" label={`${now}%`} visuallyHidden />
            </Card.Title>
            <Card.Text>
              Rated 100% with content about Flowers
            </Card.Text>
            <Button variant="secondary">EXPRESS YOURSELF WITH FLOWERS! COMMUNICATE</Button>
          </Card.Body>
        </Card>

        {/* section  */}
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={pic2} />
            <Card.Body>
              <Card.Title> Happy Mother's Day </Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={pic3} />
            <Card.Body>
              <Card.Title> Happy Father's Day</Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={pic4} />
            <Card.Body>
              <Card.Title> Happy Valentine's Day</Card.Title>
            </Card.Body>

          </Card>
        </CardGroup>

        {/* cards 2 */}

        {/* section  */}
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={pic5} />
            <Card.Body>
              <Card.Title> Happy Easter </Card.Title>
            </Card.Body>

          </Card>
          <Card>
            <Card.Img variant="top" src={pic6} />
            <Card.Body>
              <Card.Title> Love </Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={pic7} />
            <Card.Body>
              <Card.Title> Happy Passover </Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>

        {/* cards 3 */}

        {/* section  */}
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={pic8} />
            <Card.Body>
              <Card.Title> Miss You </Card.Title>
            </Card.Body>

          </Card>
          <Card>
            <Card.Img variant="top" src={pic9} />
            <Card.Body>
              <Card.Title> Save the date </Card.Title>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={pic10} />
            <Card.Body>
              <Card.Title> Thank You </Card.Title>
            </Card.Body>
          </Card>
        </CardGroup>

        {/* Footer */}
        <Container>

          <h4 className='footer'> Designed by Ushy@div 2022</h4>

        </Container>




      </Container>



    </>
  )
}