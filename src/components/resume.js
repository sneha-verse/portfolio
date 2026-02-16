import { useState } from "react";
import { motion } from "framer-motion";
import MagneticButton from "./magneticbutton";
import tokens from "../tokens";

function FileIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="15" y2="17" />
    </svg>
  );
}

function DownloadIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

export default function DownloadResume() {
  const [hoverCard, setHoverCard] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "SnehaResume.pdf";
    link.click();
  };

  return (
    <div
      style={{
        position: "relative",
        color: tokens.text,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 24px",
      }}
    >

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 640,
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: tokens.fontMono,
            fontSize: 11,
            color: tokens.accent,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
          }}
        >
          <span
            style={{
              width: 32,
              height: 1,
              background: tokens.accent,
              display: "inline-block",
            }}
          />
          Get the Full PDF
          <span
            style={{
              width: 32,
              height: 1,
              background: tokens.accent,
              display: "inline-block",
            }}
          />
        </motion.div>

        {/* Heading */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: tokens.font,
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 400,
            lineHeight: 1.1,
            margin: "0 0 16px 0",
            color: tokens.text,
          }}
        >
          Want the{" "}
          <span style={{ color: tokens.accent, fontStyle: "italic" }}>
            full picture
          </span>
          ?
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{
            fontFamily: tokens.fontSans,
            fontSize: 16,
            color: tokens.textMuted,
            lineHeight: 1.7,
            maxWidth: 440,
            margin: "0 auto 48px",
          }}
        >
          Download my complete résumé with detailed project breakdowns,
          certifications, and references — all in one clean PDF.
        </motion.p>

        {/* Resume preview card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={() => setHoverCard(true)}
          onMouseLeave={() => setHoverCard(false)}
          onClick={handleDownload}
          style={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            padding: "40px 56px",
            background: tokens.surface,
            backdropFilter: "blur(12px)",
            borderRadius: 20,
            border: `1px solid ${hoverCard ? tokens.accent + "44" : tokens.border}`,
            cursor: "pointer",
            transition: "border-color 0.4s, box-shadow 0.4s",
            boxShadow: hoverCard
              ? `0 20px 60px rgba(56, 189, 248, 0.1), 0 0 0 1px rgba(56, 189, 248, 0.1)`
              : "0 20px 60px rgba(0,0,0,0.2)",
            marginBottom: 40,
          }}
        >
          {/* Animated file icon */}
          <motion.div
            animate={{ y: hoverCard ? -6 : 0, scale: hoverCard ? 1.05 : 1 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ color: tokens.accent, opacity: 0.9 }}
          >
            <FileIcon />
          </motion.div>

          {/* Faux document lines */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              width: 120,
            }}
          >
            {[100, 85, 95, 60].map((w, i) => (
              <motion.div
                key={i}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.7 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  height: 3,
                  width: `${w}%`,
                  borderRadius: 2,
                  background: hoverCard
                    ? `linear-gradient(90deg, ${tokens.accent}44, ${tokens.accent}22)`
                    : `linear-gradient(90deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))`,
                  transformOrigin: "left",
                  transition: "background 0.4s",
                }}
              />
            ))}
          </div>

          <div
            style={{
              fontFamily: tokens.fontMono,
              fontSize: 11,
              color: tokens.textDim,
              marginTop: 4,
            }}
          >
            Resume.pdf · 142 KB
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 20,
            alignItems: "center",
          }}
        >
          <MagneticButton onClick={handleDownload} large>
            <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <DownloadIcon size={20} /> Download Résumé
            </span>
          </MagneticButton>
        </motion.div>

        {/* Subtle hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          style={{
            fontFamily: tokens.fontMono,
            fontSize: 11,
            color: tokens.textDim,
            marginTop: 20,
            letterSpacing: "0.03em",
          }}
        >
          or click the card above
        </motion.p>
      </div>
    </div>
  );
}
