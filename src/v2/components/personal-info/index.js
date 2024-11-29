import { Avatar, Box, Grid2 as Grid, IconButton } from "@mui/material";
import Contact from "./contact";
import Education from "./education";
import TechSkills from "./tech-skills";
import Languages from "./languages";
import { isIOS, isMobile, isTablet } from "react-device-detect";
import { useState } from "react";
import {
  KeyboardDoubleArrowDownIcon,
  KeyboardDoubleArrowUpIcon,
} from "../../../common";

function PersonalInfo() {
  const [show, setShow] = useState(!isMobile);
  const [isHovered, setIsHovered] = useState(false);
  const showProps =
    show || (isIOS && isTablet)
      ? { className: "animate__animated animate__fadeInDown" }
      : { display: "none" };

  return (
    <Grid container spacing={0} sx={{ width: "100%", m: 0, p: 0 }}>
      <Grid size={12}>
        <Box sx={{ textAlign: "-webkit-center", padding: "16px" }}>
          <Avatar
            sx={{
              width: "220px",
              height: "220px",
              border: `8px solid var(${isHovered?"--color4":"--color7"});`,
              transition: "transform 0.3s ease-in-out",
              transform: isHovered ? "scale(1.12)" : "scale(1)",
              cursor: "pointer",
            }}
            src="./headshot-3.jpg"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          ></Avatar>
        </Box>
      </Grid>
      <Grid size={12}>
        <Contact />
      </Grid>
      <Grid size={12} {...showProps}>
        <Education />
      </Grid>
      <Grid size={12} {...showProps}>
        <TechSkills />
      </Grid>
      <Grid size={12} {...showProps}>
        <Languages />
      </Grid>
      {isMobile && !(isIOS && isTablet) && (
        <Grid size={12} textAlign="center">
          <IconButton
            onClick={() => setShow(!show)}
            color="warning"
            size="large"
          >
            {show ? (
              <KeyboardDoubleArrowUpIcon />
            ) : (
              <KeyboardDoubleArrowDownIcon />
            )}
          </IconButton>
        </Grid>
      )}
    </Grid>
  );
}

export default PersonalInfo;
