import { motion } from "framer-motion";
import tokens from "../tokens";
import React, { useState } from "react";

const Particles = React.memo(({ count = 30 }) => {
  const [particles] = useState(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 3,
      duration: Math.random() * 30 + 25,
      delay: Math.random() * -30,
    })),
  );

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: tokens.accent,
            opacity: 0,
          }}
          animate={{ y: [0, -180, 0], opacity: [0, 0.4, 0] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
});

export default Particles;
