import { Avatar, Box, Grid2 as Grid } from "@mui/material";
import Contact from "./contact";
import Education from "./education";
import TechSkills from "./tech-skills";
import Languages from "./languages";

function PersonalInfo() {
  return (
    <Grid container spacing={0} sx={{ width: "100%", m: 0, p: 0 }}>
      <Grid size={{ md: 12, lg: 12, xs: 12, sm: 12 }}>
        <Box sx={{ textAlign: "-webkit-center", padding: "16px" }}>
          <Avatar
            sx={{
              width: "220px",
              height: "220px",
              border: "8px solid white;",
            }}
            src="./headshot-3.jpg"
          ></Avatar>
        </Box>
      </Grid>
      <Grid size={{ md: 12, lg: 12, xs: 12, sm: 12 }}>
        <Contact />
      </Grid>
      <Grid size={{ md: 12, lg: 12, xs: 12, sm: 12 }}>
        <Education />
      </Grid>
      <Grid size={{ md: 12, lg: 12, xs: 12, sm: 12 }}>
        <TechSkills />
      </Grid>
      <Grid size={{ md: 12, lg: 12, xs: 12, sm: 12 }}>
        <Languages />
      </Grid>
    </Grid>
  );
}

export default PersonalInfo;
