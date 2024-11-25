import { Grid2 as Grid, Paper } from "@mui/material";
import PersonalInfo from "./personal-info";
import WorkDetails from "./work-details";

function Layout() {
  const personInfoBgColor = "var(--t2-color1);";

  return (
    <Paper
      sx={{
        height: "calc(100vh - 10px)",
        marginX: { lg: "96px", xs: "8px", md: "36px", sm: "8px" },
        overflowY: "auto !important",
      }}
      className="scroll-custom"
      id="main-container"
    >
      <Grid container spacing={0}>
        <Grid
          sx={{ background: personInfoBgColor, minHeight: "100vh" }}
          size={{ xs: 12, sm: 3, md: 3, lg: 3 }}
        >
          <PersonalInfo />
        </Grid>
        <Grid sx={{ background: "" }} size={{ xs: 12, sm: 3, md: 3, lg: 9 }}>
          <WorkDetails />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Layout;
