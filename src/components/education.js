import { HorizontalRule } from "@mui/icons-material";
import { Box, Card, Typography } from "@mui/material";
import { useState } from "react";

function Education({ from, to, icon, degree, school, body }) {
    const [enter, setEnter] = useState(false);
    return (
        <Card
            elevation={enter ? 5 : 0}
            sx={{ display: "flex", width: "100%", backgroundColor: enter ? "rgb(24, 38, 69)" : "rgba(0, 0, 0, 0)", color: "white", padding: "20px", cursor: "pointer", pointerEvents: "auto" }}
            onMouseEnter={() => {
                setEnter(true);
            }}
            onMouseLeave={() => {
                setEnter(false);
            }}
        >
            <Box sx={{ width: "25%", display: "flex", flexDirection: "column" }}>
                <Box mt={1} sx={{ width: "90%", display: "flex", flexDirection: "row",justifyContent:"space-around", color: enter ? "#00853E" : "white" }}>
                    <Typography noWrap fontWeight="bold">{from}</Typography>
                    <HorizontalRule />
                    <Typography noWrap fontWeight="bold">{to}</Typography>
                </Box>
                <Box height={10}></Box>
                <img src={icon} alt="Education Icon" width="90%" height="100%" style={{ borderRadius: "10%", objectFit: "cover" }} />
            </Box>
            <Box sx={{ width: "75%", display: "flex", flexDirection: "column" }}>
                <Typography component="span" fontWeight="bold" sx={{margin: 0}} fontSize={30} color={enter ? "#00853E" : "white"}>{degree}</Typography>
                <Typography fontWeight="bold" color={enter ? "#00853E" : "white"}>{school} (Data Science)</Typography>
                <Box height={10}></Box>
                <Typography fontSize={15} color="lightgray">{body}</Typography>
            </Box>
        </Card>
    )
}

export default Education;