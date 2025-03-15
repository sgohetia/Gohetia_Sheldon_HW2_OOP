export function pageEffects() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".music-player", {
    scrollTrigger: {
      trigger: ".music-player",
      toggleActions: "play none none none",
      once: true,
    },
    x: 20,
    opacity: 0,
    duration: 2,
    ease: "power2.out",
  });
  gsap.from(".genres", {
    scrollTrigger: {
      trigger: ".genres",
      toggleActions: "play none none none",
      once: true,
    },
    x: -20,
    opacity: 0,
    duration: 2,
    ease: "power2.out",
  });
  gsap.from(".music-list", {
    scrollTrigger: {
      trigger: ".music-list",
      toggleActions: "play none none none",
      once: true,
    },
    scale: 0.9,
    opacity: 0,
    duration: 2,
    ease: "power2.out",
  });
  gsap.from(".trending", {
    scrollTrigger: {
      trigger: ".trending",
      toggleActions: "play none none none",
      once: true,
    },
    y: -20,
    opacity: 0,
    duration: 2,
    ease: "power2.out",
  });
  gsap.from(".sidebar", {
    scrollTrigger: {
      trigger: ".sidebar",
      toggleActions: "play none none none",
      once: true,
    },
    x: -10,
    opacity: 0,
    duration: 2,
    ease: "power2.out",
  });
}
