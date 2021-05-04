import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];

const App = (props) =>  {
  return (
    <>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <Item>
            <div class="row">
                <div class="row-sm-4"><img src={props.item1_img} ></img></div>
                <div class="row-sm-4"><p>{props.item1_text}</p></div>
                
            </div>
          </Item>

          <Item>
            <div class="row">
                <div class="row-sm-4"><img src={props.item2_img} ></img></div>
                <div class="row-sm-4"><p>{props.item2_text}</p></div>
                
            </div>
          </Item>

          <Item>
            <div class="row">
                <div class="row-sm-4"><img src={props.item3_img} ></img></div>
                <div class="row-sm-4"><p>{props.item3_text}</p></div>
                
            </div>
          </Item>

          <Item>
            <div class="row">
                <div class="row-sm-4"><img src={props.item4_img} ></img></div>
                <div class="row-sm-4"><p>{props.item4_text}</p></div>
                
            </div>
          </Item>

          <Item>
            <div class="row">
                <div class="row-sm-4"><img src={props.item5_img} ></img></div>
                <div class="row-sm-4"><p>{props.item5_text}</p></div>
                
            </div>
          </Item>

          <Item>
            <div class="row">
                <div class="row-sm-4"><img src={props.item6_img} ></img></div>
                <div class="row-sm-4"><p>{props.item6_text}</p></div>
                
            </div>
          </Item>

          <Item>
            <div class="row">
                <div class="row-sm-4"><img src={props.item7_img} ></img></div>
                <div class="row-sm-4"><p>{props.item7_text}</p></div>
                
            </div>
          </Item>

          <Item>
            <div class="row">
                <div class="row-sm-4"><img src={props.item8_img} ></img></div>
                <div class="row-sm-4"><p>{props.item8_text}</p></div>
                
            </div>
          </Item>

        </Carousel>
      </div>
    </>
  );
}

export default App;