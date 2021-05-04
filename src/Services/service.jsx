import react from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from 'react-router-dom';

import img1 from "../images/webD.png";

const service = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 3, // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1, // optional, default to 1.
        },
      };


    return (
        <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            //autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            //deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            >
            
            <div className="col-md-4 col-12 mx-auto">
                <div className="card">
                <img src={img1} className="card-img-top" alt={"props.imgsrc"} />
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">{"props.title"}</h5>
                    <p className="card-text">
                    Some quick example text to build on 
                    </p>
                    
                    <NavLink to="" className="btn btn-primary">
                    Check Now
                    </NavLink>
                </div>
                </div>
            </div>

            <div className="col-md-4 col-12 mx-auto">
                <div className="card">
                <img src={img1} className="card-img-top" alt={"props.imgsrc"} />
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">{"props.title"}</h5>
                    <p className="card-text">
                    Some quick example text to build 
                    </p>
                    <NavLink to="" className="btn btn-primary">
                    Check Now
                    </NavLink>
                </div>
                </div>
            </div>

            <div className="col-md-4 col-12 mx-auto">
                <div className="card">
                <img src={img1} className="card-img-top" alt={"props.imgsrc"} />
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">{"props.title"}</h5>
                    <p className="card-text">
                    Some quick example text to build
                    </p>
                    <NavLink to="" className="btn btn-primary">
                    Check Now
                    </NavLink>
                </div>
                </div>
            </div>

            <div className="col-md-4 col-12 mx-auto">
                <div className="card">
                <img src={img1} className="card-img-top" alt={"props.imgsrc"} />
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">{"props.title"}</h5>
                    <p className="card-text">
                    Some quick example text to
                    </p>
                    <NavLink to="" className="btn btn-primary">
                    Check Now
                    </NavLink>
                </div>
                </div>
            </div>

            <div className="col-md-4 col-12 mx-auto">
                <div className="card">
                <img src={img1} className="card-img-top" alt={"props.imgsrc"} />
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">{"props.title"}</h5>
                    <p className="card-text">
                    Some quick example text to
                    </p>
                    <NavLink to="" className="btn btn-primary">
                    Check Now
                    </NavLink>
                </div>
                </div>
            </div>

            <div className="col-md-4 col-12 mx-auto">
                <div className="card">
                <img src={img1} className="card-img-top" alt={"props.imgsrc"} />
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">{"props.title"}</h5>
                    <p className="card-text">
                    Some quick example text to
                    </p>
                    <NavLink to="" className="btn btn-primary">
                    Check Now
                    </NavLink>
                </div>
                </div>
            </div>

            <div className="col-md-4 col-12 mx-auto">
                <div className="card">
                <img src={img1} className="card-img-top" alt={"props.imgsrc"} />
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">{"props.title"}</h5>
                    <p className="card-text">
                    Some quick example text to 
                    </p>
                    <NavLink to="" className="btn btn-primary">
                    Check Now
                    </NavLink>
                </div>
                </div>
            </div>

            <div className="col-md-4 col-12 mx-auto">
                <div className="card">
                <img src={img1} className="card-img-top" alt={"props.imgsrc"} />
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">{"props.title"}</h5>
                    <p className="card-text">
                    Some quick example text to 
                    </p>
                    <NavLink to="" className="btn btn-primary">
                    Check Now
                    </NavLink>
                </div>
                </div>
            </div>

            <div className="col-md-4 col-12 mx-auto">
                <div className="card">
                <img src={img1} className="card-img-top" alt={"props.imgsrc"} />
                <div className="card-body">
                    <h5 className="card-title font-weight-bold">{"props.title"}</h5>
                    <p className="card-text">
                    Some quick example text to 
                    </p>
                    <NavLink to="" className="btn btn-primary">
                    Check Now
                    </NavLink>
                </div>
                </div>
            </div>

            

            
        </Carousel>
           
    );
}


export default service;