import {
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import useVisibility from "./hooks/useVisibility";
import "./App.css";
import tokens from "./tokens";
import Particles from "./components/particles";
import LeftPanel from "./components/leftPanel";
import RightPanel from "./components/rightPanel";

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const mainContent = useRef(null);
  const [refsMap, setRef, visibility] = useVisibility();

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(56, 189, 248, 0.08), transparent 60%)`,
          pointerEvents: "none",
          transition: "background 0.3s ease",
        }}
      />
      <Particles count={100} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(${tokens.border} 1px, transparent 1px),
            linear-gradient(90deg, ${tokens.border} 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          opacity: 0.4,
          pointerEvents: "none",
        }}
      />
      <LeftPanel visibility={visibility} refsMap={refsMap} mainContent={mainContent} />
      <RightPanel setRef={setRef} mainContent={mainContent} />
    </Paper>
  );
}

export default App;
