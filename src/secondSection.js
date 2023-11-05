import React, {useState} from 'react';
import "./SecondSection.scss"

const SecondSection = () => {
    let [github,setGithub] = useState("Github")
    let [mail,setMail] = useState("Mail")
    let [tg,setTg] = useState("Telegram")

    let onClickG   = () =>{
        setGithub("copied")
        navigator.clipboard.writeText("https://github.com/BlessedChiIdz")
        setTimeout(()=>setGithub("Github"),5000)
    }
    let onClickM   = () =>{
        setMail("copied")
        navigator.clipboard.writeText("kirillbedarev02@gmail.com")
        setTimeout(()=>setMail("Mail"),5000)
    }
    let onClickT   = () =>{
        setTg("copied")
        navigator.clipboard.writeText("@WeAreNotEternal51")
        setTimeout(()=>setTg("Telegram"),5000)
    }
    return (
        <div className="tableContainer">
            <table className="mainDiv">
                <thead>
                    <tr>
                        <th className="Name" colspan="3">Kirill Bedarev</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="description">
                        <td className="mainSkills">
                            <div style={{color:"white",margin:"0",width:"max-content"}}>Main skills<hr className="lineMS"></hr></div>

                            <tr className="podLinks">
                                <td>
                                    Stress resistance
                                </td>
                            </tr>
                            <tr className="podLinks">
                                <td>
                                    Scrupulousness
                                </td>
                            </tr>

                            <tr className="podLinks">
                                <td>
                                    Desire to grow
                                </td>
                            </tr>
                            <tr className="podLinks">
                                <td>
                                    systematic approach
                                </td>
                            </tr>
                        </td>
                        <td className="links">
                            <div className = "linkWord" >links</div>
                            <tr className="podLinks">
                                <td>
                                    <button onClick={onClickG} style={{backgroundColor:"black",border:"none"}}>
                                        <a id="button-1" className="button" href="#">{github}<img id="arrow-hover" style={{width:"23px",height:"17px",marginBottom:"5px"}}
                                                                                                src="https://avatars.mds.yandex.net/i?id=e2b50254c648f9ef83c21543e9335f3b-5512866-images-thumbs&n=13"/></a>
                                    </button>
                                </td>
                            </tr>

                            <tr className="podLinks">
                                <td>
                                    <button onClick={onClickM} style={{backgroundColor:"black",border:"none"}}>
                                        <a id="button-1" className="button" href="#">{mail}<img id="arrow-hover"
                                                                                              src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_White_512px.png"/></a>
                                    </button>
                                </td>
                            </tr>

                            <tr className="podLinks">
                                <td>
                                    <button onClick={onClickT} style={{backgroundColor:"black",border:"none"}}>
                                        <a id="button-1" className="button" href="#">{tg}<img id="arrow-hover"
                                        src="https://github.com/atloomer/atloomer.github.io/blob/master/img/iconmonstr-paper-plane-1-120.png?raw=true"/></a>
                                    </button>
                                </td>
                            </tr>
                        </td>
                    </tr>
                    <tr className="end">
                        <td colSpan="2" style={{paddingTop:"5vh"}}>
                            I am a React frontend developer who wants to grow in this direction,
                            have a little experience in commercial development (I wrote a working online store and put it on hosting).
                            All my projects saved in github. Copy the link above.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default SecondSection;