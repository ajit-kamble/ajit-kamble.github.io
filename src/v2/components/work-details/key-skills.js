import { Box, Divider, Typography } from "@mui/material";
import { CustomChip } from "../../../common";

function KeySkills() {
  return (
    <Box sx={{ marginX: "32px", marginTop: "32px" }}>
      <Typography
        sx={{ fontWeight: "bold", fontSize: "18px" }}
        variant="button"
      >
        Key Skills
      </Typography>
      <Divider
        sx={{
          background: "black",
          height: "2px",
          border: "1px solid white",
          borderRadius: "4px",
        }}
      />
      <Box sx={{ marginY: "8px" }}>
        <CustomChip label="Web Applications" size="small" />
        <CustomChip label="Desktop Applications" size="small" />
        <CustomChip label="Mobile Applications" size="small" />
        <CustomChip label="Problem Solving" size="small" />
        <CustomChip label="Client Requirements" size="small" />
        <CustomChip label="End To End Testing" size="small" />
        <CustomChip label="Stable Codebase" size="small" />
        <CustomChip label="Highly Scalable Applications" size="small" />
        <CustomChip label="Process Optimization" size="small" />
        <CustomChip label="Tech Architecture" size="small" />
        <CustomChip label="Product Delivery" size="small" />
        <CustomChip label="UI/UX Development" size="small" />
        <CustomChip label="Performance Optimization" size="small" />
        <CustomChip label="Team Management" size="small" />
        <CustomChip label="Scrum" size="small" />
        <CustomChip label="Release Management" size="small" />
        <CustomChip label="Critical Thinking" size="small" />
        <CustomChip label="Team Work" size="small" />
      </Box>
    </Box>
  );
}

export default KeySkills;
