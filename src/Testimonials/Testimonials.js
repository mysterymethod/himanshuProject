import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect, useState } from "react";
import img1 from "../images/c1.jpeg";
import "./styles.css";


function Testimonials() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  var customStyle = {
    height: "500px",
  }

  return (
    // <Carousel activeIndex={index} onSelect={handleSelect}>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src={img1}
    //       alt="First slide"
    //       // height='00px'
    //     />
    //     <Carousel.Caption>
    //       <h3>First slide label</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="images/c2.jpeg"
    //       alt="Second slide"
    //       height='400px'
    //     />

    //     <Carousel.Caption>
    //       <h3>Second slide label</h3>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="images/c3.jpeg"
    //       alt="Third slide"
    //       height='400px'
    //     />

    //     <Carousel.Caption>
    //       <h3>Third slide label</h3>
    //       <p>
    //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //       </p>
    //     </Carousel.Caption> 
    //   </Carousel.Item>
    // </Carousel>

   

    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" style = {customStyle}>
      <div class="carousel-inner" >
        <div class="carousel-item active">
          <img src={img1} class="d-block w-100 h-400" alt="..." />
          <h1>Testi 1</h1>
        </div>
        <div class="carousel-item">
          <img src={img1} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={img1} class="d-block w-100" alt="..." />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

  );
}

export default Testimonials;