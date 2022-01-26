import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const maxOpacity = (target, delay = 0) => {
  gsap.to(target, 0.5, {
    delay,
    opacity: 1,
  });
};

export const minOpacity = (target, delay = 0) => {
  gsap.to(target, 0.5, {
    delay,
    opacity: 0,
  });
};

export const twistAnimation = (
  target,
  rotation = 40,
  duration = 2,
  endOpacity = 0.2,
  random = false
) => {
  gsap.fromTo(
    `#${target}`,
    duration,
    {
      rotateY: rotation,
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: `#${target}`,
        start: "top center",
      },
      ease: "Power3.ease",
      rotateY: 0,
      opacity: endOpacity,
      stagger: {
        amount: 1,
        from: random ? "random" : "start",
      },
    }
  );
};

export const reverseTwistAnimation = (
  target,
  rotation = 40,
  duration = 2,
  endOpacity = 0.2
) => {
  gsap.fromTo(
    `#${target}`,
    duration,
    {
      rotateY: 0,
      opacity: endOpacity,
    },
    {
      delay: 0,
      ease: "Sine.easeIn",
      rotateY: rotation,
      opacity: 0,
      stagger: {
        amount: 1,
        from: "random",
      },
    }
  );
};

export const slowReveal = (target, delay = 0, duration = 3) => {
  gsap.from(target, duration, {
    y: 10,
    skewX: -5,
    opacity: 0,
    ease: "Power3.easeInOut",
    stagger: {
      amount: 1.5,
    },
    delay: delay,
  });
};

export const fillSvg = (svg, color = "white", duration = 2, delay = 0) => {
  gsap.to(svg, duration, {
    delay: delay,
    strokeDashoffset: 0,
    fill: color,
  });
};

export const reverseFillSvg = (svg, duration = 3, delay = 0) => {
  gsap.to(svg, duration, {
    delay: delay,
    strokeDashoffset: 500,
    fill: "transparent",
  });
};

export const basicShow = (target, duration = 1, display) => {
  gsap.to(target, duration, {
    display: display,
    opacity: 1,
  });
};

export const basicHide = (target, duration, delay = 0) => {
  gsap.to(target, duration, {
    delay,
    display: "none",
    opacity: 0,
  });
};
