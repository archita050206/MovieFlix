import { useEffect, useRef } from "react";

const GlobeBackground = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaEffect = null;

    if (window.VANTA) {
      vantaEffect = window.VANTA.GLOBE({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xff3f81,
        backgroundColor: 0x0d0d0d,
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="fixed top-0 left-0 w-screen h-screen -z-10"
    />
  );
};

export default GlobeBackground;
