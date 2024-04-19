import "./Testimony.css"
import rate from "./rate.png"
import tick from "./tick.png"
export default function Testimony(){
    return(
        <div>
            <h1>OUR HAPPY CUSTOMERS</h1>
         <div className="coustomers-review">
               <div className="review">
                  <img src ={rate}/>
                   <div className="name">
                    <p>Sarah M.</p>
                    <img src ={tick}/>
                   </div>
                  <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
              </div>
  
              <div className="review">
                  <img src ={rate}/>
                   <div className="name">
                    <p>Alex K.</p>
                    <img src ={tick}/>
                   </div>
                  <p>"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
              </div>
  
              <div className="review">
                  <img src ={rate}/>
                   <div className="name">
                    <p>James L.</p>
                    <img src ={tick}/>
                   </div>
                  <p>"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
              </div>
          </div>
        </div>
    )
}