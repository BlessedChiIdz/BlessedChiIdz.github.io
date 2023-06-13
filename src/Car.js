import {useFrame, useLoader} from "@react-three/fiber";
import {GLTFLoader} from "three/addons/loaders/GLTFLoader";
import {useEffect} from "react";
import {Mesh} from "three";

export function Car(){
    const gltf = useLoader(
        GLTFLoader,
        process.env.PUBLIC_URL + 'Car/scene.gltf'
    );

    useFrame((state, delta) => {
        let t = state.clock.getElapsedTime();

        let group = gltf.scene.children[0].children[0].children[0];
        group.children[0].rotation.x = t * 2;
        group.children[2].rotation.x = t * 2;
        group.children[4].rotation.x = t * 2;
        group.children[6].rotation.x = t * 2;
    });

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

    return <primitive object={gltf.scene}/>
}