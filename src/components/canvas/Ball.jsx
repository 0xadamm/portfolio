import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = props => {
  const [decal] = useTexture([props.imgUrl]);

  return <Float></Float>;
};

export default BallCanvas;
