import React from 'react';
import { NavLink } from 'react-router-dom';
import Common from './Common';
import Navbar from './Navbar';
import { Carousel } from 'react-bootstrap';
import Testimonials from './Testimonials/Testimonials';
import FAQ from './FAQ/FAQ';
import Footer from './Footer/Footer';

import hero from "../src/images/hero-img.png";
import aboutus from "../src/images/aboutus.png";

import contSEO from "../src/images/contSEO.jpg";
import bg1 from "../src/images/bg1.png";

import GraphicDesign from "../src/images/graphicD.png";
import bg2 from "../src/images/bg2.png";

import webD from "../src/images/webD.png";
import bg3 from "../src/images/bg3.png";

import contentM from "../src/images/contentM.png";
import bg4 from "../src/images/bg4.png";

import appD from "../src/images/appD.png";
import bg5 from "../src/images/bg5.png";

import brand from "../src/images/brand.png";
import bg6 from "../src/images/bg6.png";

import assignment from "../src/images/assignment.png";
import bg7 from "../src/images/bg7.png";

import seo from "../src/images/seo.png";
import bg8 from "../src/images/bg8.png";

import videoM from "../src/images/videoM.png";
import bg9 from "../src/images/bg9.png";

import WhychooseUs from './WhyChooseUs/Cards';
// import Service from './Services/service';
import App from './section_2/CardCarousel';
import About from './AboutUs/About';

const Home = () => {
    return (
        <>
            <Navbar />

            <Carousel nextLabel='' prevLabel='' pause='hover'>
                {/* HOME */}
                <Carousel.Item>
                    <Common 
                        name = "Grow your business with"
                        imgsrc={contSEO}
                        visit="/service"
                        btname="Get Started"
                        backgroundImage={bg1}
                    />
                </Carousel.Item>

                {/* //GRAPHIC DESIGN */}
                <Carousel.Item>
                    <Common 
                        name = "Graphic Designing with"
                        imgsrc={GraphicDesign}
                        visit="/service"
                        btname="Get Started"
                        backgroundImage={bg2}
                    />
                </Carousel.Item>

                {/* //WEB DEVELOPMENT */}
                <Carousel.Item>
                    <Common 
                        name = "Web Development with"
                        imgsrc={webD}
                        visit="/service"
                        btname="Get Started"
                        backgroundImage={bg3}
                    />
                </Carousel.Item>

                {/* //CONTENT MARKETING */}
                <Carousel.Item>
                    <Common 
                        name = "Content Marketing with"
                        imgsrc={contentM}
                        visit="/service"
                        btname="Get Started"
                        backgroundImage={bg4}
                    />
                </Carousel.Item>

                {/* //APP DEVELOPMENT */}
                <Carousel.Item>
                    <Common 
                        name = "Mobile Application development with"
                        imgsrc={appD}
                        visit="/service"
                        btname="Get Started"
                        backgroundImage={bg5}
                    />
                </Carousel.Item>
                
                {/* //PERSONAL BRANDING */}
                <Carousel.Item>
                    <Common 
                        name = "Personal Branding with"
                        imgsrc={brand}
                        visit="/service"
                        btname="Get Started"
                        backgroundImage={bg6}
                    />
                </Carousel.Item>

                {/* //ASSIGNMENT SERVICE */}
                <Carousel.Item>
                    <Common 
                        name = "Make your Assignment with"
                        imgsrc={assignment}
                        visit="/service"
                        btname="Get Started"
                        backgroundImage={bg7}
                    />
                </Carousel.Item>

                {/* //SEARCH ENGINE OPTIMIZATION */}
                <Carousel.Item>
                    <Common 
                        name = "Improve your SEO with"
                        imgsrc={seo}
                        visit="/service"
                        btname="Get Started"
                        backgroundImage={bg8}
                    />
                </Carousel.Item>

                {/* //VIDEO MARKETING */}
                <Carousel.Item>
                    <Common 
                        name = "Video Marketing with"
                        imgsrc={videoM}
                        visit="/service"
                        btname="Get Started"
                        backgroundImage={bg9}
                    />
                </Carousel.Item>
            </Carousel>

            <App 
                item1_img={GraphicDesign}
                item1_text='Graphic Design'

                item2_img={GraphicDesign}
                item2_text='Web Development'

                item3_img={GraphicDesign}
                item3_text='Content Marketing'

                item4_img={GraphicDesign}
                item4_text='App Development'

                item5_img={GraphicDesign}
                item5_text='Branding'

                item6_img={GraphicDesign}
                item6_text='Assignment'

                item7_img={GraphicDesign}
                item7_text='SEO'

                item8_img={GraphicDesign}
                item8_text='Video Marketing'

            />

            <WhychooseUs />

            <About 
                name = "Welcome to About page"
                imgsrc={aboutus}
                visit="/contact"
                btname="Contact Now"
                backgroundImage={bg6}
            />

            <Testimonials />

            <FAQ />

            <Footer />

        </>
    );
};

export default Home;
