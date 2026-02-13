import { Box, Paper, Typography, useTheme, useMediaQuery } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Experience from "./components/experience";
import "particles.js";
import { useEffect, useRef } from "react";
import particlesConfig from "./particles.json";
import profileImage from "./assets/profile.svg";
import helloImage from "./assets/hello.svg";
import briefcaseImage from "./assets/briefcase.svg";
import toolsImage from "./assets/tools.svg";
import educationImage from "./assets/education.svg";
import untImage from "./assets/unt.png";
import useVisibility from "./hooks/useVisibility";
import Heading from "./components/heading";
import { motion } from "motion/react";
import "./App.css";
import { TypeAnimation } from "react-type-animation";
import SideMenu from "./components/menu";
import Skills from "./components/skills";
import Education from "./components/education";

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    window.particlesJS("particles-js", particlesConfig);
  }, []);

  const mainContent = useRef(null);
  const [about, aboutVisibility] = useVisibility();
  const [experience, experienceVisibility] = useVisibility();
  const [skills, skillsVisibility] = useVisibility();
  const [projects, projectsVisibility] = useVisibility();
  const [education, educationVisibility] = useVisibility();
  const [resume, resumeVisibility] = useVisibility();
  const [contact, contactVisibility] = useVisibility();

  const handleLeftScroll = (e) => {
    if (mainContent.current) {
      mainContent.current.scrollTop += e.deltaY;
    }
  };

  return (
    <Paper
      sx={{
        display: "flex",
        position: "relative",
        flexDirection: isMobile ? "column" : "row",
        height: isMobile ? "100%" : "100vh",
        width: "100vw",
        backgroundColor: "rgb(15 23 42)",
        justifyContent: "center",
      }}
    >
      <Box
        onWheel={handleLeftScroll}
        sx={{
          width: isMobile ? "100%" : "40%",
          display: "flex",
          color: "white",
          justifyContent: isMobile ? "start" : "end",
          zIndex: 2,
          overflow: "hidden",
          padding: isMobile ? "20px" : 0,
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            width: isMobile ? "100%" : "70%",
            display: "flex",
            flexDirection: "column",
            height: isMobile ? "100%" : "100vh",
          }}
        >
          <Box sx={{ height: isMobile ? 0 : "9vh" }}></Box>
          <Typography fontSize={50} fontWeight="bolder">
            Sneha Annamareddy
          </Typography>
          <Typography fontWeight={700} color="gray" fontSize={25}>
            Full Stack Developer
          </Typography>
          <Typography fontWeight={700} color="gray" fontSize={25}>
            If the numbers matter to the business, I build applications the business can trust.
          </Typography>
          <Typography fontWeight={100} mt={1} fontSize={20}>
            <TypeAnimation
              sequence={[
                "🟢 Available for work, USA",
                1500,
                "Spring Boot • Microservices",
                1500,
                "AWS • Azure • Kafka",
                1500,
                "React • Full Stack",
                1500,
              ]}
              wrapper="span"
              speed={55}
              repeat={Infinity}
              cursor={true}
            />
          </Typography>

          <Box sx={{ height: isMobile ? 0 : "10vh" }}></Box>

          {!isMobile && (
            <SideMenu
              aboutVisibility={aboutVisibility}
              experienceVisibility={experienceVisibility}
              skillsVisibility={skillsVisibility}
              projectsVisibility={projectsVisibility}
              educationVisibility={educationVisibility}
              resumeVisibility={resumeVisibility}
              contactVisibility={contactVisibility}
            />
          )}

          <Box sx={{ height: isMobile ? "2vh" : "15vh" }}></Box>

          <Box
            sx={{ display: "flex", flexDirection: "row", marginTop: "auto" }}
          >
            <Box mr={3}>
              <GitHubIcon fontSize="large" />
            </Box>
            <Box mr={3}>
              <LinkedInIcon fontSize="large" />
            </Box>
            <Box mr={3}>
              <EmailIcon fontSize="large" />
            </Box>
          </Box>
          <Box sx={{ height: isMobile ? 0 : "9vh" }}></Box>
        </Box>
      </Box>
      <Box
        ref={mainContent}
        sx={{
          width: isMobile ? "100%" : "60%",
          height: isMobile ? "100%" : "100vh",
          zIndex: 2,
          overflowY: isMobile ? "hidden" : "auto",
          overflowX: "hidden",
          scrollBehavior: "smooth",
        }}
      >
        <Box
          sx={{
            width: isMobile ? "100%" : "80%",
            display: "flex",
            flexDirection: "column",
            color: "white",
          }}
        >
          <Box sx={{ height: isMobile ? "2vh" : "10vh" }}></Box>
          <Box
            ref={about}
            id="about"
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "20px",
              height: "90vh",
            }}
          >
            <Heading img={helloImage} text={"ABOUT ME"} />
            <Typography mt={2} fontWeight={250}>
              I didn’t get into Java just to write code — I was always curious about how real systems work 
              behind the scenes and how technology supports critical business operations.
              Early in my career, I realized that building enterprise software isn’t about frameworks — 
              it’s about understanding real problems, handling edge cases, and making systems reliable under pressure.
            </Typography>
            <br />
            <Typography fontWeight={250}>
              As my experience grew, my role naturally moved beyond development into ownership — designing solutions, 
              troubleshooting production issues, improving performance, and making sure business workflows run 
              without disruption.
            </Typography>
             <br />
            <Typography fontWeight={250}>
              Today, with 7+ years of experience, I focus on building Java and Spring Boot applications that 
              businesses can trust to run their critical operations — with an aim to improve stability, performance, 
              and reliability with every release.
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
                minHeight: 0,
                width: "100%",
              }}
            >
              <img
                src={profileImage}
                alt="profileImg"
                style={{
                  objectFit: "contain",
                  display: "block",
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
          </Box>
          <Box sx={{ height: "5vh" }}></Box>
          <Box
            ref={experience}
            id="experience"
            sx={{ display: "flex", flexDirection: "column", width: "100%" }}
          >
            <Box mb={2} pl="20px">
              <Heading img={briefcaseImage} text={"EXPERIENCE"} />
            </Box>
            <motion.div
              initial={{ opacity: 0, x: +120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.6 }} // triggers when 50% visible
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Experience
                from="2024"
                to="present"
                title="Senior Java Full Stack Developer"
                body="Working on a financial operations platform where accuracy of billing and reconciliation data is critical for business users. Focused on handling historical recalculations, backdated changes, and idempotent processing to keep reports consistent. Spent significant time troubleshooting data mismatches, optimizing slow queries, and stabilizing production behavior. The role has been heavily focused on correctness, performance, and operational reliability."
                skills={["Java", "SpringBoot","PL/SQL", "React", "Material UI", "PostgreSQL","Oracle", "Kafka"]}
                company={"Accellor"}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.6 }} // triggers when 50% visible
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Experience
                from="2022"
                to="2023"
                title="Java Full Stack Developer"
                body="Built backend services for a large-scale deployment tracking platform used by operations teams across regions. Implemented Kafka-based event flows to handle continuous status updates between systems. Addressed real-world issues like duplicate events, out-of-order processing, and data inconsistencies. This experience strengthened my approach to building reliable event-driven systems."
                skills={[
                  "Java",
                  "SringBoot",
                  "JavaScript",
                  "Angular",
                  "MongoDB",
                  "Microservice Architecture",
                  "Docker",
                  "Jenkins",
                  "RBAC control",
                ]}
                company={"ServicePoint"}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: +120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.6 }} // triggers when 50% visible
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Experience
                from="2020"
                to="2022"
                title="Senior Application Engineer"
                body="Worked on high-traffic order processing services supporting peak retail workloads. Focused on performance tuning, Redis caching, and moving critical flows to asynchronous Kafka processing. Involved in release monitoring and production issue resolution during high-volume periods. This role shaped my understanding of designing systems for scale and stability."
                skills={["Java", "SpringBoot", "Spring Security","Apache Kafka", "REST APIs", "Redis","MySQL", "Cassandra"]}
                company={"PacWest Bancorp"}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.6 }} // triggers when 50% visible
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Experience
                from="2018"
                to="2020"
                title="Associate Java Developer"
                body="Developed backend services for a healthcare integration platform handling HL7/FHIR data from multiple systems. Built batch jobs for data synchronization and implemented strong validation and access controls. Supported production issues related to data quality and processing failures. This was my foundation in building reliable, data-sensitive enterprise systems."
                skills={["Java", "SpringBoot", "Spring Batch", "JWT", "HL7 / FHIR", "MySQL", "Maven"]}
                company={"Venturedrive"}
              />
            </motion.div>
          </Box>
          <Box sx={{ height: "10vh" }}></Box>
          <Box ref={skills} id="skills">
            <Box mb={2} pl="20px">
              <Heading img={toolsImage} text={"SKILLS"} />
            </Box>

            <Box
              display="flex"
              flexDirection={isMobile ? "column" : "row"}
              width="100%"
            >
              <Skills
                title="Backend Technologies"
                skills={[
                  "Java",
                  "SpringBoot",
                  "Python",
                  "Django",
                  "SQL",
                  "NoSQL",
                ]}
              />

              <Skills
                title="Frontend Technologies"
                skills={[
                  "JavaScript",
                  "React",
                  "Redux",
                  "Jest",
                  "Testing Library",
                  "Webpack",
                  "ES6+",
                  "Angular",
                  "TypeScript",
                  "Next.js",
                  "Tailwind CSS",
                  "HTML/CSS",
                ]}
              />
            </Box>

            <Box
              display="flex"
              flexDirection={isMobile ? "column" : "row"}
              width="100%"
            >
              <Skills
                title="Cloud Technologies"
                skills={[
                  "AWS",
                  "Azure",
                  "GCP",
                  "Docker",
                  "Kubernetes",
                  "Terraform",
                ]}
              />

              <Skills
                title="Other Skills"
                skills={[
                  "Agile Methodologies",
                  "Git",
                  "CI/CD",
                  "Unit Testing",
                  "Microservices Architecture",
                ]}
              />
            </Box>

            <Box
              display="flex"
              flexDirection={isMobile ? "column" : "row"}
              width="100%"
            >
              <Skills
                title="Soft Skills"
                skills={[
                  "Effective Communication",
                  "Team Collaboration",
                  "Problem Solving",
                  "Adaptability",
                  "Time Management",
                ]}
              />

              <Skills
                title="Design Tools"
                skills={["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin"]}
              />
            </Box>
          </Box>
          <Box sx={{ height: "10vh" }}></Box>
          <Box ref={projects} id="projects"></Box>
          <Box ref={education} height="100vh" id="education">
            <Box mb={2} pl="20px">
              <Heading img={educationImage} text={"EDUCATION"} />
            </Box>
            <motion.div
              initial={{ opacity: 0, x: +120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.6 }} // triggers when 50% visible
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Education
                from="2024"
                to="2025"
                icon={untImage}
                degree="Master of Science"
                school="University of North Texas"
                body="Graduated with a Master of Science in Computer Science from the University of North Texas in 2024. During my time at UNT, I developed a strong foundation in software development principles, algorithms, and data structures. I also completed coursework in web development, databases, and cloud computing, which sparked my passion for building scalable and efficient applications."
              />
            </motion.div>
          </Box>
          <Box ref={resume} height="100vh" id="resume"></Box>
          <Box ref={contact} height="100vh" id="contact"></Box>
        </Box>
      </Box>
      <div
        style={{
          position: "absolute",
          width: "100vw",
          height: "99vh",
          top: 0,
          left: 0,
          zIndex: 1,
          opacity: 0.3,
          margin: 0,
        }}
        id="particles-js"
      ></div>
    </Paper>
  );
}

export default App;
