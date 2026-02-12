import { Box, Card, Chip, Typography } from "@mui/material";
import { useState } from "react";
import { motion } from "motion/react";

function Skills({ title, skills }) {
    const [enter, setEnter] = useState(false);
    return (
        <Card
            elevation={enter ? 5 : 0}
            sx={{ display: "flex", width: "100%", backgroundColor: enter ? "rgb(24, 38, 69)" : "rgba(0, 0, 0, 0)", color: "white", padding: "20px", cursor: "pointer", flexDirection: "column" }}
            onMouseEnter={() => {
                setEnter(true);
            }}
            onMouseLeave={() => {
                setEnter(false);
            }}
        >
            <Typography mb={1} fontWeight="bold" fontSize={20}>{title}</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                {skills.map((skill) =>
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ amount: 0.6 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <Chip label={skill} size="medium" variant="filled" sx={{ marginRight: "5px", marginTop: "10px", color: "white", fontSize: "15px", backgroundColor: "#0F4C75" }} />
                    </motion.div>
                )}
            </Box>
        </Card>
    )
}

export default Skills;