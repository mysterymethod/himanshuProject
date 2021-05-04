import React from 'react';
import './Analytics.css';
import AnalyticsItem from './AnalyticsItem';

function Cards() {
  return (
    <div className='cards analytics'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <AnalyticsItem
              text='Years of Industry Experience'
              title='5+'
              icon='far fa-lightbulb fa-5x'
            />
            <AnalyticsItem
              src='images/img-4.jpg'
              text='Campaigns completed!'
            //   label='Adventure'
              path='/products'
              title='1000+'
              icon='fa fa-laptop fa-5x'
            />
            <AnalyticsItem
              src='images/img-4.jpg'
              text='Exclusive audience per month'
            //   label='Adventure'
              path='/products'
              title='10k+'
              icon='fa fa-coffee fa-5x'
            />
            <AnalyticsItem
              src='images/img-8.jpg'
              text='Agency Clients'
            //   label='Adrenaline'
              title='50+'
              path='/sign-up'
              icon='far fa-heart fa-5x'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

