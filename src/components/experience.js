import { HorizontalRule } from "@mui/icons-material";
import { Box, Card, Chip, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

function Experience({ from, to, title, body, skills, company }) {
    const [enter, setEnter] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Card
            elevation={enter ? 5 : 0}
            sx={{ display: "flex", flexDirection: isMobile ? "column" : "row", width: "100%", backgroundColor: enter ? "rgb(24, 38, 69)" : "rgba(0, 0, 0, 0)", color: "white", padding: "20px", cursor: "pointer", boxSizing: "border-box" }}
            onMouseEnter={() => {
                setEnter(true);
            }}
            onMouseLeave={() => {
                setEnter(false);
            }}
        >
            <Box sx={{ width: isMobile ? "100%" : "25%", display: "flex", flexDirection: "row", color: enter ? "#1eca3b" : "white"}}>
                <Typography fontWeight="bold" mr={1}>{from}</Typography>
                <HorizontalRule />
                <Typography fontWeight="bold" ml={1}>{to}</Typography>
            </Box>
            <Box sx={{ width: isMobile ? "100%" : "75%", display: "flex", flexDirection: "column" }}>
                <Typography fontWeight="bold" color={enter ? "#1eca3b" : "white"}>{title} • {company}</Typography>
                <Box height={10}></Box>
                <Typography fontSize={15} color="lightgray">{body}</Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                    {
                        skills.map((skill) =>
                            <Chip label={skill} size="small" variant="filled" sx={{ marginRight: "5px", marginTop: "10px", color: "white", fontSize: "13px", backgroundColor: "#0F4C75" }} />
                        )
                    }
                </Box>

            </Box>
        </Card>
    )
}

export default Experience;