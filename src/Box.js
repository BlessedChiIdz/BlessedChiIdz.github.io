import {useRef, useState} from "react";
import {Vector3} from "three";
import {useFrame} from "@react-three/fiber";

function Box({color}){
    const box = useRef();
    const time = useRef(0);
    const [pos,setPos] = useState(getInitialPosition())
    const [xRotSp] = useState(()=>Math.random());
    const [yRotSp] = useState(()=>Math.random());
    const [scale] = useState(()=> Math.pow(Math.random(),2.0)*0.5+0.05);



    function getInitialPosition() {
        let v = new Vector3((Math.random() * 2 - 1) * 3, Math.random() * 2.5 + 0.1, (Math.random() * 2 - 1) * 15);
        if(v.x < 0) v.x -= 1.75;
        if(v.x > 0) v.x += 1.75;

        return v;
    }

    function resetPos() {
        let v = new Vector3((Math.random() * 2 - 1) * 3, Math.random() * 2.5 + 0.1, Math.random() * 10 + 2);
        if(v.x < 0) v.x -= 1.75;
        if(v.x > 0) v.x += 1.75;

        setPos(v);
    }
    useFrame((state,delta)=>{
        time.current += delta * 1.2;
        let newZ = pos.z - (time.current);

        if(newZ < -7) {
            resetPos();
            time.current = 0;
        }

        box.current.position.set(
            pos.x,
            pos.y,
            newZ,
        )
        box.current.rotation.x += delta * xRotSp;
        box.current.rotation.y += delta * yRotSp;
    },[xRotSp,yRotSp,pos])
    return(
        <mesh ref={box} scale={scale} castShadow>
            <boxGeometry args={[1,1,1]}/>
            <meshStandardMaterial color={color} envMapIntensity={0.15}/>
        </mesh>
    )
}

export function Boxes(){
    return <>
        {
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0].map((e,i)=> <Box key={i} color={i%2===0 ? [0.255, 0.215, 0] : [0.255, 0.255, 0.255] }/>)}
    </>
}