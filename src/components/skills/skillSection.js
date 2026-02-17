import { Box } from "@mui/material";
import Skills from "./skills";

function SkillSection({ isMobile }) {
  return (
    <>
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        width="100%"
      >
        <Skills
          title="Backend Technologies"
          skills={[
            "Java (8, 11, 17, 21)",
            "Python",
            "Spring Boot",
            "Spring MVC",
            "Spring Security",
            "Spring Batch",
            "Hibernate",
            "JPA",
            "REST APIs",
            "Microservices",
            "PL/SQL",
          ]}
        />

        <Skills
          title="Frontend Technologies"
          skills={[
            "React",
            "Angular",
            "TypeScript",
            "JavaScript",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Material UI",
            "Bootstrap",
            "REST Integration",
          ]}
        />
      </Box>

      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        width="100%"
      >
        <Skills
          title="Databases"
          skills={[
            "PostgreSQL",
            "Oracle",
            "MySQL",
            "MongoDB",
            "Cassandra",
            "Redis",
            "Query Optimization",
          ]}
        />

        <Skills
          title="Cloud & DevOps"
          skills={[
            "Azure",
            "AWS",
            "GCP",
            "AKS",
            "EKS",
            "GKE",
            "Docker",
            "Kubernetes",
            "Jenkins",
            "CI/CD",
            "Maven",
            "Gradle",
            "Git",
            "CloudWatch",
            "Azure Monitor",
          ]}
        />
      </Box>

      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        width="100%"
      >
        <Skills
          title="Security & Integration"
          skills={[
            "Spring Security",
            "OAuth2",
            "JWT",
            "Role-Based Access Control",
            "ServiceNow Integration",
            "SOAP",
          ]}
        />

        <Skills
          title="Messaging & Streaming"
          skills={[
            "Apache Kafka",
            "Kafka Streams",
            "Event-Driven Architecture",
            "Asynchronous Processing",
            "Retry Mechanisms",
          ]}
        />
      </Box>
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        width="100%"
      >
        <Skills
          title="AI & Automation"
          skills={[
            "GitHub Copilot",
            "Claude",
            "Agentic AI Workflows",
            "Prompt Engineering",
            "AI-assisted Development",
            "Code Generation & Refactoring",
            "Automated Documentation",
          ]}
        />
      </Box>
    </>
  );
}

export default SkillSection;
