import React, {FC, useState} from 'react';
import "./sideMenu.css"
interface SideM{
    flag:any;
    clickH:() => void
}

const SideMenu : FC<SideM> = ({flag,clickH}) => {

    return (
        <div style={{visibility:flag}} className="sideMenu">
                <a href="#" className="close" onClick={clickH}></a>
        </div>

    );
};

export default SideMenu;