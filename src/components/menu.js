import { motion } from "motion/react";

function SideMenu({ aboutVisibility, experienceVisibility, skillsVisibility, projectsVisibility, educationVisibility, resumeVisibility, contactVisibility }) {
    return (<>
        <motion.div
            initial={{ fontWeight: 200, fontSize: 20 }}
            animate={aboutVisibility ? { fontWeight: 700, fontSize: 25, marginTop: 10, marginBottom: 10} : { fontWeight: 200, fontSize: 20, marginTop: 5, marginBottom: 5, color: "lightgray" }}
            transition={{ duration: 0.5 }}
        >
            ABOUT
        </motion.div>

        <motion.div
            initial={{ fontWeight: 100, fontSize: 20 }}
            animate={experienceVisibility ? { fontWeight: 700, fontSize: 25, marginTop: 10, marginBottom: 10 } : { fontWeight: 200, fontSize: 20, marginTop: 5, marginBottom: 5, color: "lightgray" }}
            transition={{ duration: 0.5 }}
        >
            EXPERIENCE
        </motion.div>

        <motion.div
            initial={{ fontWeight: 100, fontSize: 20 }}
            animate={skillsVisibility ? { fontWeight: 700, fontSize: 25, marginTop: 10, marginBottom: 10 } : { fontWeight: 200, fontSize: 20, marginTop: 5, marginBottom: 5, color: "lightgray" }}
            transition={{ duration: 0.5 }}
        >
            SKILLS
        </motion.div>

        <motion.div
            initial={{ fontWeight: 100, fontSize: 20 }}
            animate={projectsVisibility ? { fontWeight: 700, fontSize: 25, marginTop: 10, marginBottom: 10 } : { fontWeight: 200, fontSize: 20, marginTop: 5, marginBottom: 5, color: "lightgray" }}
            transition={{ duration: 0.5 }}
        >
            PROJECTS
        </motion.div>

        <motion.div
            initial={{ fontWeight: 100, fontSize: 20 }}
            animate={educationVisibility ? { fontWeight: 700, fontSize: 25, marginTop: 10, marginBottom: 10 } : { fontWeight: 200, fontSize: 20, marginTop: 5, marginBottom: 5, color: "lightgray" }}
            transition={{ duration: 0.5 }}
        >
            EDUCATION
        </motion.div>

        <motion.div
            initial={{ fontWeight: 100, fontSize: 20 }}
            animate={resumeVisibility ? { fontWeight: 700, fontSize: 25, marginTop: 10, marginBottom: 10 } : { fontWeight: 200, fontSize: 20, marginTop: 5, marginBottom: 5, color: "lightgray" }}
            transition={{ duration: 0.5 }}
        >
            RESUME
        </motion.div>

        <motion.div
            initial={{ fontWeight: 100, fontSize: 20 }}
            animate={contactVisibility ? { fontWeight: 700, fontSize: 25, marginTop: 10, marginBottom: 10 } : { fontWeight: 200, fontSize: 20, marginTop: 5, marginBottom: 5, color: "lightgray" }}
            transition={{ duration: 0.5 }}
        >
            CONTACT
        </motion.div>
    </>)
}

export default SideMenu;