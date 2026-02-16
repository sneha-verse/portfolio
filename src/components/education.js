import { HorizontalRule } from "@mui/icons-material";
import { Box, Card, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import { motion } from "motion/react";

function Education({ from, to, icon, degree, school, body }) {
  const [enter, setEnter] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Card
      elevation={enter ? 1 : 0}
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0)",
        color: "white",
        padding: "20px",
        cursor: "pointer",
        pointerEvents: "auto",
        boxSizing: "border-box",
        position: "relative",
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
          flexDirection: "column",
        }}
      >
        <Box
          mt={1}
          sx={{
            width: "90%",
            display: "flex",
            flexDirection: "row",
            justifyContent: isMobile ? "start" : "space-around",
            color: enter ? "#38BDF8" : "white",
          }}
        >
          <Typography fontSize={15} noWrap fontWeight="bold">
            {from}
          </Typography>
          <HorizontalRule />
          <Typography fontSize={15} noWrap fontWeight="bold">
            {to}
          </Typography>
        </Box>
        <Box height={10}></Box>
        {!isMobile && (
          <img
            src={icon}
            alt="Education Icon"
            width="90%"
            height="100%"
            style={{ borderRadius: "10%", objectFit: "cover" }}
          />
        )}
      </Box>
      <Box
        sx={{
          width: isMobile ? "100%" : "75%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          component="span"
          fontWeight="bold"
          sx={{ margin: 0 }}
          fontSize={30}
          color={enter ? "#38BDF8" : "white"}
        >
          {degree}
        </Typography>
        <Typography
          fontSize={15}
          fontWeight="bold"
          color={enter ? "#38BDF8" : "white"}
        >
          {school} (Data Science)
        </Typography>
        <Box height={10}></Box>
        <Typography fontSize={15} color="lightgray">
          {body}
        </Typography>
      </Box>
    </Card>
  );
}

export default Education;
