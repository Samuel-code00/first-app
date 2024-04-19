import Header from "../components/Header/Header"
import Herosection from "../components/Herosection/Herosection"
import Cartsection from "../components/Cartsection/Cartsection"
import Brand from "../components/Brand/Brand"
import Testimony from "../components/Testimony/Testimony"
import Footer from "../components/Footer/Footer"
export default function Homepage(){
    return(
        <div>
           <Header/>
           <Herosection/>
           <Cartsection/>
           <Brand/>
           <Testimony/>
           <Footer/>

        </div>
    )
}