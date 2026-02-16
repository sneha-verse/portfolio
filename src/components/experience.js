import { HorizontalRule } from "@mui/icons-material";
import {
  Box,
  Card,
  Chip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { motion } from "motion/react";

function Experience({ from, to, title, body, skills, company }) {
  const [enter, setEnter] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Card
      elevation={enter ? 1 : 0}
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0)",
        color: "white",
        padding: "20px",
        cursor: "pointer",
        boxSizing: "border-box",
      }}
      onMouseEnter={() => {
        setEnter(true);
      }}
      onMouseLeave={() => {
        setEnter(false);
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          inset: "0 -20px",
          background: "rgba(56, 189, 248, 0.1)",
          borderRadius: 8,
          opacity: 0,
          pointerEvents: "none",
        }}
        animate={{ opacity: enter ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <Box
        sx={{
          width: isMobile ? "100%" : "25%",
          display: "flex",
          flexDirection: "row",
          color: enter ? "#38BDF8" : "white",
        }}
      >
        <Typography fontSize={16} fontWeight="bold" mr={1}>
          {from}
        </Typography>
        <HorizontalRule />
        <Typography fontSize={16} fontWeight="bold" ml={1}>
          {to}
        </Typography>
      </Box>
      <Box
        sx={{
          width: isMobile ? "100%" : "75%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          fontSize={16}
          fontWeight="bold"
          color={enter ? "#38BDF8" : "white"}
        >
          {title} • {company}
        </Typography>
        <Box height={10}></Box>
        <Typography color="lightgray">{body}</Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          {skills.map((skill) => (
            <Chip
              label={skill}
              size="small"
              variant="filled"
              sx={{
                marginRight: "5px",
                marginTop: "10px",
                color: "white",
                fontSize: "13px",
                backgroundColor: "#0F4C75",
              }}
            />
          ))}
        </Box>
      </Box>
    </Card>
  );
}

export default Experience;
