import React, {forwardRef, useRef} from 'react';
import { Suspense } from 'react';
import {Canvas} from "@react-three/fiber";
import {Scene} from "./3dScene";
import {Words} from "./Words";
import "./firstSection.css"
import SecondSection from "./secondSection";


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
          <SecondSection/>
      </>
  );
}

export default App;
