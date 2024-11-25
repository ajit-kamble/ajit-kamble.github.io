import { Box, Divider, Link, Typography } from "@mui/material";
import { CustomChip } from "../../../common";
import { isMobile } from "react-device-detect";

function Title() {
  return (
    <Box sx={{ marginX: "32px", marginY: "16px" }}>
      <Typography
        sx={{
          textTransform: "uppercase",
          fontWeight: "bold",
          color: "#545454",
        }}
        variant="h4"
      >
        Ajit Kamble
      </Typography>
      <Typography
        sx={{
          textTransform: "uppercase",
          fontWeight: "bold",
          color: "#545454",
        }}
        variant="h6"
      >
        Associate Technical Manager @{" "}
        <CustomChip
          label={
            <Link href="https://www.bridgenext.com/" target="_blank">
              Bridgenext
            </Link>
          }
          m={2}
        />
      </Typography>
      <Divider
        sx={{
          background: "black",
          height: "6px",
          border: "1px solid white",
          borderRadius: "4px",
          width: isMobile ? "90%" : "50%",
        }}
      />
      <Typography variant="button"></Typography>
    </Box>
  );
}

export default Title;
