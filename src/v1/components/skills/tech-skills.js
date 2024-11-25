import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import {
  CodeIcon,
  CssIcon,
  CustomChip,
  GitHubIcon,
  HtmlIcon,
  JavaScriptIcon,
  MicrosoftIcon,
  MilitaryTechIcon,
  StorageIcon,
} from "../../../common";
import { PhoneAndroid } from "@mui/icons-material";
import { useState } from "react";

function TechSkills() {
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
    <Card id="tech-skills" elevation={0}>
      <CardHeader
        sx={{ background: "var(--header-color)" }}
        avatar={
          <Avatar className={animateClass} aria-label="recipe">
            <MilitaryTechIcon />
          </Avatar>
        }
        title={<Typography variant="button">Technical Skills</Typography>}
        subheader="I have knowledge of various coding languages, including C#, HTML, CSS, and JavaScript. I am also proficient in using software programs such as Visual Studio, Visual Studio Code, SSMS. I have experience with web development, mobile app development, and user interface design"
        onMouseEnter={handleEnter}
        onMouseLeave={handleClose}
      />
      <CardContent sx={{ paddingBottom: "4px !important" }}>
        <Box sx={{ textAlign: "center" }}>
          <CustomChip
            icon={<MicrosoftIcon />}
            label=".NET"
            variant="outlined"
            size="small"
          />
          <CustomChip
            icon={<JavaScriptIcon />}
            label="React"
            variant="outlined"
            size="small"
          />
          <CustomChip
            icon={<JavaScriptIcon />}
            label="Angular"
            variant="outlined"
            size="small"
          />
          <CustomChip
            icon={<JavaScriptIcon />}
            label="Backbone & Marrionette"
            variant="outlined"
            size="small"
          />
          <CustomChip
            icon={<JavaScriptIcon />}
            label="Node"
            variant="outlined"
            size="small"
          />
          <CustomChip
            icon={<JavaScriptIcon />}
            label="Node"
            variant="outlined"
            size="small"
          />
          <CustomChip
            icon={<JavaScriptIcon />}
            label="Javascript"
            variant="outlined"
            size="small"
          />
          <CustomChip
            icon={<CssIcon />}
            label="CSS"
            variant="outlined"
            size="small"
          />
          <CustomChip
            icon={<HtmlIcon />}
            label="HTML"
            variant="outlined"
            size="small"
          />
          <CustomChip
            icon={<StorageIcon />}
            label="MongoDB"
            variant="outlined"
            size="small"
          />
          <CustomChip
            icon={<StorageIcon />}
            label="SQL Server"
            variant="outlined"
            size="small"
          />
          <CustomChip
            icon={<StorageIcon />}
            label="Elastic Search"
            variant="outlined"
            size="small"
          />
          <CustomChip
            icon={<StorageIcon />}
            label="Postgres SQL"
            variant="outlined"
            size="small"
          />
          <CustomChip
            icon={<CodeIcon />}
            label="REST APIs"
            variant="outlined"
            size="small"
          />
          <CustomChip
            icon={<CodeIcon />}
            label="Graph QL"
            variant="outlined"
            size="small"
          />
          <CustomChip
            icon={<PhoneAndroid />}
            label="React Native"
            variant="outlined"
            size="small"
          />
          <CustomChip
            icon={<GitHubIcon />}
            label="GitHub"
            variant="outlined"
            size="small"
          />
        </Box>
      </CardContent>
    </Card>
  );
}

export default TechSkills;
