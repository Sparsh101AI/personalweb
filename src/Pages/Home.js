import "./Home.css";
import 'bootstrap/dist/css/bootstrap.css';
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomePage() {
  return (
   
   
  
    <Container fluid className="homebody">
      <br/>
      <br/>
      
      <card className="homebody">

      
     <div className="textbox1">
     
      <h1 className="maintext1" >Meet </h1> <h1 className="maintext2"> Sparsh! <span class="wave">👋</span> </h1>  
      </div>
        
     
      </card>



      <Row>
        <Col>1 of 3</Col>
        <Col >2 of 3 (wider)</Col>
        <Col>3 of 3</Col>
      </Row>

    </Container>

    
  );
}

export default HomePage;