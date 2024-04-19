import "./main.css"
import { useState } from "react"
import first from "./b.png"
import bin from "./bin.png"
import check from "./shirt.png"
import blued from "./blue-jean.png"

export default function Main(){
    const[initialNumber , setInitialNumber] = useState (1)
    function addition(){
        setInitialNumber (initialNumber + 1)
    }
    
    function subtraction(){
        setInitialNumber (initialNumber - 1)
    }
    return(
        <div className="main-wrapper">
            <div className="wrapper1">
              <div className="cart1">
                  <img src={first} width={154} height={154}/>
                  <div className="item">
                      <p id="dol"><b>Gradient Graphic T-shirt</b></p>
                      <p id="large">Size: Large</p>
                      <p id="large">Color: White</p>
                      <p id="dol">$145</p>
                  </div>
  
                  <div id="bin">
                      <img src={bin} width={24}/>
                      <div id="click">
                       <p id="click1" onClick={addition}>+</p>
                       <p id="click1">{initialNumber}</p>
                       <p id="click1" onClick={subtraction}>-</p>
                    </div> 
                  </div>
  
                 

                </div>
                <hr/>

                <div className="cart1">
                   
                   <img src={check} width={154} height={154}/>
                   <div className="item">
                       <p id="dol"><b>Gradient Graphic T-shirt</b></p>
                       <p id="large">Size: Large</p>
                       <p id="large">Color: White</p>
                       <p id="dol">$145</p>
                   </div>
   
                   <div id="bin">
                       <img src={bin} width={24}/>
                       <div className="click">
                        <p className="click1" onClick={addition}>+</p>
                        <p className="click1">{initialNumber}</p>
                        <p className="click1" onClick={subtraction}>-</p>
                     </div> 
                   </div>
                    
               </div> 
               <hr/> 
   
               <div className="cart1">
                      
                   <img src={blued} width={154} height={154}/>
                   <div className="item">
                       <p id="dol"><b>Gradient Graphic T-shirt</b></p>
                       <p id="large">Size: Large</p>
                       <p id="large">Color: White</p>
                       <p id="dol">$145</p>
                   </div>
   
                   <div id="bin">
                       <img src={bin} width={24}/>
                       <div id="click">
                        <p id="click1" onClick={addition}>+</p>
                        <p id="click1">{initialNumber}</p>
                        <p id="click1" onClick={subtraction}>-</p>
                     </div> 
                   </div>
                    
               </div> 
            
            </div>  

              

            

            <div>
                <h3 id="order"><b>Order Summary</b></h3>
                <div className="sub">
                    <div className="sub1">
                        <p id="grey">Subtotal <b id="amt">$565</b></p>
                        <p id="grey">Discount (-20%)  <b id="amt1">-$113</b></p>
                        <p id="grey">Delivery Fee <b id="amt2">$15</b></p>
                        <hr/>
                        <p>Total  <b id="amt3">$567</b></p>
                       <div className="add">
                         <p id="add1">Add promo code</p>
                         <p>Apply</p>
                       </div>
                        <p id="add2">Go to Checkout</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}