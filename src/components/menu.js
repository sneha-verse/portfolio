import { Box } from "@mui/material";
import { motion } from "motion/react";

function SideMenu({ aboutVisibility, experienceVisibility, skillsVisibility, projectsVisibility, educationVisibility, resumeVisibility, contactVisibility, onClick }) {
    return (<>
        <motion.div
            initial={{ fontWeight: 200, fontSize: 20 }}
            animate={aboutVisibility ? { fontWeight: 700, fontSize: 25, marginTop: 10, marginBottom: 10} : { fontWeight: 200, fontSize: 20, marginTop: 5, marginBottom: 5, color: "lightgray" }}
            transition={{ duration: 0.5 }}
        >
            <Box onClick={() => onClick("about")} sx={{ cursor: "pointer" }}>ABOUT</Box>
        </motion.div>

        <motion.div
            initial={{ fontWeight: 100, fontSize: 20 }}
            animate={experienceVisibility ? { fontWeight: 700, fontSize: 25, marginTop: 10, marginBottom: 10 } : { fontWeight: 200, fontSize: 20, marginTop: 5, marginBottom: 5, color: "lightgray" }}
            transition={{ duration: 0.5 }}
        >
            <Box onClick={() => onClick("experience")} sx={{ cursor: "pointer" }}>EXPERIENCE</Box>
        </motion.div>

        <motion.div
            initial={{ fontWeight: 100, fontSize: 20 }}
            animate={skillsVisibility ? { fontWeight: 700, fontSize: 25, marginTop: 10, marginBottom: 10 } : { fontWeight: 200, fontSize: 20, marginTop: 5, marginBottom: 5, color: "lightgray" }}
            transition={{ duration: 0.5 }}
        >
            <Box onClick={() => onClick("skills")} sx={{ cursor: "pointer" }}>SKILLS</Box>
        </motion.div>

        {/* <motion.div
            initial={{ fontWeight: 100, fontSize: 20 }}
            animate={projectsVisibility ? { fontWeight: 700, fontSize: 25, marginTop: 10, marginBottom: 10 } : { fontWeight: 200, fontSize: 20, marginTop: 5, marginBottom: 5, color: "lightgray" }}
            transition={{ duration: 0.5 }}
        >
            <Box onClick={() => onClick("projects")} sx={{ cursor: "pointer" }}>PROJECTS</Box>
        </motion.div> */}

        <motion.div
            initial={{ fontWeight: 100, fontSize: 20 }}
            animate={educationVisibility ? { fontWeight: 700, fontSize: 25, marginTop: 10, marginBottom: 10 } : { fontWeight: 200, fontSize: 20, marginTop: 5, marginBottom: 5, color: "lightgray" }}
            transition={{ duration: 0.5 }}
        >
            <Box onClick={() => onClick("education")} sx={{ cursor: "pointer" }}>EDUCATION</Box>
        </motion.div>

        <motion.div
            initial={{ fontWeight: 100, fontSize: 20 }}
            animate={resumeVisibility ? { fontWeight: 700, fontSize: 25, marginTop: 10, marginBottom: 10 } : { fontWeight: 200, fontSize: 20, marginTop: 5, marginBottom: 5, color: "lightgray" }}
            transition={{ duration: 0.5 }}
        >
            <Box onClick={() => onClick("resume")} sx={{ cursor: "pointer" }}>RESUME</Box>
        </motion.div>

        <motion.div
            initial={{ fontWeight: 100, fontSize: 20 }}
            animate={contactVisibility ? { fontWeight: 700, fontSize: 25, marginTop: 10, marginBottom: 10 } : { fontWeight: 200, fontSize: 20, marginTop: 5, marginBottom: 5, color: "lightgray" }}
            transition={{ duration: 0.5 }}
        >
            <Box onClick={() => onClick("contact")} sx={{ cursor: "pointer" }}>CONTACT</Box>
        </motion.div>
    </>)
}

export default SideMenu;