import {useFrame, useLoader} from "@react-three/fiber";
import {useEffect} from "react";
import {Mesh} from "three";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader";

export function Masks(){
    const gltf = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + 'mi/scene.gltf'
    );

    useFrame((state, delta) => {
        let t = state.clock.getElapsedTime();

    });

    useEffect(()=>{
        gltf.scene.scale.set(3,3,3);
        gltf.scene.position.set(0,0,0);
        gltf.scene.traverse((object)=>{
            if(object instanceof Mesh){
                object.castShadow = true;
                object.receiveShadow = true;
                object.material.envMapIntensity = 20;
            }
        });
    },[gltf])

    return <primitive object={gltf.scene}/>
}