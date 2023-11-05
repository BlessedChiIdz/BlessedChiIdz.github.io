import {CubeCamera, Environment, OrbitControls, PerspectiveCamera} from "@react-three/drei";
import {Bloom, ChromaticAberration, EffectComposer} from "@react-three/postprocessing";
import {BlendFunction} from "postprocessing";
import React, {useRef} from "react";
import {Me} from "./Mi3d";
export function  Scene(){
    let ref = useRef(PerspectiveCamera)
    console.log(ref)
    return (
        <>
            <ambientLight intensity={0.1}/>
            <OrbitControls target={[0,2,0]} maxPolarAngle={1.45}/>
            <PerspectiveCamera makeDefault fov={50} position={[8,16,-30]} ref={ref}/>
            <color args={[0,0,0]} attach="background"/>
            <CubeCamera resolution={256} frames={Infinity}>
                {(texture)=>(
                    <>
                        <Environment map={texture}/>
                        <Me/>
                    </>
                )}
            </CubeCamera>

            <spotLight
                color={[0.255, 0.255, 0.255]}
                intensity={2}
                angle={0.6}
                penumbra={0.5}
                position={[0, 15, -15]}
                castShadow
                shadow-bias={-0.0001}
            />

            <EffectComposer>

                <Bloom
                    blendFunction={BlendFunction.ADD}
                    intensity={1.3} // The bloom intensity.
                    width={300} // render width
                    height={300} // render height
                    kernelSize={5} // blur kernel size
                    luminanceThreshold={0.15} // luminance threshold. Raise this value to mask out darker elements in the scene.
                    luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
                />
                <ChromaticAberration
                    blendFunction={BlendFunction.NORMAL} // blend mode
                    offset={[0.0005, 0.0012]} // color offset
                />
            </EffectComposer>

        </>
    );
}