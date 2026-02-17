import { useState, useEffect, useRef, useCallback } from "react";

function useVisibility(keys, threshold = 0.6) {
  const refsMap = useRef({});
  const observersMap = useRef({});
  const [visibility, setVisibility] = useState({});
  const safeThreshold = Number.isFinite(threshold) ? threshold : 0.6;

  const setRef = useCallback((key) => (el) => {
    refsMap.current[key] = el;

    if (observersMap.current[key]) {
      observersMap.current[key].disconnect();
      delete observersMap.current[key];
    }

    if (el) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setVisibility((prev) => {
            if (prev[key] === entry.isIntersecting) return prev;
            return { ...prev, [key]: entry.isIntersecting };
          });
        },
        { threshold: safeThreshold }
      );
      observer.observe(el);
      observersMap.current[key] = observer;
    }
  }, [safeThreshold]);

  useEffect(() => {
    const observers = observersMap.current;
    return () => {
      Object.values(observers).forEach((o) => o.disconnect());
    };
  }, []);

  return [refsMap.current, setRef, visibility];
}

export default useVisibility;