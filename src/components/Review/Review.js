import "./Review.css"
import star from "./star.png"
import star4 from "./star4.png"
import tick from "./tick.png"
import a from "./a.png"
import b from "./b.png"
import c from "./c.png"
import d from "./d.png"
import rate from "./rate4.png"
import rate2 from "./rate3.png"

export default function Reviews(){
    return(
        <div>
           <div className="review1">
               <a href="">Product Details</a>
               <a href="">Ratings & Reviews</a>
               <a href="">FAQs</a>
           </div>
           <div className="all">
               <p><b>All Reviews</b>(451)</p>
              <div className="latest">
               <p id="size1">Latest</p>
               <p id="size2">Write a Review</p>
              </div>
           </div>
           <div className="review3">
               <div className="review2">
                   <div className="body">
                    <img src={star} />
                    <p><b>...</b></p>
                   </div>
                  <div className="name">
                    <p><b>Samantha D.</b></p>
                    <img src={tick}/>
                  </div>
                  <p>"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p><br/>
                  <p>Posted on August 14, 2023</p>
               </div>
               <div className="review2">
                   <div className="body">
                    <img src={star} />
                    <p><b>...</b></p>
                   </div>
                  <div className="name">
                    <p><b>Alex M.</b></p>
                    <img src={tick}/>
                  </div>
                  <p>"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."</p><br/>
                  <p>Posted on August 15, 2023</p>
               </div>
           </div>
           <div className="review3">
               <div className="review2">
                   <div className="body">
                    <img src={star} />
                    <p><b>...</b></p>
                   </div>
                  <div className="name">
                    <p><b>Ethan R.</b></p>
                    <img src={tick}/>
                  </div>
                  <p>"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."</p><br/>
                  <p>Posted on August 16, 2023</p>
               </div>
               <div className="review2">
                   <div className="body">
                    <img src={star} />
                    <p><b>...</b></p>
                   </div>
                  <div className="name">
                    <p><b>Olivia P.</b></p>
                    <img src={tick}/>
                  </div>
                  <p>"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."</p><br/>
                  <p>Posted on August 17, 2023</p>
               </div>
           </div>
           <div className="review3">
             <div className="review2">
                 <div className="body">
                  <img src={star} />
                  <p><b>...</b></p>
                 </div>
                <div className="name">
                  <p><b>Liam K.</b></p>
                  <img src={tick}/>
                </div>
                <p>"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."</p><br/>
                <p>Posted on August 18, 2023</p>
             </div>
             <div className="review2">
                 <div className="body">
                  <img src={star} />
                  <p><b>...</b></p>
                 </div>
                <div className="name">
                  <p><b>Ava H.</b></p>
                  <img src={tick}/>
                </div>
                <p>"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."</p><br/>
                <p>Posted on August 19, 2023</p>
             </div>
           </div>
             <p className="view">Load More Reviews</p>

             <div className="page">
           <h2 className="cart">YOU MIGHT ALSO LIKE</h2>
           <div className="clothes 1">
              <div>
                <img src= {a}/>
                <div className="dress">
                   <p>VERTICAL STRIPED SHIRT</p>
                   <img src={rate}/>
                   <p>$120</p>
                </div>
              </div>

              <div>
                <img src= {b}/>
                <div className="dress">
                <p>COURAGE GRAPHIC T-SHIRT</p>
                <img src={rate2}/>
                <p>$240 <del>$269</del></p>
                </div>
              </div>

              <div>
                <img src= {c}/>
                <div className="dress">
                <p>LOOSE FIT BERMUDA SHORTS</p>
                <img src={rate}/>
                <p>$180</p>
                </div>
              </div>

              <div>
                <img src= {d}/>
                <div className="dress">
                <p>FADED SKINNY JEANS</p>
                <img src={rate}/>
                <p>$130 <del>$160</del></p>
                </div>
               </div>
           </div>
         </div>
        </div>
    )
}