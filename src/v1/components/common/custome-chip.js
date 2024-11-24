import { Chip, Typography } from "@mui/material";
import { useState } from "react";

function CustomChip({
  label,
  icon,
  variant,
  color,
  size = "small",
  fontWeight = "bold",
  m = 12,
}) {
  const [animateClass, setAnimateClass] = useState("");
  const handleEnter = () => {
    setTimeout(() => {
      setAnimateClass("animate__animated animate__flipInY");
    }, 100);
  };
  const handleClose = () => {
    setTimeout(() => {
      setAnimateClass("");
    }, 1500);
  };

  return (
    <Typography
      sx={{ display: "inline-block" }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleClose}
      className={animateClass}
    >
      <Chip
        sx={{
          marginRight: "8px",
          marginBottom: `${m}px`,
          fontWeight: fontWeight,
          border: "2px solid var(--color8)",
        }}
        label={label}
        icon={icon}
        variant={variant}
        color={color}
        size={size}
      />
    </Typography>
  );
}

export default CustomChip;
