import { Box, Divider, Typography } from "@mui/material";
import {
  CodeIcon,
  CssIcon,
  CustomChip,
  GitHubIcon,
  HtmlIcon,
  JavaScriptIcon,
  MicrosoftIcon,
  PhoneAndroidIcon,
  StorageIcon,
} from "../../../common";

function TechSkills() {
  return (
    <Box sx={{ color: "white", paddingX: "16px" }}>
      <Typography fontSize="18px" variant="button">
        Tech Skills
      </Typography>
      <Divider
        sx={{
          background: "white",
          height: "2px",
          border: "1px solid white",
          borderRadius: "4px",
        }}
      />
      <Box sx={{ paddingLeft: "16px", paddingY: "8px" }}>
        <CustomChip
          icon={<MicrosoftIcon />}
          label=".NET"
          variant="outlined"
          size="small"
          color="white"
          m={8}
        />
        <CustomChip
          icon={<JavaScriptIcon />}
          label="React"
          variant="outlined"
          size="small"
          color="white"
          m={8}
        />
        <CustomChip
          icon={<JavaScriptIcon />}
          label="Angular"
          variant="outlined"
          size="small"
          color="white"
          m={8}
        />
        <CustomChip
          icon={<JavaScriptIcon />}
          label="Backbone & Marrionette"
          variant="outlined"
          size="small"
          color="white"
          m={8}
        />
        <CustomChip
          icon={<JavaScriptIcon />}
          label="Node"
          variant="outlined"
          size="small"
          color="white"
          m={8}
        />
        <CustomChip
          icon={<JavaScriptIcon />}
          label="Javascript"
          variant="outlined"
          size="small"
          color="white"
          m={8}
        />
        <CustomChip
          icon={<CssIcon />}
          label="CSS"
          variant="outlined"
          size="small"
          color="white"
          m={8}
        />
        <CustomChip
          icon={<HtmlIcon />}
          label="HTML"
          variant="outlined"
          size="small"
          color="white"
          m={8}
        />
        <CustomChip
          icon={<StorageIcon />}
          label="MongoDB"
          variant="outlined"
          size="small"
          color="white"
          m={8}
        />
        <CustomChip
          icon={<StorageIcon />}
          label="SQL Server"
          variant="outlined"
          size="small"
          color="white"
          m={8}
        />
        <CustomChip
          icon={<StorageIcon />}
          label="Elastic Search"
          variant="outlined"
          size="small"
          color="white"
          m={8}
        />
        <CustomChip
          icon={<StorageIcon />}
          label="Postgres SQL"
          variant="outlined"
          size="small"
          color="white"
          m={8}
        />
        <CustomChip
          icon={<CodeIcon />}
          label="REST APIs"
          variant="outlined"
          size="small"
          color="white"
          m={8}
        />
        <CustomChip
          icon={<CodeIcon />}
          label="Graph QL"
          variant="outlined"
          size="small"
          color="white"
          m={8}
        />
        <CustomChip
          icon={<PhoneAndroidIcon />}
          label="React Native"
          variant="outlined"
          size="small"
          color="white"
          m={8}
        />
        <CustomChip
          icon={<GitHubIcon />}
          label="GitHub"
          variant="outlined"
          size="small"
          color="white"
          m={8}
        />
      </Box>
    </Box>
  );
}

export default TechSkills;
