import { Fab, Grid2 as Grid, Paper } from "@mui/material";
import PersonalInfo from "./personal-info";
import WorkDetails from "./work-details";
import { DownloadIcon } from "../../common";

function Layout() {
  const personInfoBgColor = "var(--t2-color1);";

  return (
    <Paper
      sx={{
        height: "calc(100vh - 10px)",
        marginX: { lg: "96px", xs: "8px", md: "36px", sm: "8px" },
        marginBottom: "32px",
        overflowY: "auto !important",
        position: "relative",
      }}
      className="scroll-custom"
      id="main-container"
    >
      <Grid container spacing={0}>
        <Grid
          sx={{
            background: personInfoBgColor,
          }}
          size={{ xs: 12, sm: 12, md: 4, lg: 3 }}
        >
          <PersonalInfo />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 8, lg: 9 }}>
          <WorkDetails />
        </Grid>
      </Grid>
      <form method="get" action="./docs/ajit-kamble-cv.pdf">
        <Fab sx={{position:"absolute", top: 0, right: 0, marginTop:"8px", marginRight:"8px"}} type="submit" color="success" size="small">
          <DownloadIcon />
        </Fab>
      </form>
    </Paper>
  );
}

export default Layout;
