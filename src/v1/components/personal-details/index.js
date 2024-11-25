import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Popper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import {
  CloseIcon,
  EmailIcon,
  HomeIcon,
  CallIcon,
  CustomChip,
  LinkedInIcon,
  GroupIcon,
} from "../../../common";

/**
 * HEX: #f0efef

HEX: #ddeedd

HEX: #c2d4dd

HEX: #b0aac0

*/

function PersonDetails() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <Paper>
      <Stack divider={<Divider />} spacing={1}>
        <Card elevation={0} sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto", paddingTop: "8px" }}>
              <Typography
                sx={{ textShadow: "#22a19e 1px 0 10px;" }}
                fontWeight="bold"
                variant="h3"
                component="div"
              >
                Ajit Kamble
              </Typography>
              <Typography fontWeight="bold" variant="caption">
                <CustomChip
                  label="Associate Technical Manager"
                  m={0}
                  variant="outlined"
                  color=""
                  icon={<GroupIcon />}
                />
                <CustomChip
                  label={"March 2014 - Present"}
                  m={0}
                  variant="outlined"
                />
                <CustomChip
                  label={
                    <Link href="https://www.bridgenext.com/" target="_blank">
                      Bridgenext
                    </Link>
                  }
                  m={0}
                  variant="outlined"
                  icon={"@"}
                />
              </Typography>
            </CardContent>
          </Box>
          <div>
            <CardMedia
              aria-describedby={id}
              component="img"
              sx={{
                width: { sx: "50", sm: "140", md: "80" },
                borderWidth: "4px",
                borderStyle: "outset",
                cursor: "pointer",
              }}
              image="/headshot-2.jpg"
              alt="Live from space album cover"
              onClick={handleClick}
            />
            <Popper placement="auto" id={id} open={open} anchorEl={anchorEl}>
              <Paper sx={{ border: 1, p: 1 }}>
                <img
                  style={{ borderWidth: "4px", borderStyle: "outset" }}
                  src="/headshot-2.jpg"
                  heigh="400"
                  width="400"
                  alt="Ajit Kamble"
                />
                <IconButton
                  sx={{
                    position: "absolute",
                    right: 0,
                    zIndex: 1000,
                    color: "red",
                    top: 0,
                  }}
                  onClick={handleClick}
                >
                  <CloseIcon />
                </IconButton>
              </Paper>
            </Popper>
          </div>
        </Card>

        <Card elevation={0} sx={{ display: "flex" }}>
          <List dense>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <HomeIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="6325, North Sheridan Road, Chicago, IL, 60660" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <EmailIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                sx={{ textDecoration: "underline" }}
                primary={
                  <Link href="mailto:ajit17021991@gmail.com">
                    ajit17021991@gmail.com
                  </Link>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <CallIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                sx={{ textDecoration: "underline" }}
                primary="+1 (872) ***-*****"
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <LinkedInIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                sx={{ textDecoration: "underline" }}
                primary={
                  <Link
                    href="https://www.linkedin.com/in/ajit-kamble17"
                    target="_blank"
                  >
                    https://www.linkedin.com/in/ajit-kamble17
                  </Link>
                }
              />
            </ListItem>
          </List>
        </Card>

        <Card elevation={0} sx={{ display: "flex" }}>
          <CardContent sx={{ paddingTop: "0" }}>
            <Typography gutterBottom variant="h6" component="div">
              Personal Information
            </Typography>
            <Typography gutterBottom variant="button" component="div">
              Languages
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <CustomChip
                label="English"
                variant="outlined"
                size="small"
                color="#b0aac0"
              />
              <CustomChip label="Marathi" variant="outlined" size="small" />
              <CustomChip label="Hindi" variant="outlined" size="small" />
            </Typography>
            <Typography gutterBottom variant="button" component="div">
              Hobbies
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              <CustomChip label="Chess" variant="outlined" size="small" />
              <CustomChip label="Video Games" variant="outlined" size="small" />
              <CustomChip label="Travelling" variant="outlined" size="small" />
              <CustomChip label="Guitar" variant="outlined" size="small" />
            </Typography>
            <Typography gutterBottom variant="button" component="div">
              Date Of Birth
            </Typography>
            <Typography gutterBottom variant="body2" component="div">
              02/17/1991
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ textAlign: "center" }}>
          <Link href="#" variant="button">
            Download Resume
          </Link>
        </Card>
      </Stack>
    </Paper>
  );
}

export default PersonDetails;
