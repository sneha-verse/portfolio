import { Box, Card, Chip, Typography } from "@mui/material";
import { useState } from "react";
import { motion } from "motion/react";

function Skills({ title, skills }) {
  const [enter, setEnter] = useState(false);

  return (
    <Card
      elevation={enter ? 1 : 0}
      sx={{
        display: "flex",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0)",
        color: "white",
        padding: "20px",
        cursor: "pointer",
        flexDirection: "column",
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
      <Typography mb={1} fontWeight="bold" fontSize={15}>
        {title}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {skills.map((skill, index) => (
          <motion.div
            initial={{ scale: 0.75, opacity: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
                delay: (1 / skills.length) * index,
              },
            }}
            viewport={{ amount: 0.6 }}
            exit={{ scale: 0, opacity: 0, transition: { duration: 0 } }}
          >
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
          </motion.div>
        ))}
      </Box>
    </Card>
  );
}

export default Skills;
