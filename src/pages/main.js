import { Card, Steps } from "antd";
import React, { useState, useEffect } from "react";
import Data from "../shared/question.json";
import { StepEl } from "../components/steps";
import govt from '../../src/assets/img/govt-logo.png';
import harithakeralam from '../../src/assets/img/name-logo.png';
import Introduction from "./introduction";
import Game from "./game";

export default function Main () {

    const [data, setData] = useState([]);
    const [is_intro, setIsIntro] = useState(true);

    useEffect(() => {
        console.log(data,is_intro);
        setData(Data.questions)
    },[])


    return (
        <div >
            <div id="header" className='header'>
                <div style={{paddingTop: "3%", paddingBottom:'3%'}}>
                    <div style={{position:'absolute', display:'flex'}}>
                        <div >
                            <img  src={govt} height={35} width={60}   alt='logo'/>
                        </div>
                        <div>
                            <img style={{paddingBottom:'10px'}} 
                                src={harithakeralam} height={45} width={80}  alt='logo'/>
                        </div>
                    </div>
                    
                    <div id="main">
                        {
                            is_intro ? 
                             <Introduction />
                             :
                             <Game />
                        }
                    </div>
                </div>

                </div>
            <div id="footer">
                <div className="footer-top">
                </div>
                <div className="footer"> 
                </div>
            </div>
        </div>
    )
        }