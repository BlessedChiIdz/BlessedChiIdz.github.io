import React from 'react';
import { Suspense } from 'react';
import {Canvas} from "@react-three/fiber";
import {Scene} from "./3dScene";
import {Words} from "./Words";
import "./style.css"


function App() {
  return (
      <>
          <div className="canvScene">
              <Suspense fallback={null}>
                  <Canvas shadows>
                      <Scene/>
                  </Canvas>
              </Suspense>
              <Words/>
          </div>
          <div style={{height:1000}}>qwe</div>
          <div>qwe</div>
      </>
  );
}

export default App;
