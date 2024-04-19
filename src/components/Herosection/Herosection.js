import "./Herosection.css"
import background from "./hero-page.png" 
import vector from "./Vector.png"
import versage from "./versage.png"
import zara from "./zara-logo.png"
import gucci from "./gucci-logo.png"
import prada from "./prada-logo.png"
import calvin from "./calvin-klein.png"

export default function Herosection(){
    return(
       <div style={{backgroundImage: `url(${background})`, height: '650px', backgroundSize: 'cover'}}>
          <div className="page">
             <div className="head1">
               <h2 className="head2">FIND CLOTHES <br/> THAT MATCHES <br/> YOUR STYLE</h2>
               {/* <img id="vector" src={vector} width={90} height={60}/> */}
               <p >Browse through our diverse range of meticulously crafted garments, designed <br/> to bring out your individuality and cater to your sense of style.</p>
              </div>
             <button>Shop Now</button>
             <div className="page2">
                <div>
                 <p><b>200+</b></p>
                 <p>International Brands</p> 
                </div>
                <hr/>
                <div>
                 <p><b>2,000+</b></p>
                 <p>High-Quality products</p>
                </div>
                <hr/>
                <div>
                 <p><b>30,000+</b></p>
                 <p>Happy Customers</p>
                </div>
             </div>
           </div>

           <div className="page3">
               <img src={versage}/>
               <img src={zara}/>
               <img src={gucci}/>
               <img src={prada}/>
               <img src={calvin}/>
           </div>
       </div>
    );
};