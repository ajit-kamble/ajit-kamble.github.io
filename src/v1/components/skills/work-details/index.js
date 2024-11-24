import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Divider,
  Chip,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Button,
} from "@mui/material";
import {
  CustomChip,
  KeyboardDoubleArrowDownIcon,
  MouseHoverPopover,
} from "../../common";

function RolesTable({ roles }) {
  return (
    <TableContainer elevation={0} sx={{ m: 0, p: 0 }} component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell>Job Title</TableCell>
            <TableCell>Duration</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {roles.map((role, index) => (
            <TableRow key={`role-${index}`}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{role.title}</TableCell>
              <TableCell>{role.duration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function WorkDetails({ work }) {
  const { subTitle, details, roles, company, technologies, domain } = work;

  return (
    <Card sx={{ position: "relative" }}>
      {/* <div className="ribbon ribbon-top ribbon-in-padding">
        <Typography
          sx={{ textTransform: "uppercase" }}
          fontWeight="bold"
          variant="caption"
        >
          {domain}
        </Typography>
      </div> */}
      <CardHeader
        sx={{ lineHeight: "0.334 !important" }}
        titleTypographyProps={{ sx: { lineHeight: "0 !important" } }}
        subheaderTypographyProps={{
          sx: { lineHeight: "0.5 !important", marginY: "8px" },
        }}
        title={
          <>
            <Typography fontWeight="bold" variant="body1">
              {company}
            </Typography>
            <br />
            <Typography variant="body2">Duration: {subTitle}</Typography>
            <br />

            <CustomChip
              color="info"
              variant="outlined"
              size="small"
              label={`Domain: ${domain}`}
            />
          </>
        }
        subheader={
          <>
            <MouseHoverPopover poperContent={<RolesTable roles={roles} />}>
              <Button
                variant="outlined"
                startIcon={<KeyboardDoubleArrowDownIcon />}
                endIcon={<KeyboardDoubleArrowDownIcon />}
                size="small"
                color="success"
              >
                My Roles
              </Button>
            </MouseHoverPopover>
          </>
        }
      />
      <CardContent sx={{ paddingY: "0 !important" }}>
        <ul
          style={{
            paddingLeft: "16px",
            marginTop: 0,
            listStyleType: "square",
          }}
        >
          {details.map((d) => (
            <li>
              <Typography variant="caption" sx={{ color: "text.secondary" }}>
                {d}
              </Typography>
            </li>
          ))}
        </ul>
      </CardContent>
      <Divider variant="middle">
        <Chip label="Tech Stack" size="small" color="info" />
      </Divider>
      <CardContent
        sx={{
          textAlign: "center",
          marginBottom: "0",
          paddingBottom: "8px !important",
        }}
      >
        <Box
          sx={{
            border: "1px solid black",
            borderRadius: "4px",
            paddingX: "8px",
            background: "var(--color9)",
            paddingTop: "16px",
          }}
        >
          {technologies.map((t) => (
            <CustomChip variant="outlined" size="small" label={t} />
          ))}
          {/* <Breadcrumbs
            maxItems={15}
            separator={
              <span style={{ color: "black", fontWeight: "600" }}>/</span>
            }
          >
            {technologies.map((t) => (
              <Typography
                sx={{
                  fontWeight: "600",
                  color: "black",
                }}
                variant="caption"
              >
                {t}
              </Typography>
            ))}
          </Breadcrumbs> */}
        </Box>
      </CardContent>
    </Card>
  );
}

export default WorkDetails;
