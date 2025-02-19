import { Box, Divider, Typography } from "@mui/material";

function Profile() {
  return (
    <Box sx={{ marginX: "32px", marginTop: "16px" }}>
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
          10+ years of experience in Full-stack development using multiple tech
          stacks with hands-on experience in designing, developing, and
          maintaining web, mobile, and desktop applications. Possess diverse
          experience in creating multiple highly scalable applications using
          different tech stacks. Adept at understanding the requirements of
          clients and delivering projects accordingly. Demonstrates the
          capability of maintaining code by fixing defects & conducting
          end-to-end testing. Highly skilled at collaborating with team members
          to develop efficient products within deadlines
        </Typography>
      </Box>
    </Box>
  );
}

export default Profile;
