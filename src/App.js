import React, {forwardRef, useRef} from 'react';
import { Suspense } from 'react';
import {Canvas} from "@react-three/fiber";
import {Scene} from "./3dScene";
import "./firstSection+container.css"
import SecondSection from "./secondSection";


function App() {


  return (
      <>
          <div className="container">
              <div className="canvScene">
                  <Suspense fallback={null}>
                      <Canvas shadows>
                          <Scene/>
                      </Canvas>
                  </Suspense>
              </div>

              <SecondSection/>
          </div>
      </>
  );
}

export default App;
