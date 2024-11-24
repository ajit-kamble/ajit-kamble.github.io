import { Divider, Paper, Stack } from "@mui/material";
import Introduction from "./introduction";
import KeySkills from "./key-skills";
import TechSkills from "./tech-skills";
import Work from "./work";
import Education from "./education";
import { CircleIcon, FlareIcon } from "../common";

function Skills() {
  return (
    <Paper>
      <Stack
        divider={
          <Divider color="var(--color2)">
            <CircleIcon  fontSize="12"/>
            <FlareIcon fontSize="16" />
            <CircleIcon fontSize="12"/>
          </Divider>
        }
        spacing={1}
      >
        <Introduction />
        <KeySkills />
        <Education />
        <TechSkills />
        <Work />
      </Stack>
    </Paper>
  );
}

export default Skills;
