import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomIconButton({ icon, href, text }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          padding: "6px 8px",
          borderRadius: "12px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          overflow: "hidden",
          gap: 0,
          textDecoration: "none",
        }}
        whileHover={{
          background: "rgba(255,255,255,0.09)",
          boxShadow: "0 0 24px rgba(136,192,255,0.12)",
        }}
        transition={{ duration: 0.25 }}
      >
        {/* Icon — spins on hover */}
        <motion.div
          style={{ color: "#e6edf3", display: "flex", alignItems: "center" }}
          animate={{ rotate: hovered ? 360 : 0 }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
        >
          {icon}
        </motion.div>

        {/* Sliding label */}
        <AnimatePresence>
          {hovered && (
            <motion.span
              initial={{ width: 0, opacity: 0, marginLeft: 0 }}
              animate={{ width: "auto", opacity: 1, marginLeft: "6px" }}
              exit={{ width: 0, opacity: 0, marginLeft: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{
                color: "#e6edf3",
                fontSize: 15,
                fontWeight: 600,
                whiteSpace: "nowrap",
                overflow: "hidden",
                letterSpacing: "0.02em",
              }}
            >
              {text}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.a>
    </div>
  );
}
