import "./Category.css"
import dark1 from "./dark1.png"
import dark2 from "./dark2.png"
import dark3 from "./dark3.png"
import main from "./main.png"
import rate4 from "./rate4.png"
import colors from "./colors.png"
import { useState } from "react";
// usestate



export default function Category(){
    const[initialState , setInitialState] = useState (0)
    function addition(){
        setInitialState (initialState + 1)
    }
    
    function subtraction(){
        setInitialState (initialState - 1)
    }
    return(
        <div>
           <div className="container">
              <div className="dark">
                 <img src={dark1}/>
                 <img src={dark2}/>
                 <img src={dark3}/>
              </div>
                <img src={main} width={400}  height={460}/>

                <div className="graphic">
                  <h2>One Life Graphic T-shirt</h2>
                  <img src={rate4} width={200}/>
                  <p>$260 <del>$300</del> -40%</p>
                  <p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and <br/> breathable fabric, it offers superior comfort and style.</p> <hr/>
                  <p>Select Colors</p>
                  <img src={colors} width={180}/> <hr/>
                  <p>Choose Size</p>
                  <p id="size">Small</p>
                  <p id="size">Medium</p>
                  <p id="size">Large</p>
                  <p id="size">X-Large</p><hr id="hr"/>
                  <div id="click">
                     <p id="click1" onClick={addition}>+</p>
                     <p id="click1">{initialState}</p>
                     <p id="click1" onClick={subtraction}>-</p>
                     <p id="click2">Add to Cart</p>
                  </div>
                  
                </div>
        
            </div>
          
        </div>
    )
}