import { motion, useAnimationControls } from "framer-motion";

const AnimationControls = () => {
    const controls = useAnimationControls();
    const handleClick = () => {
        controls.start("flip")
    };

  return (
    <div
      style={{
        display: "grid",
        placeContent: "center",
        height: "100vh",
        gap: "0.8rem",
      }}
    >
        <button className="example-button"
        onClick={handleClick}>Flip it</button>
        <motion.div style={{
            width: 150,
            height: 150,
            background: "black"
        }}
        variants={{
            initial: {
                rotate: "8deg"
            },
            flip: {
                rotate: "360deg"
            }
        }}
        // initial="initial"
        animate={controls}
        >

        </motion.div>
    </div>
  );
};

export default AnimationControls;
