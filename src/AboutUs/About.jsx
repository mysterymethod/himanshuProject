import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../images/hero-img.png";

const Common = (props) => {

    var sectionStyle = {
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundSize: "cover",
    };

    var sectionStyle2 = {
        marginTop: '20px'
    };

    return (
        <>
            <section id="header" className="d-flex align-items-center" style={ sectionStyle }>
                <div className="container-fluid nav_bg" >
                    <div className = "row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1> {props.name} <strong className="brand-name">ContSEO</strong> </h1>
                                    <h2 clasName="my-3">
                                        We are the team of talented developer making websites. 
                                    </h2>

                                    <div className="mt-3">
                                        <NavLink to={props.visit} className="btn-get-started">Get Started!</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                        <img src={props.imgsrc} className="img-fluid " alt="home img"  />
                                </div>
                            </div>                            
                     </div>
                  </div>
                </div>
            </section>
        </>
    );
};

export default Common;













// import React from 'react';
// import web from '../src/images/hero-img.png';
// import Common from "../Common";


// const About = () => {
//     return (
//         <>
//             <Common 
//                 name = "Welcome to About page"
//                 imgsrc={web}
//                 visit="/contact"
//                 btname="Contact Now"
//             />
//         </>
//     );
// };

// export default About;


