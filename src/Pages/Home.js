import "./Home.css";
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";

function HomePage() {
  return (
   
   
  
    <Container fluid className="homebody">
      <br/>
      <br/> <br/>
      <br/>
      
      
      
<Row>
    
     <div >
     
      <h1 className="maintext1" >Meet </h1> <h1 className="maintext2"> Sparsh! <span class="wave">👋</span> </h1>  
      </div>
        
      </Row>
     



<br></br>
<Row>
<Col>
      <Card >
      
       
        <h2 className="typewrite">
      <h2 className="maintext11">I'm </h2>
           {" "}
            <span>
              {/* Style will be inherited from the parent element */}
              <strong>
                <Typewriter
                  words={["a dreamer.", "a creator.", "a reader."]}
                  loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </strong>
            </span>
          </h2>
        
      
      </Card>
      </Col>
      <Col></Col>
     

  
      </Row>

    </Container>

    
  );
}

export default HomePage;