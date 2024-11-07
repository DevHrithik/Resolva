"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GlowingGridBackground = () => {
  const gridLines = Array.from({ length: 8 });
  const [innerWidth, setinnerWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setinnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [innerWidth]);

  return (
    <>
      <div
        className="relative w-full h-full overflow-hidden"
        style={{
          background: "linear-gradient(to right bottom, #000000, #0A0A0A)",
        }}
      >
        {/* Static grid lines with increased visibility */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px),
                           linear-gradient(180deg, rgba(255,255,255,0.07) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
            filter: "blur(0.1px)",
            opacity: 0.4,
          }}
        />

        {/* Horizontal grid line glows */}
        {gridLines.map((_, index) => (
          <React.Fragment key={`horizontal-${index}`}>
            {/* Primary thin line */}
            <motion.div
              className="absolute h-px w-[200px]"
              style={{
                top: `${index * 100 + 1}px`,
                background: `linear-gradient(90deg,
                            transparent,
                            rgba(255,255,255,0.15) 10%,
                            rgba(255,255,255,0.6) 50%,
                            rgba(255,255,255,0.15) 90%,
                            transparent)`,
                filter: "blur(0.1px)",
                boxShadow: `0 0 2px rgba(255,255,255,0.6),
                         0 0 4px rgba(255,255,255,0.4),
                         0 0 6px rgba(255,255,255,0.3)`,
              }}
              initial={{ x: "-100%", opacity: 0, scaleY: 0.05 }}
              animate={{ x: "100%", opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: [0.4, 0.0, 0.2, 1],
                delay: index * 2,
                repeatDelay: 3,
                times: [0, 0.1, 0.9, 1],
              }}
            />

            {/* Enhanced glow effect */}
            <motion.div
              className="absolute h-px w-[150px]"
              style={{
                top: `${index * 100 + 1}px`,
                background: `linear-gradient(90deg,
                            transparent,
                            rgba(255,255,255,0) 20%,
                            rgba(255,255,255,0.5) 50%,
                            rgba(255,255,255,0) 80%,
                            transparent)`,
                filter: "blur(1px)",
                opacity: 0.4,
              }}
              initial={{ x: "-100%", scaleY: 1.5 }}
              animate={{ x: "100%" }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: [0.4, 0.0, 0.2, 1],
                delay: index * 2,
                repeatDelay: 3,
              }}
            />
          </React.Fragment>
        ))}

        {/* Vertical grid line glows */}
        {gridLines.map((_, index) => (
          <React.Fragment key={`vertical-${index}`}>
            {/* Primary thin line */}
            <motion.div
              className="absolute w-px h-[200px]"
              style={{
                left: `${index * 100 + 1}px`,
                background: `linear-gradient(180deg,
                            transparent,
                            rgba(255,255,255,0.15) 10%,
                            rgba(255,255,255,0.6) 50%,
                            rgba(255,255,255,0.15) 90%,
                            transparent)`,
                filter: "blur(0.1px)",
                boxShadow: `0 0 2px rgba(255,255,255,0.6),
                         0 0 4px rgba(255,255,255,0.4),
                         0 0 6px rgba(255,255,255,0.3)`,
              }}
              initial={{ y: "-100%", opacity: 0, scaleX: 0.05 }}
              animate={{ y: "100%", opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: [0.4, 0.0, 0.2, 1],
                delay: index * 1.5 + 3,
                repeatDelay: 2,
                times: [0, 0.1, 0.9, 1],
              }}
            />

            {/* Enhanced glow effect */}
            <motion.div
              className="absolute w-px h-[150px]"
              style={{
                left: `${index * 100 + 1}px`,
                background: `linear-gradient(180deg,
                            transparent,
                            rgba(255,255,255,0) 20%,
                            rgba(255,255,255,0.5) 50%,
                            rgba(255,255,255,0) 80%,
                            transparent)`,
                filter: "blur(1px)",
                opacity: 0.4,
              }}
              initial={{ y: "-100%", scaleX: 1.5 }}
              animate={{ y: "100%" }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: [0.4, 0.0, 0.2, 1],
                delay: index * 1.5 + 3,
                repeatDelay: 2,
              }}
            />
          </React.Fragment>
        ))}

        {innerWidth > 1024 && (
          <>
            <div className="absolute inset-0">
              <div
                className="absolute top-0 left-0 w-1/2 h-1/2"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(255,255,255,0.04) 0%, transparent 70%)",
                  filter: "blur(80px)",
                }}
              />

              <div
                className="absolute top-0 left-0 w-1/2 h-1/2"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(255,255,255,0.03) 0%, transparent 60%)",
                  filter: "blur(60px)",
                }}
              />
            </div>

            <div
              className="absolute top-0 left-0 w-1/2 h-1/2"
              style={{
                background: `radial-gradient(circle at center, 
                  rgba(255,255,255,0.02) 0%, 
                  transparent 50%
                )`,
                mixBlendMode: "screen",
              }}
            />

            <div
              className="absolute top-0 left-0 w-1/2 h-1/2"
              style={{
                background:
                  "radial-gradient(circle at center, rgba(255,255,255,0.015) 0%, transparent 40%)",
                mixBlendMode: "screen",
              }}
            />
          </>
        )}
      </div>
    </>
  );
};

export default GlowingGridBackground;