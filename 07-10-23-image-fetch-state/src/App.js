import { Container, Row ,Col} from "react-bootstrap";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FetchApi from "./FetchApi";
import StateEx from "./StateEx";
function Test()
{
  var x=1, y=2;
   return(
    <>
    <h1>TEST function</h1>
   <h2> {x+y}</h2>
    </>
   )
}

function GetCOlor()
{
  const obj = {
    color:"blue"
  }

  return(
    <>
    
      <h3 style={obj}>TEST createRoot</h3>
      <button onClick={()=>{alert("hello react")}}>Apply CSS</button>
    </>
  )

}

function Abhay()
{
  return (
    <>

<h1 className="text-center bg-primary text-light fs-2" style={{color:"red"}}>HELLO REACT...!</h1>
    <h3>Harsh</h3>
    <Test/>
    <GetCOlor/>
    <button>CLick</button>

    <div className="bg-info row">
      <div className="bg-warning col-3 col-xl-6 col-lg-12">COl 1</div>
      <div className=" col-3 col-xl-6 col-lg-12">COl 2</div>
      <div className="bg-warning col-3">COl 3</div>
      <div className=" col-3">COl 4</div>
    </div>

    {/* <Container className="bg-primary" fluid>
      <Row>
        <Col>Col 1</Col>
        <Col>Col 1</Col>
        <Col className="bg-info" >Col 1</Col>
        <Col>Col 1</Col>
      </Row>
    </Container> */}
    <FetchApi/>
    <StateEx/>
    
    </>
  )
}

export default Abhay;
// export default GetCOlor;