
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import PhoneMissedIcon from "@mui/icons-material/PhoneMissed";
import { Box } from "@mui/material";
import { TabList, TabPanel } from "@mui/lab";
  
const Navigation = () => {   
 const [value, setValue] = React.useState("1");

 const handleChange = (event, newValue) => {
   setValue(newValue);
 };
     return (
       <Box sx={{ width: "100%", typography: "body1" }}>
         <TabContext value={value}>
           <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
             <TabList onChange={handleChange} aria-label="lab API tabs example">
               <Tab
                 value="1"
                 icon={<PhoneMissedIcon />}
                 iconPosition="start"
                 label="start"
               />
               <Tab
                 value="2"
                 icon={<PhoneMissedIcon />}
                 iconPosition="start"
                 label="start"
               />

               <Tab
                 value="3"
                 icon={<PhoneMissedIcon />}
                 iconPosition="start"
                 label="start"
               />
             </TabList>
           </Box>
           <Box sx={{ borderBottom: 1, borderColor: "divider", color:"red" }}>
             <TabPanel value="1">Item One</TabPanel>
             <TabPanel value="2">Item Two</TabPanel>
             <TabPanel value="3">Item Three</TabPanel>
           </Box>
         </TabContext>
       </Box>
     );
};

export default Navigation;