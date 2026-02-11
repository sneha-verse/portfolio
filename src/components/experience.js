import { Box, Card, Chip, Typography } from "@mui/material";
import { useState } from "react";

function Experience({ timeline, title, body, skills }) {
    const [enter, setEnter] = useState(false);
    return (
        <Card
            elevation={enter ? 5 : 0}
            sx={{ display: "flex", width: "100%", backgroundColor: enter ? "rgb(24, 38, 69)" : "rgb(15 23 42)", color: "white", padding: "20px", cursor: "pointer", pointerEvents: "auto" }}
            onMouseEnter={() => {
                setEnter(true);
            }}
            onMouseLeave={() => {
                setEnter(false);
            }}
        >
            <Box sx={{ width: "25%" }}>
                <Typography fontWeight="bold">{timeline}</Typography>
            </Box>
            <Box sx={{ width: "75%", display: "flex", flexDirection: "column" }}>
                <Typography fontWeight="bold">{title}</Typography>
                <Box height={10}></Box>
                <Typography fontSize={15} color="lightgray">{body}</Typography>
                <Box sx={{ display: "flex" }}>
                    {
                        skills.map((skill) =>
                            <Chip label={skill} variant="outlined" sx={{ marginRight: "10px", marginTop: "10px  ", color: "white" }} />
                        )
                    }
                </Box>

            </Box>
        </Card>
    )
}

export default Experience;