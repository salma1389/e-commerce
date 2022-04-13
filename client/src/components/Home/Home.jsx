import React, { useState } from 'react'
import { Carousel, Form , Button} from 'react-bootstrap'
// import {SendIcon} from "'@mui/icons-material'";
// import {SendIcon} from "@mui/material/icons"
import { useDispatch } from 'react-redux';
import { userSignUp } from '../../redux/actions/actionUser';
import './Home.css';


const Home = () => {
  const [email, setEmail] = useState("");
  const dispatch=useDispatch();
  const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(userSignUp({email}))
}
  return (
    <div>
      <input type="file" />
      <div className='carousel'>
    <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    className="d-block w-100"
      src="https://th.bing.com/th/id/R.d6e89789575b281594f6fe53315fcef8?rik=JLcXP%2faK1Dxdzw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-AP1rwyRy2os%2fTyt4W1prDeI%2fAAAAAAAAFaI%2fBf_55k03aK0%2fs400%2fThe%2bFashion10.jpg&ehk=j6u2Eq7NAAYdfdKcfm8hplqH0I9z7wCCLwbPr46rFQI%3d&risl=&pid=ImgRaw&r=0"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    className="d-block w-100 "
      src="https://i0.wp.com/www.titanui.com/wp-content/uploads/2013/08/10/Vector-Vintage-Illustration-Of-Fashion-Girl-and-Womens-Accessories-07.jpg?fit=557%2C611&ssl=1"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>

<h1>best seller brands</h1>
 <h2>products</h2>

 <Form className='newsletter' onSubmit={handleSubmit} >
      <h1>Newsletter</h1>
      <Form.Label>Get timely updates from your favorite products.</Form.Label>
     
      {/* <Form.Control type="email" placeholder="Enter email" value={email} onChange={e=>setEmail(e.target.value)} /> */}
      <div className="InputContainer">
        <Form.Control className='control' placeholder="Your email" type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
        
        
        {/* <Button className='btn' variant="contained" endIcon={<SendIcon />}> */}
        <Button className='btn' variant="contained" >
             Send
        </Button>
     
      </div>
   
    </Form>

    </div>
  )
}

export default Home