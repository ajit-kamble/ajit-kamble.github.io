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

function Education() {
  return (
    <Box sx={{ color: "white", paddingX: "16px" }}>
      <Typography fontSize="18px" variant="button">
        Education
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
          <ListItemText
            primary={
              <>
                <Typography sx={{ textDecoration: "underline" }}>
                  August 2013 - February 2014
                </Typography>
                <Typography sx={{ textDecoration: "underline" }}>
                  C.D.A.C. Pune, India
                </Typography>
              </>
            }
            secondary={
              <ul style={{ color: "white", paddingLeft: "24px" }}>
                <li>P.G. Diploma In Advance Computing</li>
                <li>Grade A</li>
              </ul>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={
              <>
                <Typography sx={{ textDecoration: "underline" }}>
                  August 2008 - May 2013
                </Typography>
                <Typography sx={{ textDecoration: "underline" }}>
                  Solapur University, Solapur
                </Typography>
              </>
            }
            secondary={
              <ul style={{ color: "white", paddingLeft: "24px" }}>
                <li>Bachelor of Computer Science & Engineering</li>
                <li>First Class with Distinction</li>
              </ul>
            }
          />
        </ListItem>
      </List>
    </Box>
  );
}

export default Education;
