import {CubeCamera, Environment, OrbitControls, PerspectiveCamera} from "@react-three/drei";
import {Boxes} from "./Box";
import {Ground} from "./Ground";
import {Bloom, ChromaticAberration, EffectComposer} from "@react-three/postprocessing";
import {BlendFunction} from "postprocessing";
import React, {useRef} from "react";
import {Robot} from "./Robot";

export function  Scene(arr){
    let xyz = arr.arr
    let ref = useRef(PerspectiveCamera)
    console.log(ref)
    return (
        <>
            <OrbitControls target={[0,2,0]} maxPolarAngle={1.45} maxDistance={15} minDistance={3}/>
            <PerspectiveCamera makeDefault fov={50} position={[xyz[0],xyz[1],xyz[2]]} ref={ref}/>
            <color args={[0,0,0]} attach="background"/>
            {/*<Rings/>*/}
            <Boxes/>
            <CubeCamera resolution={256} frames={Infinity}>

                {(texture)=>(
                    <>
                        <Environment map={texture}/>
                        <Robot/>
                    </>
                )}
            </CubeCamera>
            <spotLight
                color={[0.255, 0.215, 0]}
                intensity={1.5}
                angle={0.6}
                penumbra={0.5}
                position={[5, 5, 0]}
                castShadow
                shadow-bias={-0.0001}
            />
            <spotLight
                color={[0.255, 0.255, 0.255]}

                intensity={2}
                angle={0.6}
                penumbra={0.5}
                position={[-5, 5, 0]}
                castShadow
                shadow-bias={-0.0001}
            />
            <Ground/>
            <EffectComposer>
                {/*<DepthOfField focusDistance={0.0025} focalLength={0.01} bokehScale={3} height={480}/>*/}

                <Bloom
                    blendFunction={BlendFunction.ADD}
                    intensity={1.3} // The bloom intensity.
                    width={300} // render width
                    height={300} // render height
                    kernelSize={5} // blur kernel size
                    luminanceThreshold={0.15} // luminance threshold. Raise this value to mask out darker elements in the scene.
                    luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
                />
                {/*<FGrid/>*/}
                <ChromaticAberration
                    blendFunction={BlendFunction.NORMAL} // blend mode
                    offset={[0.0005, 0.0012]} // color offset
                />
            </EffectComposer>

        </>
    );
}