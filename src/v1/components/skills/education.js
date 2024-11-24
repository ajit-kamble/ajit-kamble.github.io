import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Grid2 as Grid,
} from "@mui/material";
import { CalendarMonthIcon, SchoolIcon, VerifiedIcon } from "../common";
import { useState } from "react";

function Education() {
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

  const [animateClassEdu, setAnimateClassEdu] = useState("");
  const handleEnterEdu = () => {
    setTimeout(() => {
      setAnimateClassEdu("animate__animated animate__flip");
    }, 100);
  };
  const handleCloseEdu = () => {
    setTimeout(() => {
      setAnimateClassEdu("");
    }, 1000);
  };

  return (
    <Card id="education" elevation={0}>
      <CardHeader
        sx={{ background: "var(--header-color)" }}
        avatar={
          <Avatar className={animateClass} aria-label="recipe">
            <SchoolIcon />
          </Avatar>
        }
        title={<Typography variant="button">Education</Typography>}
        subheader="It provided me with the foundational knowledge and skills necessary to excel in my field. Moreover, it instilled a passion for lifelong learning that continues to drive my professional growth."
        onMouseEnter={handleEnter}
        onMouseLeave={handleClose}
      />
      <CardContent
        sx={{ paddingBottom: "4px !important" }}
        onMouseEnter={handleEnterEdu}
        onMouseLeave={handleCloseEdu}
      >
        <Grid
          container
          spacing={0}
          sx={{
            padding: "8px",
            border: "2px dashed #f0efef",
            position: "relative",
          }}
        >
          <div
            class="ribbon ribbon-bottom"
          >
            Grade A
          </div>
          <Grid size={{ xs: 12, md: 6, sm: 6 }}>
            <Grid container spacing={1} alignItems="center">
              <Grid textAlign="right">
                <Avatar
                  className={animateClassEdu}
                  sx={{
                    width: { xs: 24, md: 32 },
                    height: { xs: 24, md: 32 },
                  }}
                  variant="rounded"
                >
                  <VerifiedIcon />
                </Avatar>
              </Grid>
              <Grid>
                <Typography fontWeight="bold">
                  Diploma In Advance Computing
                </Typography>
                <Typography fontWeight="bold" variant="caption">
                  CDAC, Pune
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 12, md: 6, sm: 6, lg: 6 }}>
            <Grid container spacing={1} alignItems="center">
              <Grid>
                <Avatar
                  sx={{
                    width: { xs: 24, md: 32 },
                    height: { xs: 24, md: 32 },
                  }}
                  variant="rounded"
                  className={animateClassEdu}
                >
                  <CalendarMonthIcon />
                </Avatar>
              </Grid>
              <Grid>
                <Typography variant="body2">
                  August 2013 - February 2014
                </Typography>
                <Typography variant="body2">
                  Pune, Maharashtra, India
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={0}
          sx={{
            padding: "8px",
            border: "2px dashed #f0efef",
            marginTop: "8px",
            position: "relative",
          }}
        >
          <div
            class="ribbon ribbon-bottom"
          >
            First Class
          </div>
          <Grid size={{ xs: 12, md: 6, sm: 6 }}>
            <Grid container spacing={1} alignItems="center">
              <Grid textAlign="right">
                <Avatar
                  sx={{
                    width: { xs: 24, md: 32 },
                    height: { xs: 24, md: 32 },
                  }}
                  variant="rounded"
                  className={animateClassEdu}
                >
                  <VerifiedIcon />
                </Avatar>
              </Grid>
              <Grid>
                <Typography fontWeight="bold">
                  Computer Science & Engineering
                </Typography>
                <Typography fontWeight="bold" variant="caption">
                  A.G. Patil Institute Of Technology, Solapur
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid size={{ xs: 12, md: 6, sm: 6, lg: 6 }}>
            <Grid container spacing={1} alignItems="center">
              <Grid>
                <Avatar
                  sx={{
                    width: { xs: 24, md: 32 },
                    height: { xs: 24, md: 32 },
                  }}
                  variant="rounded"
                  className={animateClassEdu}
                >
                  <CalendarMonthIcon />
                </Avatar>
              </Grid>
              <Grid>
                <Typography variant="body2">August 2008 - May 2013</Typography>
                <Typography variant="body2">
                  Solapur, Maharashtra, India
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default Education;
