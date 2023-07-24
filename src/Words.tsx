import {FC, useState} from "react";
import Buttons from "./Components/buttons";
import Arrow from "./Components/arrow";


export function Words() {



    const click = () =>{
        window.scroll({
            top: window.innerHeight,
            behavior: "smooth",
    })
    }
    return (
        <>
            <div className="char WORDS" style={{ top: "5%", textAlign:"center" }}>
                Designed By BK
            </div>
            <button className="MPButton" onClick={click}>
                <Arrow/>
            </button>


        </>
    )
}