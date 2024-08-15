import { Button } from "@mui/material";
import "./flightWay/allWayFlight.css";

const FlightSearch = () => {
    
  return (
    <div className="flightSearch">
      <div>
        <form
          action="
  "
        >
          <div className="passenger">
            <select name="" id="">
              <option value="">1 Adult</option>
            </select>
            <select name="" id="">
              <option value="">0 Child</option>
            </select>
            <select name="" id="">
              <option value="">1 Infant</option>
            </select>
          </div>
          <div>
            <select name="" id="" className="economy">
              <option value="Economy">Economy</option>
              <option value="Economy">Economy</option>
              <option value="Economy">Economy</option>
              <option value="Economy">Economy</option>
            </select>
          </div>
        </form>
      </div>
      <div>
        <Button>Search For Flight</Button>
        <Button>Add City</Button>
      </div>
    </div>
  );
};

export default FlightSearch;
