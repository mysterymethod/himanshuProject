import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Analytic from '../analytics/Analytics';

import bg10 from '../images/bg10.png';

function Card() {

  var sectionStyle = {
    // backgroundImage: `url(${bg8})`,
    paddingTop: '100px'
    // backgroundSize: "cover"
  };

  var sectionStyle2 = {
    backgroundImage: `url(${bg10})`
    // backgroundSize: "cover"
  };

  return ( 
    <div style={ sectionStyle }>

    
    <div className='cards back' style={ sectionStyle2 } >
      <h1>Check out our EXPERTISE!</h1>
      <div className='cards__container' >
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Lorem Ipsum is simply dummy text of the printing and typesetting'
            //   label='Mystery'
              path='/services'
              title='Awesome Content'
              icon='fas fa-crown fa-5x'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Lorem Ipsum is simply dummy text of the printing and typesetting'
            //   label='Adventure'
              path='/products'
              title='Non-Plagiarized Papers'
              icon='fas fa-copy fa-5x'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Lorem Ipsum is simply dummy text of the printing and typesetting'
            //   label='Adrenaline'
              title='Experienced Writers'
              path='/sign-up'
              icon='fas fa-users fa-5x'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Lorem Ipsum is simply dummy text of the printing and typesetting'
              title='Timely Delivery'
              path='/services'
              icon='fas fa-clock fa-5x'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Lorem Ipsum is simply dummy text of the printing and typesetting'
            //   label='Adventure'
              title='Proven'
              path='/products'
              icon='fas fa-layer-group fa-5x'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Lorem Ipsum is simply dummy text of the printing and typesetting'
            //   label='Adrenaline'
              title='Customer Support'
              path='/sign-up'
              icon='fas fa-comments fa-5x'
            />
          </ul>
        </div>
      </div>


      <Analytic />
    </div>

    </div>
  );
}

export default Card;

























// import React from "react";
// import Sdata from "../Sdata";
// import Card from "./Card";

// const WhychooseUs = () => {
//   return (
//     <>
//       <div className="my-5">
//         <h1 className="text-center"> Why Choose Us </h1>
//       </div>
//       <div className="container-fluid mb-5">
//         <div className="row">
//           <div className="col-10 mx-auto">
//             <div className="row gy-4">
//               {Sdata.map((val, ind) => {
//                 return <Card key={ind} imgsrc={val.imgsrc} title={"Lorem ipsum"} />;
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default WhychooseUs;