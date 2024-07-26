import { useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { XR, createXRStore } from "@react-three/xr";
import {
  useGLTF,
  PresentationControls,
  Environment,
  ContactShadows,
  Html,
} from "@react-three/drei";

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
          <Html>
            <button>กดสิ</button>
          </Html>
        </XR>
      </Canvas>
    </>
  );
}
export default App;
