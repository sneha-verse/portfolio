import { Box, Typography } from "@mui/material";

function Heading({ img, text }) {
    return (
        <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <Box mr={2} sx={{ width: "50px", height: "50px" }}>
                <img src={img} alt="geadingImg" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Box>
            <Typography variant="h4">{text}</Typography>
        </Box>

    );
}

export default Heading;