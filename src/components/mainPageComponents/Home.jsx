import FlightSchedule from "../flightComponent/FlightSchedule";
import Navigation from "./Navigation";
import "./home.css"

const Home = () => {
     return (
          <div className="home">
           <Navigation/>
           <FlightSchedule/>    
          </div>
     );
};

export default Home;