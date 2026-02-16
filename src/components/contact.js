import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import tokens from "../tokens";
import MagneticButton from "./magneticbutton";

function FloatingInput({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  delay = 0,
}) {
  const [focused, setFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <label style={labelStyle}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          ...inputBase,
          ...(focused ? inputFocusStyle : {}),
        }}
      />
    </motion.div>
  );
}

function FloatingTextarea({ label, placeholder, value, onChange, delay = 0 }) {
  const [focused, setFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <label style={labelStyle}>{label}</label>
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        rows={5}
        style={{
          ...inputBase,
          resize: "vertical",
          minHeight: 130,
          lineHeight: 1.6,
          ...(focused ? inputFocusStyle : {}),
        }}
      />
    </motion.div>
  );
}

const inputBase = {
  width: "100%",
  padding: "16px 20px",
  background: "rgba(255, 255, 255, 0.03)",
  border: `1px solid ${tokens.border}`,
  borderRadius: 12,
  color: tokens.text,
  fontFamily: tokens.fontSans,
  fontSize: 15,
  outline: "none",
  transition: "border-color 0.3s, box-shadow 0.3s, background 0.3s",
  boxSizing: "border-box",
};

const inputFocusStyle = {
  borderColor: tokens.accent + "66",
  boxShadow: `0 0 0 3px ${tokens.accentDim}, 0 4px 20px rgba(56, 189, 248, 0.06)`,
  background: "rgba(255, 255, 255, 0.05)",
};

const labelStyle = {
  fontFamily: tokens.fontMono,
  fontSize: 11,
  color: tokens.textDim,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  marginBottom: 8,
  display: "block",
};

