import { Box, Card, Chip, Typography } from "@mui/material";
import { useState } from "react";
import { motion } from "motion/react";

function Skills({ title, skills }) {
  const [enter, setEnter] = useState(false);

  return (
    <Card
      elevation={enter ? 5 : 0}
      sx={{
        display: "flex",
        width: "100%",
        backgroundColor: enter ? "rgb(24, 38, 69)" : "rgba(0, 0, 0, 0)",
        color: "white",
        padding: "20px",
        cursor: "pointer",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
      onMouseEnter={() => {
        setEnter(true);
      }}
      onMouseLeave={() => {
        setEnter(false);
      }}
    >
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
