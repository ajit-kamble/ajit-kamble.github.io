import { Box, Typography } from "@mui/material";
import AppV1 from "./v1/AppV1";
import AppV2 from "./v2/AppV2";

function VersionSwitch() {
  const template = process.env.REACT_APP_TEMPLATE;
  let App = null;
  switch (template) {
    case "1":
      App = <AppV1 />;
      break;
    case "2":
      App = <AppV2 />;
      break;
    default:
      App = (
        <Box m={8} width="100%" textAlign="center">
          <Typography fontWeight="bold" fontSize="25px" variant="overline">
            Template Not Configured
          </Typography>
        </Box>
      );
  }
  return App;
}

export default VersionSwitch;
