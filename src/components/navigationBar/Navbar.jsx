import { Button } from "@mui/material";
import logo from "../../assets/image/logo.webp";
import "./navbar.css"
const Navbar = () => {
     return (
       <div className="nav">
         <img src={logo} alt="logo" />

         <div>
           <Button variant="contained">login / sign up</Button>
   
         </div>
       </div>
     );
};

export default Navbar;