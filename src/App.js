import React from 'react';
import { Nav,Navbar,Form,FormControl } from 'react-bootstrap';
import logo from './images/logo1.png';
import safalogo from './images/safalogoo.png';
import st1 from './images/1.JPG';
import scnd from './images/2.JPG';
import th3 from './images/3.JPG';
import th4 from './images/4.JPG';
import th5 from './images/5.JPG';
import th6 from './images/6.JPG';
import th7 from './images/7.JPG';
import th8 from './images/8.JPG';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron,Carousel,Button} from 'react-bootstrap'
import './App.css';
// import Slide from 'CarouselPage';

function App() {
  return (
    <div className="App">
     <div className= 'head'>
     <img className="logo" src={logo}/>
     <img className="safalogo" src={safalogo}/>
     </div>
     <Navbar bg="dark"   variant="dark">
    <Nav className="mr-auto" className="container-fluid">
    <Nav.Link className="ml-auto" className="navfont" href="">عنا</Nav.Link>
      <Nav.Link className="ml-auto" className="navfont" href="">معرض الصور</Nav.Link>
      <Nav.Link className="ml-auto" className="navfont" href="">الموقع</Nav.Link>
      <Nav.Link className="ml-auto" className="navfont" href=""> جدول الفعاليات</Nav.Link>
      <Nav.Link className="ml-auto" className="navfont" href="">الرئيسية</Nav.Link>
    </Nav>
    
  </Navbar> 


      <div className='center'>
 
      <Carousel>
<Carousel.Item>
<img
className="d"
src={st1}
alt="First slide"
/>

</Carousel.Item>
<Carousel.Item>
<img
className="d"
src={scnd}
alt="Third slide"
/>


</Carousel.Item>
<Carousel.Item>
<img
className="d"
src={th3}
alt="Third slide"
/>

</Carousel.Item>
<Carousel.Item>
<img
className="d"
src={th4}
alt="Third slide"
/>

</Carousel.Item>
<Carousel.Item>
<img
className="d"
src={th5}
alt="Third slide"
/>

</Carousel.Item>
<Carousel.Item>
<img
className="d"
src={th6}
alt="Third slide"
/>

</Carousel.Item>
<Carousel.Item>
<img
className="d"
src={th7}
alt="Third slide"
/>

</Carousel.Item>
<Carousel.Item>
<img
className="d"
src={th8}
alt="Third slide"
/>

</Carousel.Item>
</Carousel>
     
 
 

</div>
   </div>
  );
}

export default App;




