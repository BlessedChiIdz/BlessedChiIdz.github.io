import {useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader";
import {useEffect} from "react";
import {Mesh} from "three";

export function Car(){
    const gltf = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + 'Car/scene.gltf'
    );
    useEffect(()=>{
        gltf.scene.scale.set(0.005,0.005,0.005);
        gltf.scene.position.set(0.005,0.005,0.005);
        gltf.scene.traverse((object)=>{
            if(object instanceof Mesh){
                object.castShadow = true;
                object.receiveShadow = true;
                object.material.envMapIntensity = 20;
            }
        });
    },[gltf])

    return <primiteve object={gltf.scene}/>
}