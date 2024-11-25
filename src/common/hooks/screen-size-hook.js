import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import {  useState } from "react";

/*
xs, extra-small: 0px
sm, small: 600px
md, medium: 900px
lg, large: 1200px
xl, extra-large: 1536px
*/
const useScreenSizeHook = (url) => {
  const [isXS, setXS] = useState(false);
  const [isSM, setSM] = useState(false);
  const [isMD, setMD] = useState(false);
  const [isLG, setLG] = useState(false);
  const [isXL, setXL] = useState(false);

  const theme = useTheme();
  setXS(useMediaQuery(theme.breakpoints.up("xs")));
    setSM(useMediaQuery(theme.breakpoints.up("sm")));
    setMD(useMediaQuery(theme.breakpoints.up("md")));
    setLG(useMediaQuery(theme.breakpoints.up("lg")));
    setXL(useMediaQuery(theme.breakpoints.up("xl")));

  return [isXS, isSM, isMD, isLG, isXL];
};

export default useScreenSizeHook;
