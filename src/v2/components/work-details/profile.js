import { Box, Divider, Typography } from "@mui/material";

function Profile() {
  return (
    <Box sx={{ marginX: "32px", marginTop: "32px" }}>
      <Typography
        sx={{ fontWeight: "bold", fontSize: "18px" }}
        variant="button"
      >
        Profile
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
        <Typography>
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
      </Box>
    </Box>
  );
}

export default Profile;
