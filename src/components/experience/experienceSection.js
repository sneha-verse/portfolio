import { motion } from "motion/react";
import Experience from "../experience/experience";

function ExperienceSection({ isMobile }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: +120 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: isMobile ? 0.25 : 0.5, ease: "easeOut" }}
      >
        <Experience
          from="2024"
          to="present"
          title="Senior Java Full Stack Developer"
          body="Worked on a financial operations platform where accuracy and traceability were critical. Focused on handling historical corrections, reconciliation issues, and production stability. This role strengthened my ownership mindset — building systems that business teams rely on every day."
          skills={[
            "Java",
            "SpringBoot",
            "PL/SQL",
            "React",
            "Material UI",
            "PostgreSQL",
            "Oracle",
            "Kafka",
          ]}
          company={"Accellor"}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.5 }} // triggers when 50% visible
        transition={{ duration: isMobile ? 0.25 : 0.5, ease: "easeOut" }}
      >
        <Experience
          from="2022"
          to="2023"
          title="Java Full Stack Developer"
          body="Built backend services and dashboards to manage large-scale field deployment operations across regions. Worked heavily with real-time status tracking and event processing, which deepened my experience with distributed workflows and operational visibility."
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
        viewport={{ amount: 0.5 }} // triggers when 50% visible
        transition={{ duration: isMobile ? 0.25 : 0.5, ease: "easeOut" }}
      >
        <Experience
          from="2020"
          to="2022"
          title="Senior Application Engineer"
          body="Worked on a high-volume retail order system handling peak traffic and inventory consistency. Learned to design for performance, caching, and asynchronous processing to keep operations stable during heavy business demand."
          skills={[
            "Java",
            "SpringBoot",
            "Spring Security",
            "Apache Kafka",
            "REST APIs",
            "Redis",
            "MySQL",
            "Cassandra",
          ]}
          company={"PacWest Bancorp"}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -120 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.5 }} // triggers when 50% visible
        transition={{ duration: isMobile ? 0.25 : 0.5, ease: "easeOut" }}
      >
        <Experience
          from="2018"
          to="2020"
          title="Associate Java Developer"
          body="Started my career building healthcare integration services and secure data workflows. This experience built my foundation in API design, data handling, and writing reliable backend logic for real-world systems."
          skills={[
            "Java",
            "SpringBoot",
            "Spring Batch",
            "JWT",
            "HL7 / FHIR",
            "MySQL",
            "Maven",
          ]}
          company={"Venturedrive"}
        />
      </motion.div>
    </>
  );
}

export default ExperienceSection;
