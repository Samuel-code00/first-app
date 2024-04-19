import "./Product.css"
import b from "./b.png"
import c from "./c.png"
import d from "./d.png"
import rate from "./rate3.png"
import rate2 from "./rate4.png"
import price from "./price.png"
// second image page
import shirt1 from "./shirt1.png"
import polo3 from "./polo3.png"
import jean from "./jeans.png"
// third image
import blue from "./blue-jean.png"
import polo2 from "./polo2.png"
import shirt from "./shirt.png"


export default function Product(){
  return(
    <div className="wrap">
      <div className="filter">
       <div>
         <h3>Filters</h3> 
         <hr/>
         <p>T-shirts</p>
         <p>Shorts</p>
         <p>Shirt</p>
         <p>Hoodie</p>
         <p>Jeans</p>
         <hr/>
         <h3>Price</h3>
         <img src={price} width={180}/>
         <hr/>
         <h3>Colors</h3>
         <div className="joe">
          <p id="col1"></p>
          <p id="col2"></p>
          <p id="col3"></p>
          <p id="col4"></p>
          <p id="col5"></p>
          <p id="col6"></p>
          <p id="col7"></p>
          <p id="col8"></p>
          <p id="col9"></p>
          <p id="col0"></p>
          <hr/>
         </div>

          <div className="two">
          <p id="size">XX-Small</p>
          <p id="size">X-Small</p>
          <p id="size">Small</p>
          <p id="size">Medium</p>
          <p id="size">Large</p>
          <p id="size">X-Large</p>
          <p id="size">XX-Large</p>
          <p id="size">3X-Large</p>
          <p id="size">4X-Large</p>
          <hr/>
          </div>
       </div>

       <div className="wrap1">
       <div className="clothes2">
         <div>
            <img src= {b}/>
            <div className="dress">
            <p>T-SHIRT WITH TAPE DETAILS</p>
            <img src={rate} />
            <p>$120</p>
            </div>
         </div>

         <div>
           <img src= {c}/>
            <div className="dress">
            <p>SKINNY FIT JEANS</p>
           <img src={rate2}/>
           <p>$240 <del>$269</del></p>
            </div>
         </div>

          <div>
            <img src= {d}/>
            <div className="dress">
            <p>CHECKERED SHIRT</p>
            <img src={rate}/>
            <p>$180</p>
            </div>
          </div>

          {/* third image */}

          <div>
           <img src= {blue}/>
           <div className="dress">
           <p>SKINNY FIT JEANS</p>
           <img src={rate2}/>
           <p>$240 <del>$269</del></p>
           </div>
          </div>

          <div>
            <img src= {polo2}/>
            <div className="dress">
            <p>CHECKERED SHIRT</p>
            <img src={rate}/>
            <p>$180</p>
            </div>
          </div>

         <div>
           <img src= {shirt}/>
           <div className="dress">
           <p>SLEEVE STRIPED T-SHIRT</p>
           <img src={rate}/>
           <p>$130 <del>$160</del></p>
           </div>
         </div>

          {/* second image */}

          <div>
            <img src= {shirt1}/>
            <div className="dress">
            <p>T-SHIRT WITH TAPE DETAILS</p>
            <img src={rate}/>
            <p>$120</p>
            </div>
         </div>
        
         <div>
           <img src= {polo3}/>
           <div className="dress">
           <p>SKINNY FIT JEANS</p>
           <img src={rate2}/>
           <p>$240 <del>$269</del></p>
           </div>
         </div>
          
         <div>
           <img src= {jean}/>
           <div className="dress">
           <p>CHECKERED SHIRT</p>
           <img src={rate}/>
           <p>$180</p>
         </div>
         

        </div>

      </div>
         <hr/>

       <div className="next">
         <button id="btn"> Previous</button>
         <div className="space">
           <p>1</p>
           <p>2</p>
           <p>3</p>
           <p>...</p>
           <p>8</p>
           <p>9</p>
           <p>10</p>
         </div>
         <button id="btn">Next <i className="fa fa-arrow-left"></i></button>
       </div>
      </div>
     </div>

    </div>
  )
}