function RecruiterToggle({ value, onChange, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <label style={{ ...labelStyle, marginBottom: 14 }}>
        Are you a recruiter?
      </label>
      <div style={{ display: "flex", gap: 12 }}>
        {["Yes", "No"].map((option) => {
          const isActive = value === option;
          return (
            <motion.button
              key={option}
              onClick={() => onChange(option)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              style={{
                flex: 1,
                padding: "14px 24px",
                borderRadius: 12,
                border: `1.5px solid ${isActive ? tokens.accent : tokens.border}`,
                background: isActive
                  ? tokens.accentDim
                  : "rgba(255,255,255,0.02)",
                color: isActive ? tokens.accent : tokens.textMuted,
                fontFamily: tokens.fontSans,
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.3s",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Active glow */}
              {isActive && (
                <motion.div
                  layoutId="recruiter-glow"
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: 12,
                    background: `radial-gradient(circle at center, ${tokens.accentDim}, transparent 70%)`,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span
                style={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                }}
              >
                {option === "Yes" ? "👋" : "💼"} {option}
              </span>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}

function SendIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  );
}

export default function ContactSection() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    recruiter: null,
  });
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null);

  const update = (field) => (e) =>
    setForm((p) => ({ ...p, [field]: e.target.value }));

  const handleSubmit = () => {
    if (!form.firstName || !form.email || !form.message) return;
    setSubmitted(true);
    // Replace with your own form handler (e.g. emailjs, formspree, API route)
    console.log("Form submitted:", form);
  };

  const isValid = form.firstName && form.email && form.message;

  return (
    <div
      ref={sectionRef}
      style={{
        position: "relative",
        color: tokens.text,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "120px 24px",
      }}
    >

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 580,
          width: "100%",
        }}
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: tokens.font,
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 400,
            lineHeight: 1.1,
            margin: "0 0 12px 0",
            color: tokens.text,
          }}
        >
          Let's build something{" "}
          <span style={{ color: tokens.accent, fontStyle: "italic" }}>
            together
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{
            fontFamily: tokens.fontSans,
            fontSize: 16,
            color: tokens.textMuted,
            lineHeight: 1.6,
            maxWidth: 440,
            marginBottom: 48,
          }}
        >
          Have a project in mind, a question, or just want to say hi? Drop me a
          message and I'll get back to you shortly.
        </motion.p>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              style={{ display: "flex", flexDirection: "column", gap: 24 }}
            >
              {/* Name row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                }}
              >
                <FloatingInput
                  label="First Name *"
                  placeholder="Jane"
                  value={form.firstName}
                  onChange={update("firstName")}
                  delay={0.3}
                />
                <FloatingInput
                  label="Last Name"
                  placeholder="Doe"
                  value={form.lastName}
                  onChange={update("lastName")}
                  delay={0.38}
                />
              </div>

              <FloatingInput
                label="Email Address *"
                type="email"
                placeholder="jane@example.com"
                value={form.email}
                onChange={update("email")}
                delay={0.46}
              />

              <FloatingTextarea
                label="Message *"
                placeholder="Tell me about your project, idea, or just say hello..."
                value={form.message}
                onChange={update("message")}
                delay={0.54}
              />

              <RecruiterToggle
                value={form.recruiter}
                onChange={(val) => setForm((p) => ({ ...p, recruiter: val }))}
                delay={0.62}
              />

              {/* Submit */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ marginTop: 8 }}
              >
                <MagneticButton onClick={handleSubmit} large disabled={!isValid}>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      opacity: isValid ? 1 : 0.5,
                      transition: "opacity 0.3s",
                    }}
                  >
                    <SendIcon /> Send Message
                  </span>
                </MagneticButton>

                {!isValid && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{
                      fontFamily: tokens.fontMono,
                      fontSize: 11,
                      color: tokens.textDim,
                      marginTop: 14,
                      letterSpacing: "0.03em",
                    }}
                  >
                    * fill in required fields to send
                  </motion.p>
                )}
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                textAlign: "center",
                padding: "60px 40px",
                background: tokens.surface,
                backdropFilter: "blur(12px)",
                borderRadius: 24,
                border: `1px solid ${tokens.accent}22`,
              }}
            >
              {/* Animated check */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 200,
                }}
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: tokens.accentDim,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                  border: `2px solid ${tokens.accent}44`,
                }}
              >
                <motion.svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={tokens.accent}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <motion.polyline
                    points="20 6 9 17 4 12"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                  />
                </motion.svg>
              </motion.div>

              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                style={{
                  fontFamily: tokens.font,
                  fontSize: 32,
                  fontWeight: 400,
                  color: tokens.text,
                  margin: "0 0 12px 0",
                }}
              >
                Message{" "}
                <span style={{ color: tokens.accent, fontStyle: "italic" }}>
                  sent
                </span>
                !
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55 }}
                style={{
                  fontFamily: tokens.fontSans,
                  fontSize: 15,
                  color: tokens.textMuted,
                  lineHeight: 1.6,
                  maxWidth: 360,
                  margin: "0 auto",
                }}
              >
                Thanks for reaching out
                {form.firstName ? `, ${form.firstName}` : ""}! I'll get back to
                you as soon as possible.
                {form.recruiter === "Yes" &&
                  " Looking forward to connecting about opportunities."}
              </motion.p>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                onClick={() => {
                  setSubmitted(false);
                  setForm({
                    firstName: "",
                    lastName: "",
                    email: "",
                    message: "",
                    recruiter: null,
                  });
                }}
                style={{
                  marginTop: 28,
                  padding: "12px 28px",
                  borderRadius: 10,
                  border: `1px solid ${tokens.border}`,
                  background: "transparent",
                  color: tokens.textMuted,
                  fontFamily: tokens.fontMono,
                  fontSize: 12,
                  letterSpacing: "0.06em",
                  cursor: "pointer",
                  transition: "border-color 0.3s, color 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = tokens.accent + "44";
                  e.target.style.color = tokens.accent;
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = tokens.border;
                  e.target.style.color = tokens.textMuted;
                }}
              >
                Send another message
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
