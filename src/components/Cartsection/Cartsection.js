import "./Cartsection.css"
import polo from "./polo.png";
import blue from "./blue-jean.png";
import polo2 from "./polo2.png";
import shirt from "./shirt.png"
import shirt1 from "./shirt1.png"
import polo3 from "./polo3.png"
import jean from "./jeans.png"
import trouser from "./trouser.png"
import rate from "./rate4.png"
import rate2 from "./rate3.png"
export default function Cartsection(){
    return(
        <div>
           <h2 className="cart">NEW ARRIVALS</h2>
           <div className="clothes">
              <div>
                <img src= {polo}/>
                <div className="dress">
                <p>T-SHIRT WITH TAPE DETAILS</p>
                <img src={rate}/>
                <p>$120</p>
                </div>
              </div>

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
           </div>

           <p className="view">View All</p>
           <hr id="line"/>

           <div className="page">
           <h2 className="cart">TOP SELLING</h2>
           <div className="clothes1">
              <div>
                <img src= {shirt1}/>
                <div className="dress">
                   <p>VERTICAL STRIPED SHIRT</p>
                   <img src={rate}/>
                   <p>$120</p>
                </div>
              </div>

              <div>
                <img src= {polo3}/>
                <div className="dress">
                <p>COURAGE GRAPHIC T-SHIRT</p>
                <img src={rate2}/>
                <p>$240 <del>$269</del></p>
                </div>
              </div>

              <div>
                <img src= {jean}/>
                <div className="dress">
                <p>LOOSE FIT BERMUDA SHORTS</p>
                <img src={rate}/>
                <p>$180</p>
                </div>
              </div>

              <div>
                <img src= {trouser}/>
                <div className="dress">
                <p>FADED SKINNY JEANS</p>
                <img src={rate}/>
                <p>$130 <del>$160</del></p>
                </div>
               </div>
           </div>
           <p className="view">View All</p>
           </div>
        </div>
    );
};