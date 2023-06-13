import {MeshReflectorMaterial} from "@react-three/drei";
import {useLoader} from "@react-three/fiber";
import {LinearEncoding, RepeatWrapping, TextureLoader} from "three";
import {useEffect} from "react";

export function Walls(){

    const [rough,norm] = useLoader(TextureLoader,[
        process.env.PUBLIC_URL + 'texture/terrain-roughness.jpg',
        process.env.PUBLIC_URL + 'texture/terrain-normal.jpg',
    ])
    useEffect(()=>{
        [norm,rough].forEach((t)=>{
            t.wrapS = RepeatWrapping;
            t.wrapT = RepeatWrapping;
            t.repeat.set(5,5);
        });
        norm.encoding = LinearEncoding;
    },[norm,rough])
    return(
        <mesh rotation-z={55} position = {[0,0,-27]} castShadow receiveShadow>
            <planeGeometry args = {[10,10]}/>
            <MeshReflectorMaterial

                envMapIntensity={0}
                dithering={true}
                color={[0, 0, 0]}
                roughness={0.7}
                roughnessMap={rough}
                normalMap={norm}
                blur={[1000, 400]} // Blur ground reflections (width, heigt), 0 skips blur
                mixBlur={30} // How much blur mixes with surface roughness (default = 1)
                mixStrength={80} // Strength of the reflections
                mixContrast={1} // Contrast of the reflections
                resolution={1024} // Off-buffer resolution, lower=faster, higher=better quality, slower
                mirror={0} // Mirror environment, 0 = texture colors, 1 = pick up env colors
                depthScale={0.01} // Scale the depth factor (0 = no depth, default = 0)
                minDepthThreshold={0.9} // Lower edge for the depthTexture interpolation (default = 0)
                maxDepthThreshold={1} // Upper edge for the depthTexture interpolation (default = 0)
                depthToBlurRatioBias={0.25} // Adds a bias factor to the depthTexture before calculating the blur amount [blurFactor = blurTexture * (depthTexture + bias)]. It accepts values between 0 and 1, default is 0.25. An amount > 0 of bias makes sure that the blurTexture is not too sharp because of the multiplication with the depthTexture
                debug={0}
                reflectorOffset={0.2} // Offsets the virtual camera that projects the reflection. Useful when the reflective surface is some distance from the object's origin (default = 0)
            />
        </mesh>
    );
}