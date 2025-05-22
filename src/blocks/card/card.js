jQuery(function ($) {
  const canvas1 = document.getElementById("card-rive-canvas-1");
  const canvas2 = document.getElementById("card-rive-canvas-2");
  const canvas3 = document.getElementById("card-rive-canvas-3");
  const canvas4 = document.getElementById("card-rive-canvas-4");
  
  const layout = new rive.Layout({
    fit: rive.Fit.contain,
    alignment: rive.Alignment.Center,
  });

  const riveCard1 = new rive.Rive({
    src: "./src/riv_animations/big_four_icons.riv",
    artboard: 'art 01',
    canvas: canvas1,
    autoplay: true,
    layout: layout,
    onLoad: () => {
      riveCard1.resizeDrawingSurfaceToCanvas();
    },
  });

  const riveCard2 = new rive.Rive({
    src: "./src/riv_animations/big_four_icons.riv",
    artboard: 'art 02',
    canvas: canvas2,
    autoplay: true,
    layout: layout,
    onLoad: () => {
      riveCard2.resizeDrawingSurfaceToCanvas();
    },
  });

  const riveCard3 = new rive.Rive({
    src: "./src/riv_animations/big_four_icons.riv",
    artboard: 'art 03',
    canvas: canvas3,
    autoplay: true,
    layout: layout,
    onLoad: () => {
      riveCard3.resizeDrawingSurfaceToCanvas();
    },
  });

  const riveCard4 = new rive.Rive({
    src: "./src/riv_animations/big_four_icons.riv",
    artboard: 'art 04',
    canvas: canvas4,
    autoplay: true,
    layout: layout,
    onLoad: () => {
      riveCard4.resizeDrawingSurfaceToCanvas();
    },
  });

  window.addEventListener('resize', () => {
    riveCard1.resizeDrawingSurfaceToCanvas();
    riveCard2.resizeDrawingSurfaceToCanvas();
    riveCard3.resizeDrawingSurfaceToCanvas();
    riveCard4.resizeDrawingSurfaceToCanvas();
  });
});
