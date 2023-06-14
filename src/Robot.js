import {useFrame, useLoader} from "@react-three/fiber";
import {useEffect} from "react";
import {Mesh} from "three";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader";

export function Robot(){
    const gltf = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + 'Body/scene.gltf'
    );

    useFrame((state, delta) => {
        let t = state.clock.getElapsedTime();

    });

    useEffect(()=>{
        gltf.scene.scale.set(1.5,1.5,1.5);
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