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
          title="Senior Software Developer"
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
          company={"GEICO"}
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
          title="Software Developer"
          body="Contributed to a healthcare services platform where reliability and data integrity were critical. Worked on resolving eligibility discrepancies, supporting claims adjustments, and maintaining production performance. This experience reinforced a strong sense of ownership — delivering stable solutions that operations and care teams rely on daily."
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
          company={"Evernorth Health Services"}
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
          title="Software Developer"
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
          title="Associate Software Developer"
          body="Started my career working on financial systems, building services for transaction processing and secure data flows. This experience strengthened my foundation in API design, handling sensitive financial data, and developing reliable backend logic for business-critical applications."
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
