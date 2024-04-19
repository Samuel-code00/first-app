import "./Footer.css"
import mail from "./mail.png"
import visa from "./visa.png"
import master from "./master.png"
import paypal from "./paypal.png"
import pay from "./pay.png"
import pay2 from "./G-pay.png"
import icon from"./1.png"
import icon1 from "./2.png"
import icon2 from "./3.png"
import icon3 from "./4.png"

export default function Footer(){
    return(
        <div className="last">
           <div className="last-page">
              <div className="foot">
                   <h1 className="foot1">STAY UPTO DATE ABOUT <br/>OUR LATEST OFFERS</h1>
              </div>    
        
             <div className="class">
                   <div className="search1">
                     <img src= {mail}/>
                     <input className="input1" placeholder="Enter your email address "/>
                   </div>
                   <div>
                      <a href="" className="link">Subscribe to Newsletter</a>
                  </div>
              </div>
           </div>

          <div className="footer">
              <div className="shop">
                  <h2>SHOP.CO</h2>
                  <p>We have clothes that suits your style and <br/> which you’re proud to wear. From <br/>women to men.</p>
                  <div className="media">
                    <img src={icon}/>
                    <img src={icon1}/>
                    <img src={icon2}/>
                    <img src={icon3}/>
                  </div>
              </div>

              <div className="footer1">
                   <p>COMPANY</p>
                   <a href="">About</a>
                   <a href="">Features</a>
                   <a href="">Works</a>
                   <a href="">Career</a>
              </div>

              <div className="footer1">
                   <p>HELP</p>
                   <a href="">Customer Support</a>
                   <a href="">Delivery Details</a>
                   <a href="">Terms & Conditions</a>
                   <a href="">Privacy Policy</a>
              </div>

              <div className="footer1">
                   <p>FAQ</p>
                   <a href="">Account</a>
                   <a href="">Manage Deliveries</a>
                   <a href="">Orders</a>
                   <a href="">Payments</a>
              </div>

              <div className="footer1">
                   <p>RESOURCES</p>
                   <a href="">Free eBooks</a>
                   <a href="">Development Tutorials</a>
                   <a href="">How to -Blog</a>
                   <a href="">Youtube Playlist</a>
              </div>
          </div>
              <hr id="line1"/>
              
          <div className="footer3">
                <p>Shop.co &copy; 2000-2023, All Rights Reserved</p>
                <div className="banks">
                    <img src={visa}/>
                    <img src={master}/>
                    <img src={paypal}/>
                    <img src={pay}/>
                    <img src={pay2}/>
                </div>
            </div>  
            
        </div>
    )
}