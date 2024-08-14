
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import "./navigation.css"
import { Box } from "@mui/material";
import { TabList, TabPanel } from "@mui/lab";
  import { MdAirplaneTicket } from "react-icons/md";
  import { GiCommercialAirplane } from "react-icons/gi";
  import { MdOutlineMapsHomeWork } from "react-icons/md";
  import { TbWorldSearch } from "react-icons/tb";
const Navigation = () => {   
 const [value, setValue] = React.useState("1");

 const handleChange = (event, newValue) => {
   setValue(newValue);
 };
     return (

         <TabContext value={value} className="main_items">
           <Box>
             <TabList
               className="tabLIst"
               onChange={handleChange}

               sx={{
                 "& .MuiTabs-indicator": {
                   display: "none",
                 },
               }}
             >
               <Tab
                 value="1"
                 icon={<GiCommercialAirplane className="icon" />}
                 iconPosition="start"
                 label="FLIGHT"
               />
               <Tab
                 value="2"
                 icon={<MdOutlineMapsHomeWork className="icon" />}
                 iconPosition="start"
                 label="HOTEL"
               />

               <Tab
                 value="3"
                 icon={<TbWorldSearch className="icon" />}
                 iconPosition="start"
                 label="TOUR"
               />
               <Tab
                 value="4"
                 icon={<MdAirplaneTicket className="icon" />}
                 iconPosition="start"
                 label="VISA"
               />
             </TabList>
           </Box>
           <Box sx={{  color: "red" }}>
             <TabPanel value="1">Item One</TabPanel>
             <TabPanel value="2">Item Two</TabPanel>
             <TabPanel value="3">Item Three</TabPanel>
             <TabPanel value="4">Item Three</TabPanel>
           </Box>
         </TabContext>

     );
};

export default Navigation;