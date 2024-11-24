import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { CustomChip, EmojiEventsIcon } from "../common";
import { useState } from "react";

function KeySkills() {
  const [animateClass, setAnimateClass] = useState("");
  const handleEnter = () => {
    setTimeout(() => {
      setAnimateClass("animate__animated animate__flip");
    }, 100);
  };
  const handleClose = () => {
    setTimeout(() => {
      setAnimateClass("");
    }, 1000);
  };
  return (
    <Card id="key-skills" elevation={0}>
      <CardHeader
        sx={{ background: "var(--header-color)" }}
        avatar={
          <Avatar className={animateClass} aria-label="recipe">
            <EmojiEventsIcon />
          </Avatar>
        }
        title={<Typography variant="button">Key Skills</Typography>}
        subheader="Full Stack Developement | Associate Technical Manager | React Expert | C# Expert"
        onMouseEnter={handleEnter}
        onMouseLeave={handleClose}
      />
      <CardContent sx={{ paddingBottom: "4px !important" }}>
        <Box sx={{ textAlign: "center" }}>
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
      </CardContent>
    </Card>
  );
}

export default KeySkills;
