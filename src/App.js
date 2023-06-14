import React from 'react';
import { Suspense } from 'react';
import {Canvas} from "@react-three/fiber";
import {CarShow} from "./3dScene";


function App() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow/>
      </Canvas>
    </Suspense>
  );
}

export default App;
