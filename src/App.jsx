import { useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { XR, createXRStore } from "@react-three/xr";
const store = createXRStore();
function App() {
  const [red, setRed] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setShow(true);
          store.enterAR();
        }}>
        Enter AR
      </button>
      <Canvas>
        <XR store={store}>
          {show && (
            <group onClick={() => setRed(!red)}>
              <mesh pointerEventsType={{ deny: "grab" }} position={[0, 1, -1]}>
                <boxGeometry />
                <meshBasicMaterial color={red ? "red" : "blue"} />
              </mesh>
            </group>
          )}
        </XR>
      </Canvas>
    </>
  );
}
export default App;
