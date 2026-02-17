import { motion, useMotionValue, useSpring } from "motion/react";
import tokens from "../../tokens";
import { useRef, useState } from "react";

export default function MagneticButton({ children, onClick, large, disabled }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 20 });
  const springY = useSpring(y, { stiffness: 200, damping: 20 });
  const [hovered, setHovered] = useState(false);

  const handleMouse = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.3);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.3);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={(e) => {
        if (disabled) return;
        handleMouse(e);
        setHovered(true);
      }}
      onMouseLeave={reset}
      onClick={disabled ? undefined : onClick}
      style={{
        x: springX,
        y: springY,
        position: "relative",
        padding: large ? "24px 56px" : "20px 48px",
        border: `1.5px solid ${tokens.accent}`,
        borderRadius: 60,
        background: "transparent",
        color: tokens.accent,
        fontFamily: tokens.fontSans,
        fontSize: large ? 17 : 15,
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        cursor: disabled ? "default" : "pointer",
        overflow: "hidden",
        zIndex: 2,
      }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: tokens.accent,
          borderRadius: 60,
          transformOrigin: "left",
          transform: `scaleX(${hovered ? 1 : 0})`,
          transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />
      <span
        style={{
          position: "relative",
          zIndex: 1,
          color: hovered ? tokens.bg : tokens.accent,
          transition: "color 0.3s",
        }}
      >
        {children}
      </span>
    </motion.button>
  );
}