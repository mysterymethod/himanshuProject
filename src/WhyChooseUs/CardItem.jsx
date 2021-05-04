
import React from 'react';
import { Link } from 'react-router-dom';

import './CardItem.css';

function CardItem(props) {
  return ( 
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          {/* <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure> */}
          <i class={props.icon}></i>
          <div className='cards__item__info'>
            <h3>{props.title}</h3>
            <h5>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;




















// import React from "react";
// import web from "../../src/images/s1.jpg";
// import { NavLink } from "react-router-dom";

// const Card = (props) => {
//   return (
//     <>
//       <div className="col-md-4 col-12 mx-auto">
//         <div className="card">
//           <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
//           <div className="card-body">
//             <h5 className="card-title font-weight-bold">{props.title}</h5>
//             <p className="card-text">
//               Some quick example text to build on the card title and make up the
//               bulk of the card's content.
//             </p>
            
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Card;