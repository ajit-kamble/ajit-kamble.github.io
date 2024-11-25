import { Grid2 as Grid, IconButton } from "@mui/material";
import Title from "./title";
import Profile from "./profile";
import KeySkills from "./key-skills";
import WorkExperience from "./work-experience";
import { isMobile } from "react-device-detect";
import { useState } from "react";
import {
  KeyboardDoubleArrowDownIcon,
  KeyboardDoubleArrowUpIcon,
} from "../../../common";

function WorkDetails() {
  const [show, setShow] = useState(!isMobile);
  const showProps = show
    ? { className: "animate__animated animate__fadeInDown" }
    : { display: "none", className: "animate__animated animate__fadeInDown" };

  return (
    <Grid container spacing={0} sx={{ width: "100%", m: 0, p: 0 }}>
      <Grid size={12}>
        <Title />
      </Grid>
      <Grid size={12}>
        <Profile />
      </Grid>
      <Grid size={12} {...showProps}>
        <KeySkills />
      </Grid>
      <Grid size={12} {...showProps}>
        <WorkExperience />
      </Grid>
      {isMobile && (
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

export default WorkDetails;
