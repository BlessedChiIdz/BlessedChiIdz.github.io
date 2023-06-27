import React from 'react';
import { Suspense } from 'react';
import {Canvas} from "@react-three/fiber";
import {Scene} from "./3dScene";
import {Words} from "./Words";



function App() {
  return (
      <>
        <Suspense fallback={null}>
          <Canvas shadows>
              <Scene/>
          </Canvas>
        </Suspense>
          <Words/>
          <div>qwe</div>
      </>
  );
}

export default App;
