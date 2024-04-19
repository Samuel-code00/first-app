import "./Brand.css"
import image from "./image.png"
import casual from "./casual.png"
import formal from "./formal.png"
import party from "./party.png"
import gym from './gym.png'
export default function Brand(){
    return(
        <div className="brand">
            <h1 className="by">BROWSE BY DRESS STYLE</h1>
            <div className="grid-container">
               <div className="item1"><img id="simple" src={casual} width={400}/></div>
               <div className="item2"><img src={formal} width={665}/></div>
               <div className="item3"><img src={party} width={665}/></div>  
               <div className="item4"><img id="simple" src={gym} width={400}/></div>   
          </div>
            {/* <img src = {image}/> */}
            {/* <div className="head">
              <h1>BROWSE BY DRESS STYLE</h1>
             <div className="clothes">
                <img src={casual}/>
                <img src={formal}/>
             </div>
            </div> */}

        </div>
    )
}