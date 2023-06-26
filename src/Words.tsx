import SideMenu from "./Components/sideMenu";
import {FC, useState} from "react";

interface  ColoredLine{
    color:any;
}

export function Words() {
    const [visible,setVisible] = useState(false)
    let color:string = "rgb(255, 247, 204)";
    const ColoredLine: FC<ColoredLine>= ({ color }) => (
        <hr
            style={{
                color: color,
                margin:"14%",
                backgroundColor: color,
                height: 7,
                width:35,
            }}
        />
    );
    let flag:any;
    let notFlag:any;
    if(visible == false){
        flag = 'hidden'
        notFlag = 'visible'
    }
    if(visible == true){
        flag = 'visible'
        notFlag = 'hidden'
    }

    const click = () =>{
        visible == true ? setVisible(false) : setVisible(true)
    }
    return (
        <>
            <div className="char WORDS" style={{ top: "5%", textAlign:"center" }}>
                Designed By BK
            </div>
            <button className="char buttonMM" onClick={click} style={{visibility:notFlag}}>
                <ColoredLine color={color}/>
                <ColoredLine color={color}/>
                <ColoredLine color={color}/>
            </button>
            <SideMenu flag={flag} clickH={click}/>
        </>
    )
}