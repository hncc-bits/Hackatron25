const loadP5 = async (p5ContainerRef) => {
  const p5 = await import("p5");

  new p5.default((sketch) => {
    let container = document.querySelector(".container");
    if (!container) {
      console.error("Error: .container not found!");
      return;
    }

    let containerHeight = container.clientHeight;
    let containerWidth = container.clientWidth;

    sketch.setup = () => {
      sketch.createCanvas(containerWidth, containerHeight).parent(p5ContainerRef.current);
      sketch.noFill();
    };

    sketch.draw = () => {
      sketch.clear(); 
    };

    sketch.windowResized = () => {
      containerHeight = container.clientHeight;
      containerWidth = container.clientWidth;
      sketch.resizeCanvas(containerWidth, containerHeight);
    };

    container.addEventListener("wheel", (event) => {
      event.stopPropagation();
    });
  });
};

export default loadP5;