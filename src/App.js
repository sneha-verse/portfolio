import { Box, Paper, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Experience from './components/experience';
import "particles.js"
import { useEffect } from 'react';
import particlesConfig from './particles.json'

function App() {
  useEffect(() => {
    window.particlesJS("particles-js", particlesConfig)
  }, [])

  return (
    <Paper sx={{ display: "flex", position: "relative", flexDirection: "row", height: "100vh", width: "100vw", backgroundColor: "rgb(15 23 42)", justifyContent: "center" }}>
      <Box sx={{ width: "40%", display: "flex", color: "white", alignItems: "center", zIndex: 2, pointerEvents: "none", overflow: "hidden" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography fontSize={50}>Sneha Annamareddy</Typography>
          <Typography fontSize={25}>Full Stack Engineer</Typography>
          <Typography color='lightgray' mt={2}>I build accessible, pixel-perfect digital<br /> experiences for the web.</Typography>
          <Box sx={{ height: "10vh" }}></Box>
          {/* MENU starts here */}
          <Box sx={{ height: "5vh" }}>ABOUT</Box>
          <Box sx={{ height: "5vh" }}>EXPERIENCE</Box>
          <Box sx={{ height: "5vh" }}>SKILLS</Box>
          <Box sx={{ height: "5vh" }}>RESUME</Box>
          <Box sx={{ height: "5vh" }}>CONTACT</Box>
          <Box sx={{ height: "10vh" }}></Box>
          {/* ICONS */}
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box mr={3}><GitHubIcon fontSize='large' /></Box>
            <Box mr={3}><LinkedInIcon fontSize='large' /></Box>
            <Box mr={3}><EmailIcon fontSize='large' /></Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: "40%", display: "flex", flexDirection: "column", color: "white", zIndex: 2, pointerEvents: "none", overflow: "auto" }}>

        <Box sx={{ height: "10vh" }}></Box>
        <Box id="about" sx={{ display: "flex", flexDirection: "column", paddingLeft: "20px" }}>
          <p>
            I’m a frontend engineer with a specialty in web accessibility, focused on building pixel-perfect, intuitive user interfaces. I enjoy working at the intersection of design and engineering, where great user experience meets robust, clean, and scalable code.
          </p>
          <p>
            Currently, I'm a senior frontend engineer at Klaviyo, where I work on the component library team to help maintain and evolve our design system. In this role, I lead accessibility efforts across components, tooling, and patterns, partnering closely with designers and engineers to ensure accessibility is part of our core architecture.
          </p>
          <p>
            Previously, I’ve worked across a wide range of environments, from product studios to startups and large tech companies, including Apple, Starry Internet, and Upstatement. Alongside my professional work, I also created an online video course a few years ago which walks through building a real-world, API-driven application from scratch. These experiences have shaped how I think about building products that are both well-crafted and widely usable.
          </p>
        </Box>
        <Box sx={{ height: "5vh" }}></Box>
        <Box id="experience" sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <Experience
            timeline="2024 - present"
            title="Senior Software Engineer"
            body="Currently, I'm a senior frontend engineer at Klaviyo, where I work on the component library team to help maintain and evolve our design system. In this role, I lead accessibility efforts across components, tooling, and patterns, partnering closely with designers and engineers to ensure accessibility is part of our core architecture."
            skills={["Java", "SpringBoot", "JavaScript", "React", "Azure"]} />

          <Experience
            timeline="2024 - present"
            title="Senior Software Engineer"
            body="Currently, I'm a senior frontend engineer at Klaviyo, where I work on the component library team to help maintain and evolve our design system. In this role, I lead accessibility efforts across components, tooling, and patterns, partnering closely with designers and engineers to ensure accessibility is part of our core architecture."
            skills={["Java", "SpringBoot", "JavaScript", "React", "Azure"]} />

          <Experience
            timeline="2024 - present"
            title="Senior Software Engineer"
            body="Currently, I'm a senior frontend engineer at Klaviyo, where I work on the component library team to help maintain and evolve our design system. In this role, I lead accessibility efforts across components, tooling, and patterns, partnering closely with designers and engineers to ensure accessibility is part of our core architecture."
            skills={["Java", "SpringBoot", "JavaScript", "React", "Azure"]} />
        </Box>
      </Box>
      <div style={{ position: "absolute", width: "100vw", height: "99vh", top: 0, left: 0, zIndex: 1, pointerEvents: "auto", opacity: 0.5, margin: 0 }} id="particles-js"></div>
    </Paper>
  );
}

export default App;
