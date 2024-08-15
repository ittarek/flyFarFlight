import { CiLocationOn } from "react-icons/ci";
import { MdOutlineCalendarMonth } from "react-icons/md";
import * as React from "react";
import "../mainPageComponents/flightWay/allWayFlight.css";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import DateFigure from "./DateFigure";


const FlightWayShared = ({
  location,
  title,
  handleLocationChange,
  flightSecImg,
  flightFirstImg, from, to
}) => {
  return (
    <div className="FlightWayShared">
      {/* from */}
      <div className="fromFlight">
        <div className="flightName">
          <p>{from}</p>
          <h1>{location}</h1>
        </div>
        <div className="fromSelection">
          {/* airport selection */}
          <div className="airportSelection">
            {" "}
            <CiLocationOn className="FlightWaySharedIcon" />
            <FormControl
              sx={{
                "& .MuiInput-underline:before": {
                  borderBottom: "none",
                },
                "& .MuiInput-underline:after": {
                  borderBottom: "none",
                },
                "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                  borderBottom: "none",
                },
                "& .MuiNativeSelect-icon": {
                  display: "none",
                },
              }}
            >
              <NativeSelect
                onChange={handleLocationChange}
                disableUnderline
                sx={{
                  "& .MuiNativeSelect-root:before": {
                    borderBottom: "none",
                  },
                  "& .MuiNativeSelect-root:after": {
                    borderBottom: "none",
                  },
                  "& .MuiNativeSelect-root:hover": {
                    borderBottom: "none",
                  },
                  "& .MuiNativeSelect-icon": {
                    display: "none",
                  },
                }}
              >
                <option value="DAC" name="Hazrat Shahjalal Intl Airport DAC">
                  {" "}
                  Dhaka, BangladeshHazrat Shahjalal Intl Airport DAC
                </option>

                <option value="CBX" name="Cox's Bazar Airport CXB">
                  Cox's Bazar,Bangladesh Cox's Bazar Airport CXB
                </option>
                <option value="JSR">
                  Jashore,Bangladesh Jashore Airport JSR
                </option>
                <option value="BZL">
                  Barishal,Bangladesh Barishal Airport BZL
                </option>
                <option value="DXB">
                  Dubai,UNITED ARAB EMIRATES Dubai Intl Airport DXB
                </option>
                <option value="RJH">
                  Rajshahi,Bangladesh Shah Makhdum Airport RJH
                </option>
                <option value="SPD">
                  Saidpur,Bangladesh Saidpur Airport SPD
                </option>
              </NativeSelect>
            </FormControl>
          </div>

          {/* date selection */}
          <div className="dateSelection">
            <MdOutlineCalendarMonth className="FlightWaySharedIcon" />
            <div>
              <DateFigure />
            </div>
          </div>
        </div>
      </div>
      {/* image */}
      <div className="flightIcon">
        {flightFirstImg}
        <img src={flightSecImg} alt="" />
      </div>
      {/* to */}
      <div className="fromFlight">
        <div className="flightName">
          <p>{to}</p>
          <h1>{location}</h1>
        </div>
        <div className="fromSelection">
          {/* airport selection */}
          <div className="airportSelection">
            {" "}
            <CiLocationOn className="FlightWaySharedIcon" />
            <FormControl
              sx={{
                "& .MuiInput-underline:before": {
                  borderBottom: "none",
                },
                "& .MuiInput-underline:after": {
                  borderBottom: "none",
                },
                "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                  borderBottom: "none",
                },
                "& .MuiNativeSelect-icon": {
                  display: "none",
                },
              }}
            >
              <NativeSelect
                onChange={handleLocationChange}
                disableUnderline
                sx={{
                  "& .MuiNativeSelect-root:before": {
                    borderBottom: "none",
                  },
                  "& .MuiNativeSelect-root:after": {
                    borderBottom: "none",
                  },
                  "& .MuiNativeSelect-root:hover": {
                    borderBottom: "none",
                  },
                  "& .MuiNativeSelect-icon": {
                    display: "none",
                  },
                }}
              >
                <option value="DAC" name="Hazrat Shahjalal Intl Airport DAC">
                  {" "}
                  Dhaka, BangladeshHazrat Shahjalal Intl Airport DAC
                </option>

                <option value="CBX" name="Cox's Bazar Airport CXB">
                  Cox's Bazar,Bangladesh Cox's Bazar Airport CXB
                </option>
                <option value="JSR">
                  Jashore,Bangladesh Jashore Airport JSR
                </option>
                <option value="BZL">
                  Barishal,Bangladesh Barishal Airport BZL
                </option>
                <option value="DXB">
                  Dubai,UNITED ARAB EMIRATES Dubai Intl Airport DXB
                </option>
                <option value="RJH">
                  Rajshahi,Bangladesh Shah Makhdum Airport RJH
                </option>
                <option value="SPD">
                  Saidpur,Bangladesh Saidpur Airport SPD
                </option>
              </NativeSelect>
            </FormControl>
          </div>

          {/* date selection */}
          <div className="dateSelection">
            <MdOutlineCalendarMonth className="FlightWaySharedIcon" />
            <div>
              <DateFigure />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightWayShared;
