import {
  Grid2 as Grid,
  IconButton,
  Paper,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from "@mui/material";
import PersonalInfo from "./personal-info";
import WorkDetails from "./work-details";
import { DownloadIcon } from "../../common";
import { useRef } from "react";
import { pdfjs } from "react-pdf";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";

function Layout() {
  const personInfoBgColor = "var(--t2-color1);";
  const ref = useRef(null);

  pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`;

  const actions = [
    {
      icon: (
        <IconButton color="warning" type="submit">
          <DownloadIcon />
        </IconButton>
      ),
      name: "Download Resume",
    },
  ];

  if (process.env.REACT_APP_HIDE_CONNECT_ME !== "true") {
    actions.push({
      icon: (
        <IconButton color="warning">
          <ConnectWithoutContactIcon />
        </IconButton>
      ),
      name: "Contact Me",
    });
  }

  return (
    <Paper
      ref={ref}
      sx={(theme) => {
        console.log(theme);
        return {
          height: "calc(100vh - 10px)",
          marginX: { lg: "96px", xs: "2px", md: "36px", sm: "2px" },
          overflowY: "auto !important",
          position: "relative",
        };
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
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          icon={<SpeedDialIcon icon={<StarBorderPurple500Icon />} />}
          direction="down"
          sx={{
            transform: "translateZ(0px)",
            flexGrow: 1,
            position: "absolute",
            top: 8,
            right: 8,
          }}
          FabProps={{ size: "medium", color: "secondary" }}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              hidden={action.hidden}
            />
          ))}
        </SpeedDial>
      </form>
    </Paper>
  );
}

export default Layout;
