import "./Header.css"
import logo from "./search.png"
import cart from "./cart.png"
import contact from "./contact.png"
import { Link } from "react-router-dom"
export default function Header(){
    return(
       <div>
          <div className="nav">
            <a id="shop"><Link><b>SHOP.CO</b></Link></a>
            <Link to="/">Home </Link>
            <Link to="/products">Products</Link>
            <Link to="/category">Category</Link>
            <Link to="/cart">Cart</Link>
           <div className="search">
            <img src= {logo} width={20}/>
            <input placeholder="Search for product..." />
            </div>  
           <div id="icon">
            <img className="logo" src= {logo} width={20}/>
            <img src= {cart}/>
            <img src= {contact}/>
           </div>
          </div>
       </div>
    );
}