import { Canvas } from "@react-three/fiber";
import { XR, Interactive, createXRStore } from "@react-three/xr";
import { useState } from "react";

const store = createXRStore();

function App() {
  const [red, setRed] = useState(false);

  return (
    <>
      <button onClick={() => store.enterAR()}>Enter AR</button>
      <Canvas sessioninit={{ requiredFeatures: ["hit-test"] }}>
        <XR store={store}>
          <Interactive onSelect={() => setRed(!red)}>
            <mesh position={[0, 1, -1]}>
              <boxGeometry />
              <meshBasicMaterial color={red ? "red" : "blue"} />
            </mesh>
          </Interactive>
        </XR>
      </Canvas>
    </>
  );
}

export default App;
