import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Grid2 as Grid,
} from "@mui/material";
import PersonDetails from "../personal-details";
import Skills from "../skills";
import {
  AccountCircleIcon,
  EmojiEventsIcon,
  EngineeringIcon,
  MilitaryTechIcon,
  SchoolIcon,
} from "../common";
import { useState } from "react";

function Layout() {
  const [value, setValue] = useState(0);
  return (
    <Box className="scroll-custom" sx={{ overflowY: "auto", height: "calc(100vh - 68px)" }}>
      <Grid container>
        <Grid size={{ xs: 12, sm: 5, md: 4 }}>
          <PersonDetails />
        </Grid>
        <Grid size={{ xs: 12, sm: 7, md: 8 }}>
          <Skills />
        </Grid>
      </Grid>
      <Box
        sx={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          left: 0,
          zIndex: "20000",
        }}
      >
        <BottomNavigation
          sx={{ background: "#f0efef" }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Intro"
            href="#introduction"
            icon={<AccountCircleIcon />}
          />
          <BottomNavigationAction
            label="Skills"
            href="#key-skills"
            icon={<EmojiEventsIcon />}
          />
          <BottomNavigationAction
            label="Education"
            href="#education"
            icon={<SchoolIcon />}
          />
          <BottomNavigationAction
            label="Tech"
            href="#tech-skills"
            icon={<MilitaryTechIcon />}
          />
          <BottomNavigationAction
            label="Work"
            href="#work"
            icon={<EngineeringIcon />}
          />
        </BottomNavigation>
      </Box>
    </Box>
  );
}

export default Layout;
