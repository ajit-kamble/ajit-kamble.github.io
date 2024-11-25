import {
  Avatar,
  Box,
  Divider,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { CallIcon, EmailIcon, HomeIcon, LinkedInIcon } from "../../../common";

function Contact() {
  return (
    <Box sx={{ color: "white", paddingX: "16px" }}>
      <Typography fontSize="18px" variant="button">
        Contact
      </Typography>
      <Divider
        sx={{
          background: "white",
          height: "2px",
          border: "1px solid white",
          borderRadius: "4px",
        }}
      />
      <List dense>
        <ListItem>
          <ListItemAvatar>
            <HomeIcon />
          </ListItemAvatar>
          <ListItemText primary="6325, N Sheridan Rd, Unit #1705, Chicago, IL, 60660" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <EmailIcon />
          </ListItemAvatar>
          <ListItemText
            sx={{ textDecoration: "underline" }}
            primary={
              <Link sx={{color:"white"}} href="mailto:ajit17021991@gmail.com">
                ajit17021991@gmail.com
              </Link>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <CallIcon />
          </ListItemAvatar>
          <ListItemText
            sx={{ textDecoration: "underline" }}
            primary="+1 (872) ***-*****"
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <LinkedInIcon />
          </ListItemAvatar>
          <ListItemText
            sx={{ textDecoration: "underline" }}
            primary={
              <Link
              sx={{color:"white"}}
                href="https://www.linkedin.com/in/ajit-kamble17"
                target="_blank"
              >
                https://www.linkedin.com/in/ajit-kamble17
              </Link>
            }
          />
        </ListItem>
      </List>
    </Box>
  );
}

export default Contact;
