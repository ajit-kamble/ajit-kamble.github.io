import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
  Tab,
} from "@mui/material";
import { EngineeringIcon } from "../../../common";
import WorkDetails from "./work-details";
import workData from "./work-details/data";
import { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";

function Work() {
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [animateClass, setAnimateClass] = useState("");
  const handleEnter = () => {
    setTimeout(() => {
      setAnimateClass("animate__animated animate__flip");
    }, 100);
  };
  const handleClose = () => {
    setTimeout(() => {
      setAnimateClass("");
    }, 1000);
  };

  return (
    <Card id="work" elevation={0}>
      <CardHeader
        sx={{ background: "var(--header-color)" }}
        avatar={
          <Avatar className={animateClass} aria-label="recipe">
            <EngineeringIcon />
          </Avatar>
        }
        title={
          <Typography variant="button">Professional Experience</Typography>
        }
        subheader=""
        onMouseEnter={handleEnter}
        onMouseLeave={handleClose}
      />
      <CardContent sx={{ paddingBottom: "4px !important" }}>
        <TabContext value={value}>
          <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
            <TabList
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              value={value}
              onChange={handleChange}
              centered
            >
              {workData.map((work, index) => (
                <Tab
                  label={`${work.sequence}. ${work.title}`}
                  value={index + 1}
                />
              ))}
            </TabList>
          </Box>
          {workData.map((work, index) => (
            <TabPanel sx={{ padding: 0 }} value={index + 1}>
              <WorkDetails work={work} />
            </TabPanel>
          ))}
        </TabContext>
      </CardContent>
    </Card>
  );
}

export default Work;
