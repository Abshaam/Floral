import { Container } from "react-bootstrap";
import '../css/about.css'
import { Card, CardGroup } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";
import pic1 from '../images/cherry blossom.jpg';
import pic2 from '../images/middle.jpg';
import pic3 from '../images/largest.avif';
import pic4 from '../images/small.avif';
import pic5 from '../images/rose.jpg';
import pic6 from '../images/juliet.jpg';
import pic7 from '../images/edge.jpg';
import pic8 from '../images/daises.jpg';
import pic9 from '../images/yarrow.avif';
import pic10 from '../images/geberra.avif';
import pic11 from '../images/tulibbulb.jpg';
import pic12 from '../images/saffronspice.jpg';
import pic13 from '../images/dandelion.jpg';




export default function About (){
    return(
        <>

        {/* <Container> */}
        <Card className="bg-dark text-white">
      <Card.Img src= { pic1 } alt="Card image" />
      <Card.ImgOverlay>
      <Container>
      <Card>
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="#first"> ABOUT </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          Floral is an application that seeks to educate users about flowers. Flowers can mean so much without saying a word. There is something about receiving the gift of flowers - it means that someone took the time to pick out an arrangement and have it delivered specifically to you.  You are important to them. 

Now that your thoughtful gift has arrived, what's next?  Once the order was placed, our thoughtful floral artisans put together your arrangement by hand. There will never be another arrangement exactly like yours. It's unique, and a thing to be cherished.
Keeping your gift fresh and blooming, along with knowing some of the meanings of the different types of flowers you receive, lets you know that people are thinking of you.  Explore the topics below to learn more about how to take care of your gift, what the flowers themselves represent, and more!


        </Card.Text>

        <Container>

           {/* next write up cards1 */}
           <Card className="text-center">
          <Card.Header>
          <Button variant="secondary"> INTERESTING ROSE FACTS FOR KIDS </Button>
            </Card.Header>
          <Card.Body>
          <CardGroup>
      <Card>
        <Card.Img variant="top" src= { pic5 } />
        <Card.Body>
          <Card.Text className="black" >Rose oil is very expensive and labor intensive to make: making five milliliters of oil requires about 250,000 rose petals, or 10,000 roses!</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src= { pic6 } />
        <Card.Body>
          <Card.Text className="black" >The Juliet rose is a beautiful apricot hued flower and also the most expensive rose ever developed. It took its breeder David Austin $4.37 million and 15 years to create! </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src= { pic7 } />
        <Card.Body>
          <Card.Text className="black"> Of the 400,000 species of flower plants which exist in the world, over 35 000 are species of roses</Card.Text>
        </Card.Body>

        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
    </CardGroup>
          </Card.Body>
        </Card>
        <Card className="text-center">
          <Card.Header>
          <Button variant="secondary">FUN FACTS ABOUT FLOWERS </Button>
            </Card.Header>
          <Card.Body>
          <CardGroup>
      <Card>
        <Card.Img variant="top" src= { pic2 } />
        <Card>
        <Card.Body>
          <Card.Text>Flowers are the reproductive structure of flowering plants. When insects or birds come to take nectar from a flower, they pollinate it by moving pollen from one flower into another's pistil (the female part of the flower)</Card.Text>
        </Card.Body>
        </Card>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src= { pic3 } />
        
        <Card.Body>
          <Card.Text>The largest flower in the world can be up to ten feet tall and three feet wide, and it can weigh up to 24 pounds! It is called the Titan Arum and it has a distinctive smell of rotting flesh, hence why it is called "corpse flower" </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src= { pic4 } />
        <Card.Body>
          <Card.Text> The smallest flower in the world is the Wolffia globosa or Watermeal. This tiny green plant is the size of a grain of rice, and the flower is located in a small hole in the surface of the plant</Card.Text>
        </Card.Body>


        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
    </CardGroup>
          </Card.Body>
        </Card>


           {/* cards3 */}
           <Card className="text-center">
          <Card.Header>
          <Button variant="secondary">COOL FACTS ABOUT FLOWERS AND HEALTH </Button>
            </Card.Header>
          <Card.Body>
          <CardGroup>
      <Card>
        <Card.Img variant="top" src= { pic8 } />
        <Card.Body>
          <Card.Text className="black" >Daisies are thought to have medicinal properties such as relieving indigestion, easing coughs and easing back pains</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src= { pic9 } />
        <Card.Body>
          <Card.Text className="black" > Greek mythology says that when Achilles was born, his mother plunged him into a bath of yarrow tea, a flower known for its protective qualities. Yarrow was also used to heal soldiers during World War I. </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src= { pic10 } />
        <Card.Body>
          <Card.Text className="black"> If you want to sleep better, place some Gerbera daisies by your bed: they emit oxygen and absorb toxins.Daffodil bulbs look a lot like onions but they are actually poisonous!</Card.Text>
        </Card.Body>

        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
    </CardGroup>
          </Card.Body>
        </Card>

      {/* cards4 */}
      <Card className="text-center">
          <Card.Header>
          <Button variant="secondary">COOKING FACTS ABOUT FLOWERS </Button>
            </Card.Header>
          <Card.Body>
          <CardGroup>
      <Card>
        <Card.Img variant="top" src= { pic11 } />
        <Card.Body>
          <Card.Text className="black" >If you're out of onions, you can substitute them with a tulip bulb! However, you should make sure it is a fresh bulb that has not been exposed to pesticides. Broccoli, cauliflower and artichokes are known as vegetables but they are actually flowers!</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src= { pic12 } />
        <Card.Body>
          <Card.Text className="black" > Saffron, one of the most expensive spices in the world, comes from a type of crocus flower. Roses are related to apples, cherries, raspberries, peaches, pears and almonds </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src= { pic13 } />
        <Card.Body>
          <Card.Text className="black"> Dandelion leaves are often treated as weeds, but in fact they are a very good source of vitamins A and C, as well as iron, calcium and potassium. They can be used to make a healthy salad! You can make caffeine-free coffee from dandelion leaves</Card.Text>
        </Card.Body>

        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
    </CardGroup>
          </Card.Body>
        </Card>
            
            
        </Container>
        

      </Card.Body>
    </Card>
       </Container>
       {/* Footer */}
       <Container>

<h4 className='footer'> Designed by Ushy@div 2022</h4>

</Container>
      </Card.ImgOverlay>
    </Card>
        {/* </Container> */}
        </>
    )
}