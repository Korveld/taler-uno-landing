jQuery(function ($) {
  const canvas = document.getElementById("hero-rive-canvas");

  const riveInstance = new rive.Rive({
    src: "./src/riv_animations/index_anim.riv",
    canvas: canvas,
    autoplay: true,
    layout: new rive.Layout({
      fit: rive.Fit.contain,
      alignment: rive.Alignment.CenterLeft,
    }),
    onLoad: () => {
      riveInstance.resizeDrawingSurfaceToCanvas();
    },
  });

  window.addEventListener('resize', () => {
    riveInstance.resizeDrawingSurfaceToCanvas();
  });
});
