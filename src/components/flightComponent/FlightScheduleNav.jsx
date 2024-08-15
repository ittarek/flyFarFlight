import * as React from "react";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import "./flightSchedule.css";
import "../mainPageComponents/flightWay/allWayFlight.css";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import FlightWayShared from "../sharedComponent/FlightWayShared";
import flightSec from "../../assets/image/airplane-mode-svgrepo-com.png";
import FlightSearch from "../mainPageComponents/FlightSearch";

const flightFirstImg = (
  <>
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m 6.496094 1 c -0.792969 0 -0.78125 0.035156 -0.53125 1.03125 l 1.625 4.96875 h -4.5 l -1.21875 -1.78125 c -0.140625 -0.207031 -0.121094 -0.21875 -0.34375 -0.21875 h -0.21875 c -0.425782 0 -0.28125 0.4375 -0.28125 0.4375 l 0.28125 2.5625 l -0.28125 2.5625 s -0.140625 0.4375 0.25 0.4375 h 0.25 c 0.210937 0 0.203125 -0.007812 0.34375 -0.21875 l 1.21875 -1.78125 h 4.5 l -1.625 4.9375 c -0.261719 1.046875 -0.265625 1.0625 0.53125 1.0625 c 0.433594 0 0.433594 -0.011719 0.71875 -0.5 l 3.6875 -5.5 h 3.09375 c 0.554687 0 1 -0.445312 1 -1 s -0.445313 -1 -1 -1 h -3.09375 l -3.6875 -5.5 c -0.265625 -0.457031 -0.28125 -0.5 -0.65625 -0.5 z m 0 0"
        fill="var(--secondary_color)"
      />
    </svg>
  </>
);

const FlightScheduleNav = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [locationName, setLocationName] = React.useState("DAC");
  const [airportName, setAirportName] = React.useState("");

  const handleLocationChange = event => {
    setLocationName(event.target.value);
    setAirportName(event.target.name);
  };

  return (
    <div className="flightScheduleNav">
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          sx={{
            "& .MuiTabs-indicator": {
              display: "none",
            },
          }}
        >
          <Tab
            label={
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="Round Way"
                checked={value === "1"}
              />
            }
            value="1"
          />
          <Tab
            label={
              <FormControlLabel
                value="2"
                control={<Radio />}
                label="One Way"
                checked={value === "2"}
              />
            }
            value="2"
          />
          <Tab
            label={
              <FormControlLabel
                value="3"
                control={<Radio />}
                label="Multi Way"
                checked={value === "3"}
              />
            }
            value="3"
          />
        </TabList>
        <TabPanel value="1">
          {/* Round Way */}
          <div className="mainContent">
            <div className="smooth-tab-panel">
              <FlightWayShared
                handleLocationChange={handleLocationChange}
                from="From"
                to="To"
                location={locationName}
                flightFirstImg={flightFirstImg}
                flightSecImg={flightSec}
              />
            </div>
            <FlightSearch />
          </div>
        </TabPanel>
        <TabPanel value="2">
          {/* one way */}
          <div className="mainContent">
            <div className="smooth-tab-panel">
              <FlightWayShared
                handleLocationChange={handleLocationChange}
                from="From"
                to="To"
                location={locationName}
                flightFirstImg={flightFirstImg}
              />
            </div>
            <FlightSearch />
          </div>
        </TabPanel>
        <TabPanel value="3">
          {/* multi way */}
          <div className="mainContent">
            <div className="smooth-tab-panel ">
              <div className="multiWay">
                <FlightWayShared
                  handleLocationChange={handleLocationChange}
                  from="From"
                  to="To"
                  location={locationName}
                  flightFirstImg={flightFirstImg}
                />
              </div>
              <FlightWayShared
                handleLocationChange={handleLocationChange}
                from="From"
                to="To"
                location={locationName}
                flightFirstImg={flightFirstImg}
              />
            </div>
            <FlightSearch />
          </div>
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default FlightScheduleNav;
