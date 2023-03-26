export function renderSVG(svg) {
  return {
    loop: true,
    autoplay: true,
    animationData: svg,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
}
