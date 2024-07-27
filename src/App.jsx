import React from "react";
import { Entity } from "react-aframe-ar";

function MyARApp() {
  return (
    <a-scene arjs>
      <Entity primitive="a-marker" preset="hiro" />
      <Entity primitive="a-model" src="model.gltf" position="0 0.5 -0.5" />
    </a-scene>
  );
}

export default MyARApp;
