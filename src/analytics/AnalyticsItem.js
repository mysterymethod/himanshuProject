
import React from 'react';
import { Link } from 'react-router-dom';

import './AnalyticsItem.css';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='item' to={props.path}>
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
            <div className="horizontal-line"></div>
            <h5>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;