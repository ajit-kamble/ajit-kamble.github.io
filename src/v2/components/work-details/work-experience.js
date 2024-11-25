import { Box, Divider, Typography, Grid2 as Grid } from "@mui/material";
import { CustomChip } from "../../../common";

function WorkExperience() {
  return (
    <Box sx={{ marginX: "32px", marginTop: "32px" }}>
      <Typography
        sx={{ fontWeight: "bold", fontSize: "18px" }}
        variant="button"
      >
        WORK EXPERIENCE
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
        <ul className="project-list">
          <li>
            <div className="bullet">
              <svg aria-hidden="true" viewBox="0 0 32 32" focusable="false">
                <circle stroke="none" cx="16" cy="16" r="10"></circle>
              </svg>
            </div>
            <Box>
              <Grid m={0} p={0} container spacing={0}>
                <Grid m={0} p={0} size={6}>
                  <Typography fontSize="16" fontWeight="bold">
                    Mastery Systems
                  </Typography>
                </Grid>
                <Grid textAlign="right" m={0} p={0} size={6}>
                  <Typography>May 2023 - Present</Typography>
                </Grid>
                <Grid m={0} p={0} size={12}>
                  <Typography>
                    <CustomChip
                      label={"System Developer"}
                      m="4"
                      variant={"outlined"}
                      size="small"
                    />
                    <CustomChip
                      label={"Senior System Developer"}
                      m="4"
                      variant={"outlined"}
                      size="small"
                    />
                    <CustomChip
                      label={"Associate Technical Manager"}
                      m="4"
                      variant={"outlined"}
                      size="small"
                    />
                  </Typography>
                  <Typography>
                    <ul style={{ paddingLeft: "24px", paddingTop: "8px" }}>
                      <li>
                        Coyote is a leading global 3PL that combines a
                        centralized marketplace with freight and supply chain
                        solutions in USA
                      </li>
                      <li>
                        We built Web Application, Desktop Application, SQL Jobs,
                        Microservices, Standalone Windows Services to manage
                        freights
                      </li>
                      <li>
                        These application are used by Customer Reps, Carrier
                        Reps & Internal Employees to carry out frieght lifecycle
                      </li>
                    </ul>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </li>

          <li>
            <div className="bullet">
              <svg aria-hidden="true" viewBox="0 0 32 32" focusable="false">
                <circle stroke="none" cx="16" cy="16" r="10"></circle>
              </svg>
            </div>
            <Box>
              <Grid m={0} p={0} container spacing={0}>
                <Grid m={0} p={0} size={6}>
                  <Typography fontSize="16" fontWeight="bold">
                    ERMCO
                  </Typography>
                </Grid>
                <Grid textAlign="right" m={0} p={0} size={6}>
                  <Typography>March 2023 - May 2023</Typography>
                </Grid>
                <Grid m={0} p={0} size={12}>
                  <Typography>
                    <CustomChip
                      label={"Technical Lead"}
                      m="4"
                      variant={"outlined"}
                      size="small"
                    />
                  </Typography>
                  <Typography>
                    <ul style={{ paddingLeft: "24px", paddingTop: "8px" }}>
                      <li>
                        EMRCO is a leading US manufacturer of oil-filled
                        distribution transformers,
                      </li>
                      <li>
                        We built mobile application for Honeywell CK65 Handheld
                        Computer for inventroy management.
                      </li>
                      <li>
                        This mobile application is used by ERMCO employees to
                        scan 3D QR-Code to add new entry of production items
                      </li>
                    </ul>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </li>

          <li>
            <div className="bullet">
              <svg aria-hidden="true" viewBox="0 0 32 32" focusable="false">
                <circle stroke="none" cx="16" cy="16" r="10"></circle>
              </svg>
            </div>
            <Box>
              <Grid m={0} p={0} container spacing={0}>
                <Grid m={0} p={0} size={6}>
                  <Typography fontSize="16" fontWeight="bold">
                    Coyote Logistics, LLC
                  </Typography>
                </Grid>
                <Grid textAlign="right" m={0} p={0} size={6}>
                  <Typography>March 2014 - February 2023</Typography>
                </Grid>
                <Grid m={0} p={0} size={12}>
                  <Typography>
                    <CustomChip
                      label={"Jr. Software Engineer"}
                      m="4"
                      variant={"outlined"}
                      size="small"
                    />
                    <CustomChip
                      label={"Software Engineer"}
                      m="4"
                      variant={"outlined"}
                      size="small"
                    />
                    <CustomChip
                      label={"Senior Software Engineer"}
                      m="4"
                      variant={"outlined"}
                      size="small"
                    />
                    <CustomChip
                      label={"Technical Lead"}
                      m="4"
                      variant={"outlined"}
                      size="small"
                    />
                  </Typography>
                  <Typography>
                    <ul style={{ paddingLeft: "24px", paddingTop: "8px" }}>
                      <li>
                        Coyote is a leading global 3PL that combines a
                        centralized marketplace with freight and supply chain
                        solutions in USA
                      </li>
                      <li>
                        We built Web Application, Desktop Application, SQL Jobs,
                        Microservices, Standalone Windows Services to manage
                        freights
                      </li>
                      <li>
                        These application are used by Customer Reps, Carrier
                        Reps & Internal Employees to carry out frieght lifecycle
                      </li>
                    </ul>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </li>
        </ul>
      </Box>
    </Box>
  );
}

export default WorkExperience;
