import { Box, Divider, Typography } from "@mui/material";

function Languages() {
  return (
    <Box sx={{ color: "white", paddingX: "16px" }}>
      <Typography fontSize="18px" variant="button">
        Languages
      </Typography>
      <Divider
        sx={{
          background: "white",
          height: "2px",
          border: "1px solid white",
          borderRadius: "4px",
        }}
      />
      <Box sx={{ paddingLeft: "16px", paddingY: "8px" }}>
        <ul style={{ color: "white", paddingLeft: "16px" }}>
          <li>English</li>
          <li>Marathi</li>
          <li>Hindi</li>
        </ul>
      </Box>
    </Box>
  );
}

export default Languages;
