import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { AccountCircleIcon } from "../common";
import { useState } from "react";

function Introduction() {
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
    <Card id="introduction" elevation={0}>
      <CardHeader
        sx={{ background: "var(--header-color)" }}
        avatar={
          <Avatar className={animateClass} aria-label="recipe">
            <AccountCircleIcon />
          </Avatar>
        }
        title={<Typography variant="button">Introduction</Typography>}
        subheader="Few words about me"
        onMouseEnter={handleEnter}
        onMouseLeave={handleClose}
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          10+ years experienced Full stack .Net developer with hands on
          experience of designing, developing, and maintaining web as well as
          desktop applications. Possesses diverse experience of creating
          multiple highly scalable applications using different tech stacks.
          Adept at understanding the requirements of the clients and delivering
          projects accordingly. Demonstrates the capability of maintaining code
          by fixing bugs as well as conducting end to end testing. Highly
          skilled at collaborating with team members to ship beautiful products
          within deadlines.
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Introduction;
