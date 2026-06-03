import { useEffect, useRef, useState } from "react";

/**
 * Reveal — fade-in-up on scroll using IntersectionObserver.
 * Animates transform/opacity only (GPU-friendly), reveals once, and
 * automatically respects prefers-reduced-motion via the .reveal CSS.
 *
 * Props:
 *  - as: element/component to render (default "div")
 *  - delay: stagger delay in ms (applied via --reveal-delay)
 *  - className: extra classes merged with the .reveal base class
 */
function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
  style,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
