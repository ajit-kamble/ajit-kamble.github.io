import { Grid2 as Grid } from "@mui/material";
import Title from "./title";
import Profile from "./profile";
import KeySkills from "./key-skills";
import WorkExperience from "./work-experience";

function WorkDetails() {
  return (
    <Grid container spacing={0} sx={{ width: "100%", m: 0, p: 0 }}>
      <Grid size={{ md: 12, lg: 12, xs: 12, sm: 12 }}>
        <Title />
      </Grid>
      <Grid size={{ md: 12, lg: 12, xs: 12, sm: 12 }}>
        <Profile />
      </Grid>
      <Grid size={{ md: 12, lg: 12, xs: 12, sm: 12 }}>
        <KeySkills />
      </Grid>
      <Grid size={{ md: 12, lg: 12, xs: 12, sm: 12 }}>
        <WorkExperience />
      </Grid>
    </Grid>
  );
}

export default WorkDetails;
